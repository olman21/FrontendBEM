var gulp = require("gulp"),
    sprites = require('gulp-svg-sprite');

var config ={
    mode: {
        css: {
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
            .pipe(gulp.dest('./app/styles/dist/sprites/'));
});