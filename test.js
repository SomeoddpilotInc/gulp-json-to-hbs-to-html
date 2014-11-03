var assert = require('assert');
var gutil = require('gulp-util');
var template = require('./index');
var handlebars = require('handlebars');

handlebars.registerPartial('header', '<header/>');

it('should compile Handlebars templates', function (cb) {

  var stream = template(handlebars);

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
