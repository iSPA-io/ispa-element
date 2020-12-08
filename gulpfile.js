'use strict';
const {src, dest, series} = require('gulp');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
const flatten = require('gulp-flatten');

const copyTask = function() {
  return src(['src/components/**/!(*.js)*'])
      .pipe(dest('./components'));
};

const buildCss = function() {
  return src([
    'src/components/common/Common.css',
    'src/components/**/*.css',
  ])
      .pipe(concat('ispa-element.css'))
      .pipe(dest('resources'))
      .pipe(uglifycss({'uglyComments': true}))
      .pipe(rename('ispa-element.min.css'))
      .pipe(dest('resources'));
};

const buildThemes = function() {
  return src([
    'public/themes/**/*',
  ])
      .pipe(dest('resources/themes'));
};

const images = function() {
  return src([
    'src/components/**/images/*.png',
    'src/components/**/images/*.gif',
  ]).pipe(flatten())
      .pipe(dest('resources/images'));
};

const buildExports = function() {
  return src([
    'exports/*.js',
    'exports/*.d.ts',
  ]).pipe(dest('./'));
};

exports.copyTask = copyTask;
exports.buildResources = series(buildCss, images, buildThemes);
exports.buildExports = buildExports;
