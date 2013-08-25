var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();

var path = require('path');

var walker = require ('../');

var testPath = path.join(__dirname, 'mocks/test');

describe('walker', function () {
	
	describe('#walkNodeStyle', function () {

		it('should have length 3', function (done) {
			walker.walkNodeStyle(testPath, function (err, files) {
				files.should.have.length(3);
				done();
			});
		});

		it('should have correct paths', function (done) {
			var fileNames = [
				'test-inner',
				'test.js',
				'test-inner/test.js'
			];
			walker.walkNodeStyle(testPath, function (err, files) {
				fileNames.forEach(function (name) {
					files.indexOf(name).should.not.equal(-1);
				});
				done();
			});
		});

	});

	describe('#walk', function () {

		it('should have length 3', function (done) {
			walker
				.walk(testPath)
				.then(function (files) {
					files.should.have.length(3);
					done();
				})
				.done();
		});

	});

});