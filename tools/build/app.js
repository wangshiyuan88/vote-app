var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify');

var dependencies = [
    'bootstrap',
    'jquery',
    'toastr',
    'react',
    'react-dom',
    'react-redux',
    'redux'
]

var entry = path.resolve(__dirname, '../..', 'app', 'client.js');

var production = process.env.NODE_ENV === 'production';

gulp.task('build:app', function(){
    return browserify({ entries: entry, debug: true })
        .external(dependencies)
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/public/js/dist'))
})
