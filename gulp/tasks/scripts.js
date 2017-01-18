var gulp = require('gulp'),
    webpack = require('webpack'),
    watch = require("gulp-watch");

gulp.task('scripts',function(callback){
    webpack(require('../../webpack.config.js'), function(error,stats){
        if(error)
            console.log(error.toString());

        console.log(stats.toString());

        callback();
    });
});

