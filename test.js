'use strict';

var assert = require('assert');
var chai = require('chai');
var known = require('./');

it('should get values', function () {
	var instance = known({ foo: true });

	assert.strictEqual(instance.foo, true);

	assert.throws(function () {
		console.log(instance.bar);
	});
});

it('should not get values', function () {
	var instance = known({ foo: true });

	var getObjectProperty = function () {
		console.log(instance.randomProperty);
	}

	chai.expect(
		getObjectProperty
	).to.throw(
		'Unknown property: randomProperty'
	);
});

it('should add decorator to set a property on the object', function () {
	var instance = known({ foo: true });

	var decorator = function (obj) {
		obj.property = 'property';
	};

	instance.decorateWith(decorator);

	chai.expect(
		instance.property
	).to.equal(
		'property'
	);
});

it('should add decorator to set first and last names', function () {
	var instance = known({ foo: true });

	var decorator = function (obj) {
		obj.setName = function (first, last) {
	    this.first = first;
	    this.last = last;
	  };
	};

	instance.decorateWith(decorator);

	instance.setName('Pedro', 'Bras');

	chai.expect(
		instance.first,
		instance.last
	).to.equal(
		'Pedro',
		'Bras'
	);
});
