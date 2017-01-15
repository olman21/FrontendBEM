var gulp = require("gulp"),
    sprites = require('gulp-svg-sprite'),
    rename = require('gulp-rename')
    del = require('del');

var config ={
    mode: {
        css: {
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

gulp.task('handleSprite',['createSprite'],function(){
    return gulp.src('./app/styles/temp/sprite/css/*.css')
        .pipe(rename('_sprites.pcss'))
        .pipe(gulp.dest('./app/styles/modules'));
});

gulp.task('cleanSprite',['handleSprite'],function(){
    return del('./app/styles/dist/sprite/svg');
});

gulp.task('moveSprite',['cleanSprite'],function(){

    return gulp.src('./app/styles/temp/sprite/css/svg/*.svg')
        .pipe(gulp.dest('./app/styles/dist/sprite/svg'));
});

gulp.task('generateSprite',['moveSprite'],function(){
   return del('./app/styles/temp/sprite');
});