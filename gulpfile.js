/*eslint-env node */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jsdoc = require('gulp-jsdoc3');
var del = require('del');
var rename = require('gulp-rename');
//var jasmine = require('gulp-jasmine-phantom');

// Default gulp task
gulp.task('default', ['build', 'serve']);

// Build application
gulp.task('build',[
        'clean', 'copy-components', 'copy-html',
        'styles', 'scripts', 'crunch-images', 'docs'
    ]);

// Clean production folder
gulp.task('clean', function() {
    del.sync(['dist/**', '!dist']);
});

// Copy components and bower_components
gulp.task('copy-components', function () {
  gulp.src('src/app/bower_components/**')
  .pipe(gulp.dest('dist/app/bower_components'));

  gulp.src(['src/app/components/**', '!src/app/components/**/*_test.js'])
  .pipe(gulp.dest('dist/app/components'));
});

// Copy HTML files to production folder
gulp.task('copy-html', function() {
    return gulp.src(['src/app/**/*.html', '!src/app/bower_components'],
            { base: 'src' })
        .pipe(gulp.dest('./dist'));
});

// Compile SASS files into CSS & use autoprefixer
gulp.task('styles', function() {

    gulp.src('src/app/assets/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })
        .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('dist/app/assets/css'))
        .pipe(browserSync.stream());
});

// Copy all JavaScript files except tests.
// (Sourcemaps + babel + concat + minify)
gulp.task('scripts', function () {
    return gulp.src(['src/app/assets/js/**/*.js', 'src/app/views/**/*.js',
            '!src/app/views/**/*_test.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/app/assets/js'));
});

// Crunching and coping images to production folder
gulp.task('crunch-images', function() {
    return gulp.src('src/app/assets/img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/app/assets/img'));
});

// Generate documentation for services
gulp.task('docs', function (cb) {
    del.sync('./docs/dist');  // Delete previous docs
    var config = require('./docs/build/conf.json'); // Set configuration file
    gulp.src(['./docs/build/README.md', './src/app/assets/js/**/*.js'],
            { read: false })
        .pipe(jsdoc(config, cb));
});

// Linting with ESLint
gulp.task('lint', function () {
    return gulp.src(['src/app/assets/js/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// HTML watch task
gulp.task('html-watch', ['copy-html'], function() {
    browserSync.reload();
});

// JS watch task
gulp.task('js-watch', ['lint', 'scripts'], function() {
    browserSync.reload();
});

// Static Server + watching js/scss/html files
gulp.task('serve', function() {
    browserSync.init({ server: './dist/app/' });
    gulp.watch(['src/app/assets/js/**/*.js', 'src/app/views/**/*.js'],
        ['js-watch']);
    gulp.watch('src/app/assets/sass/**/*.scss', ['styles']);
    gulp.watch('src/app/**/*.html', ['html-watch']);
});
