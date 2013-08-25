var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();

describe('Array', function () {
	
	describe('#length', function () {

		it('should equal 2', function () {
			var arr = [1, 2];
			assert.equal(arr.length, 2);
		});

		it('should equal 2', function () {
			var arr = [1, 2];
			arr.should.have.length(2);
		});

		it('should equal 2', function () {
			var arr = [1, 2];
			expect(arr).to.have.length(2);
		});

	});

});