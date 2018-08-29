// 获取 gulp
var gulp = require('gulp');

var babel = require("gulp-babel");


gulp.task("js", function () {
  return gulp.src("src/**/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
gulp.task('copy',  function() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['copy', 'js']);