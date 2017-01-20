var gulp = require("gulp"),
    sprites = require('gulp-svg-sprite'),
    rename = require('gulp-rename')
    del = require('del'),
    svg2png = require('gulp-svg2png');


var config ={
    shape:{
        spacing: {
            padding:1
        }
    },
    mode: {
        css: {
            variables: {
              replaceSvgWithPng: function(){
                  return function (sprite, render) {
                    return render(sprite).split('.svg').join('.png');
                  }
              }
            },
            sprite:'svg/sprite.svg',
            render:{
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};
gulp.task('createSprite', function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(sprites(config))
            .pipe(gulp.dest('./app/styles/temp/sprite'));
});

gulp.task('createPngSprite',['createSprite'], function () {
    return gulp.src('./app/styles/temp/sprite/css/svg/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/styles/temp/sprite/css/svg'));
});

gulp.task('handleSprite',['createSprite'],function(){
    return gulp.src('./app/styles/temp/sprite/css/*.css')
        .pipe(rename('_sprites.pcss'))
        .pipe(gulp.dest('./app/styles/modules'));
});

gulp.task('cleanSprite',['handleSprite'],function(){
    return del('./app/styles/dist/sprite/svg');
});

gulp.task('moveSprite',['cleanSprite'],function(){

    return gulp.src('./app/styles/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./app/styles/dist/sprite'));
});

gulp.task('generateSprite',['createSprite','createPngSprite','handleSprite','cleanSprite','moveSprite'],function(){
   return del('./app/styles/temp/sprite');
});