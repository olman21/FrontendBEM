var path = require('path');

module.exports = {
    entry:"./app/scripts/App.js",
    output: {
    path: "./app/scripts/dist",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: [/(node_modules)/, path.resolve(__dirname, 'scripts/dist'),]
            }
        ]
    }
}