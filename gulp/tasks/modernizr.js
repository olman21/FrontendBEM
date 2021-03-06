var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr',function(){
    return gulp.src(['./app/styles/dist/*.css','./app/scripts/**/*.js','!./app/scripts/dist'])
        .pipe(modernizr({
            options: [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest('./app/scripts/dist'));
});