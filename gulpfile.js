const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('default', function() {
  // place code for your default task here
  console.log("Running gulp...");
});

// Gulp Sass tasks

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('babel', () => {
    gulp.src('./src/*.js')
        .pipe(babel({
            ignore: 'gulpfile.babel.js'
        }))
        .pipe(gulp.dest('./dist'));
});
 
gulp.task('babel:watch', () => {
    gulp.watch('./src/*.js', ['babel']);
});
 
gulp.task('watch', ['babel', 'babel:watch', 'sass', 'sass:watch']);