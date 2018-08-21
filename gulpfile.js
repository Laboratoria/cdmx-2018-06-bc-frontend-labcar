let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');

// compilar archivos scss a css

gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/dist/scss/bootstrap.scss', 'src/scss/style.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/tether/dist/js/tether.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './src'
  });
  gulp.watch(['node_modules/bootstrap/dist/scss/bootstrap.scss', '*/scss'], ['sass'])
  gulp.watch('src/*.html').on('change', browserSync.reload);
});