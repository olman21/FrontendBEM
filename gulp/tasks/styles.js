var gulp = require("gulp"),
    postcss = require('gulp-postcss'),
    autoPrex = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importCss = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task("styles",function(){
    return gulp.src('./app/styles/styles.css')
        .pipe(postcss([importCss,mixins,cssVars,nested,autoPrex]))
        .on("error",function(error){
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/styles/dist'))
});