/**
gulp commands
build -
develop -
serve -
*/

var gulp = require('gulp'),
    umd = require('gulp-umd'),
    watch = require('gulp-watch'),
    //jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    eslint = require('gulp-eslint'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');

var root = __dirname;
var app_dir = {
    src: root + '/src',
    css: root + '/build/css',
    build: root + '/build'
};

config = {
  src: 'src',
  build: 'build',
  dist: 'dist',
  stylusSrc: 'src/css/app.styl',
  stylusWatchSrc: 'src/css/**/*.styl',
  stylusDest: 'build/css',
  copyBuildSrc: [
    'src/js/vendor/**/*.js',
    'src/js/vendor/**/*.css',
    'src/js/vendor/**/*/*.woff2',
    'src/js/vendor/**/*/*.woff',
    'src/js/vendor/**/*/*.ttf',
    'src/js/vendor/leaflet/dist/**/*',
    'src/images/**/*',
    'src/css/fonts/**/*'
  ],
  copyDistSrc: [
    'build/**/*.css',
    'build/**/*.html',
    'build/**/*.ttf',
    'build/images/**/*',
    'build/index.php'
    ],
  lintSrc: [
    'src/js/**/*.js',
    'src/lib/**/*.js'
  ],
  browserSyncSrc: [
    'build/**/*.html',
    'build/**/*.js',
    'build/**/*.css',
    'build/**/*.ttf',
  ],
  watchSrc: [
    'src/**/*.html',
    'src/**/*.js',
    'src/**/*.css'
  ]
}


/*********Watch************/
gulp.task('compile-jade', function() {
    return gulp.src(app_dir.src + '/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(app_dir.build))
});

gulp.task('compile-sass', function() {
    console.log(app_dir.css);
    return gulp.src(app_dir.css + '/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(app_dir.css));

});

gulp.task('watch', ['compile-jade'], function() {
    // watch jade and style
    gulp.watch('**/*.jade', ['compile-jade']);
    //gulp.watch('**/*.scss', ['compile-sass']);
});
gulp.task('browser-sync', function () {
  browserSync({
    server: app_dir.build,
    port: process.env.PORT || 3000,
    files: config.browserSyncSrc,
    logFileChanges: false,
    ghostMode: false,
    reloadOnRestart: false,
    open: false,
    ui: false
  });
});

gulp.task('copy-build', function () {
  return gulp.src(config.copyBuildSrc, {base: config.src})
          .pipe(gulp.dest(config.build));
});


gulp.task('copy-build:watch', ['copy-build'], function () {
  gulp.watch(config.copyBuildSrc, ['copy-build']);
});

gulp.task('copy-dist', function () {
  return gulp.src(config.copyDistSrc, {base: config.build})
          .pipe(gulp.dest(config.dist));
});

gulp.task('shim-babel-polyfill', function () {
  return gulp.src('src/vendor/babel-polyfill/browser-polyfill.js')
          .pipe(umd({
            exports: function () {
              return '_babelPolyfill';
          },
          namespace: function () {
              return 'window._babelPolyfill';
          }
          }))
          .pipe(gulp.dest('build/shim/babel-polyfill/'));
});


gulp.task('shim-fetch', function () {
  return gulp.src('src/vendor/fetch/fetch.js')
          .pipe(umd({
            exports: function () {
              return 'fetch';
            },
            namespace: function () {
              return 'window.fetch';
            }
          }))
          .pipe(gulp.dest('build/shim/fetch/'));
});

gulp.task('shim', ['shim-babel-polyfill', 'shim-fetch']);

gulp.task('lint', function () {
  return gulp.src(config.lintSrc)
          .pipe(eslint())
          .pipe(eslint.format());
});

gulp.task('lint:watch', function () {
  return gulp.src(config.lintSrc)
          .pipe(watch(config.lintSrc))
          .pipe(eslint())
          .pipe(eslint.formatEach());
});
