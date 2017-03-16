// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanhtml = require('gulp-cleanhtml');

// Style Dependencies
var less = require('gulp-less');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jslint = require('gulp-jslint');



gulp.task('html', function(){
    gulp.src('src/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('dist'))
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'))
})


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        //.pipe(browserSync.stream());
});

// Concatenate & Uglify JS
 /*  // Core
gulp.task('scripts_core', function() {
    return gulp.src('src/js/core/*.js')
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist/buildjs'))
        .pipe(rename('core.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))

});
   //JQuery
gulp.task('scripts_jquery', function() {
    return gulp.src('src/js/jquery/*.js')
        .pipe(concat('jquery.js'))
        .pipe(gulp.dest('dist/buildjs'))
        .pipe(rename('jquery.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))

});

   //all
gulp.task('scripts', ['scripts_jquery', 'scripts_core']);
*/

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/buildjs'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))

});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', ['html']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'html']);



/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Browser-Sync Setup
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
  },
});
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('scr/**[A]*.html').on('change', browserSync.reload); ----------------------------[A]:/
});
*/
