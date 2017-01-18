var path = require('path');

module.exports = {
    entry:{
        App: "./app/scripts/App.js",
        Vendor: "./app/scripts/Vendor.js"
    },
    output: {
    path: "./app/scripts/dist",
        filename: "[name].js"
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