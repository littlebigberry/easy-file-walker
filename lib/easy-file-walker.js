var path = require('path');
var fs = require('fs');
var Promise = require('promise');

exports.walkFullPath = function (dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
        	results = results.concat(file);
          exports.walkFullPath(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

exports.walkNodeStyle = function (dir, done) {
	exports.walkFullPath(dir, function (err, files) {
		if (err) return done(err);
		files = files.map(function (file) { return file.replace(dir + '/', '')});
		done(null, files);
	});
};

exports.walk = function (dir) {
	return new Promise(function (resolve, reject) {
		exports.walkNodeStyle(dir, function (err, files) {
			if (err) return reject(err);

			resolve(files);
		});
	});
}
// exports.walk = function (dir) {
// 	return new Promise(function (resolve, reject) {
// 		exports.walkFullPath(dir, function (err, files) {
// 			files = files.map(function (file) { return file.replace(dir + '/', '')});
// 			done(null, files);
// 		});
// 	});
// };