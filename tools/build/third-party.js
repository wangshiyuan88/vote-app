var gulp = require('gulp'),
    concat = require('gulp-concat'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify');

var thirdPartyJs = [
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/toastr/toastr.js'
]

var production = process.env.NODE_ENV == 'production';

gulp.task('build:thirdPartyLib', function(){
    return gulp.src(thirdPartyJs)
        .pipe(concat('bundle.js'))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('./app/public/js/dist'))
})
