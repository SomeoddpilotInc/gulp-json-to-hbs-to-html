gulp-json-to-hbs-to-html
========================

[![Build Status](https://travis-ci.org/SomeoddpilotInc/gulp-json-to-hbs-to-html.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/gulp-json-to-hbs-to-html)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html.svg)](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html#info=devDependencies)

A Gulp library to compile HTML from JSON and Handlebars templates

```
var gulp = require("gulp");
var jsonHbsHtml = require("gulp-json-to-hbs-to-html");

gulp.src("./data/**/*.json")
  .pipe(jsonHbsHtml({
    prefix: "templates/",
    suffix: "./handlebars"
  }))
  .pipe(gulp.dest("./public"));
```
