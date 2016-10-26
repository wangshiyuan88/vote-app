var gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tools/build', {recurse: false});

gulp.task('default', ['build:thirdParty'])
