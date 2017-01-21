var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewBuild',function () {
    browserSync.init({
        server:{
            baseDir: "docs",
        }
    });
});

gulp.task('clearDist',function(){
    return del('./docs');
});

gulp.task('copyRawFiles',['clearDist'],function(){
    return gulp.src(['./app/**/*',
                    '!./app/*.html',
                    '!./app/assets/images/**',
                    '!./app/scripts/**',
                    '!./app/styles/**',
                    '!./app/temp/**'])
        .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages',['clearDist'],function(){
   return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
            .pipe(imagemin({
               progressive: true,
               interlaced: true,
               multipass: true
            }))
            .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('optimizeSprites',['clearDist','generateSprite'],function(){
    return gulp.src(['./app/styles/dist/**/*.{svg,png}'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./docs/styles'));
});

gulp.task('usemin',['clearDist','styles','scripts'],function(){
    return gulp.src(['./app/index.html'])
        .pipe(usemin({
            css: [function(){
                return rev();
            },function(){
                return cssnano();
            }],
            js: [function(){
                return rev();
            },function(){
                return uglify();
            }]
        }))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build',['clearDist','copyRawFiles','optimizeImages','optimizeSprites','usemin','previewBuild']);