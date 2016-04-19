var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function() {
    var files = [
    '**/*.html',
    'build/**/*.css'
    ];

    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});

// sass
gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('default',['browserSync'], function () {
  gulp.watch('./src/**/*.scss', ['sass']);
})
