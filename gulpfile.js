// 获取 gulp
var gulp = require('gulp');
 
var imageMin = require('gulp-imagemin');
 
gulp.task('image',function(){
    gulp.src('src/image/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('src/image2'))
})