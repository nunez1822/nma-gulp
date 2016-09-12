const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())          // <--- sourcemaps
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))      // <--- sourcemaps
    .pipe(gulp.dest('dist'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src([
    'app/**/*', 
    'index.html', 
    'systemjs.config.js',
    'styles/main-styles.css',
    '!app/**/*.ts'
  ], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy libraries
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/toastr/build/toastr.min.css',
    'node_modules/ng2-toastr/bundles/ng2-toastr.min.css',
    'node_modules/primeui/themes/omega/theme.css',
    'node_modules/primeui/primeui-ng-all.min.css',
    'node_modules/primeui/primeui.min.css'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// copy dependencies
gulp.task('copy:js', ['clean'], function() {
  return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/ng2-toastr/bundles/ng2-toastr.min.js',
    'node_modules/toastr/build/toastr.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/primeui/primeui-ng-all.js',
    'node_modules/ng2-bs3-modal/bundles/ng2-bs3-modal.js'
    ])
    .pipe(gulp.dest('dist/js'))
});

// // copy map
// gulp.task('copy:maps', ['clean'], function() {
//   return gulp.src([
//     'node_modules/@angular',
//     'node_modules/angular2-in-memory-web-api',
//     'node_modules/rxjs',
//     'node_modules/lodash/lodash.js',
//     'node_modules/primeng'
//     ])
//     .pipe(gulp.dest('dist/map'))
// });

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(['app/**/*', 'index.html', 'styles.css'], ['buildAndReload']);
});

gulp.task('build', ['compile', 'copy:js', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);