'use strict';

var assert = require('assert');
var chai = require('chai');
var known = require('./');

it('should get values', function () {
	var x = known({ foo: true });

	assert.strictEqual(x.foo, true);

	assert.throws(function () {
		console.log(x.bar);
	});
});

it('should not get values', function () {
	var x = known({ foo: true });

	var getObjectProperty = function () {
		console.log(x.randomProperty);
	}

	chai.expect(
		getObjectProperty
	).to.throw(
		'Unknown property: randomProperty'
	);
});

it('should set values', function () {
	var x = known({ foo: true });

	x.randomProperty = true;

	chai.expect(x.randomProperty).to.equal(true);
});

it('should not set values to target', function () {
	var x = known({ foo: true }, true);

	var setObjectProperty = function () {
		x.randomProperty = 'test';
	}

	chai.expect(
		setObjectProperty
	).to.throw(
		'Readonly object: Please don\'t set properties on this object.'
	);
});
