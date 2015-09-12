var gulp = require('gulp');
var es6transpiler = require('gulp-es6-transpiler');
 
gulp.task('default', function () {
    return gulp.src('index.js')
        .pipe(es6transpiler())
        .pipe(gulp.dest('dist'));
});