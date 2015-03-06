var assert = require('assert');
var gutil = require('gulp-util');
var template = require('./index');
var handlebars = require('handlebars');

handlebars.registerPartial('header', '<header/>');

it('should compile Handlebars templates', function (cb) {

  var stream = template({handlebars: handlebars});

  stream.on('data', function (data) {
    assert.equal(data.contents.toString(), "<header/><li>Lorem</li>\n<li>Ipsum</li>\n");
    cb();
  });

  stream.write(new gutil.File({
    contents: new Buffer(JSON.stringify({
      "template": "test.handlebars",
      "people": ["Lorem", "Ipsum"]
    }))
  }));

  stream.end();
});

it('should throw errors if incorrect template', function (cb) {

  var stream = template(handlebars);

  try {
    stream.write(new gutil.File({
      contents: new Buffer(JSON.stringify({
        "template": "notreal.handlebars",
        "people": ["Lorem", "Ipsum"]
      }))
    }));
  } catch (error) {
    assert.equal(error.message, 'Template "notreal.handlebars" does not exist');
    cb();
  }

  stream.end();
});

it('should throw errors if missing template', function (cb) {

  var stream = template(handlebars);

  try {
    stream.write(new gutil.File({
      contents: new Buffer(JSON.stringify({
        "people": ["Lorem", "Ipsum"]
      }))
    }));
  } catch (error) {
    assert.equal(error.message, "Missing template parameter");
    cb();
  }

  stream.end();
});
