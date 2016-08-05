gulp-json-to-hbs-to-html
========================

[![npm version](https://badge.fury.io/js/gulp-json-to-hbs-to-html.svg)](https://badge.fury.io/js/gulp-json-to-hbs-to-html)
[![Build Status](https://travis-ci.org/SomeoddpilotInc/gulp-json-to-hbs-to-html.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/gulp-json-to-hbs-to-html)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html.svg)](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/gulp-json-to-hbs-to-html#info=devDependencies)

A Gulp library to compile HTML from JSON and Handlebars templates

DEPRECATED: [gulp-consolidate-render](https://github.com/SomeoddpilotInc/gulp-consolidate-render) provides more flexible template rendering in combination with YAML frontmatter.

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
