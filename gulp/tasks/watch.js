var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require('browser-sync').create();

gulp.task("html",function(){
    browserSync.reload();
});

gulp.task('cssInject',['styles'],function(){
    gulp.src('./app/styles/dist/styles.css')
        .pipe(browserSync.stream());
});
gulp.task("watch",function(){
    browserSync.init({
        server:{
            baseDir: "app",
        }
    });
    watch('./app/*.html',function(){
        gulp.start('html');
    });

    watch('./app/styles/**/*.pcss',function(){
        gulp.start('cssInject');
    });
});