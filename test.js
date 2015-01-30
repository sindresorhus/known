'use strict';
var assert = require('assert');
var known = require('./');
var x = known({foo: true});

it('should get values', function () {
	assert.strictEqual(x.foo, true);

	assert.throws(function () {
		console.log(x.bar);
	});
});
