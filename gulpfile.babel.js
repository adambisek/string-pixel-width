// if this file named gulpfile.babel.js -> can be used ES6 syntax :)
import gulp from 'gulp'; // eslint-disable-line import/no-extraneous-dependencies
import eslint from 'gulp-eslint'; // eslint-disable-line import/no-extraneous-dependencies

const filesToLint = [
  './*.js',
  './src/**/*.js',
  './__tests__/**/*.js',
];

gulp.task('lint', () => {
  const stream = gulp.src(filesToLint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
  return stream;
});

gulp.task('lint-fix', () => {
  const stream = gulp.src(filesToLint, { base: '.' })
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest('.'));
  return stream;
});
