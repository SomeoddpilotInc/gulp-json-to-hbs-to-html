var gutil = require('gulp-util');
var through = require('through2');
var handlebars = require('handlebars');
var fs = require('fs');

module.exports = function (opts) {

  var options = opts || {};
  if (options.handlebars) {
    handlebars = options.handlebars;
  }
  if (!options.prefix) {
    options.prefix = '';
  }
  if (!options.suffix) {
    options.suffix = '';
  }

  return through.obj(function (file, enc, callback) {
    var data = JSON.parse(file.contents.toString());

    if (!data.template) {
      this.emit(
        'error',
        new gutil.PluginError('gulp-json-to-hbs-to-html', 'Missing template parameter')
      );
      return callback();
    }

    var templatePath = options.prefix + data.template + options.suffix;

    if (!fs.existsSync(templatePath)) {
      this.emit(
        'error',
        new gutil.PluginError('gulp-json-to-hbs-to-html', 'Template does not exist')
      );
      return callback();
    }

    var templateString = fs.readFileSync(templatePath, 'utf8');

    var templateFunc = handlebars.compile(templateString);

    file.contents = new Buffer(template(data));
    this.push(file);
    callback();
  });
};
