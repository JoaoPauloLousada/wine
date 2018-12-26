const gulp = require('gulp');
//const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

// gulp.task('minify-images', function() {
//     gulp.src('assets/images/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('assets/images'));
// });

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'));
  });