var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify');

var dependencies = [
    'bootstrap',
    'jquery',
    'toastr',
    'react',
    'react-dom',
    'react-redux',
    'redux'
]

var production = process.env.NODE_ENV === 'production';

gulp.task('build:dependencies', function(){
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('./app/public/js/dist'))
})
