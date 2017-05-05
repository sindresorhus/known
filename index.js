'use strict';

require('harmony-reflect');

module.exports = function (target, readonly = false) {
	var handler = {
		get: function (target, name, receiver) {
			if (!(name in target)) {
				throw new TypeError('Unknown property: ' + name);
			}

			return Reflect.get(target, name, receiver);
		},

		set: function(target, name, val, receiver) {
			if (!(name in target) && readonly) {
				throw new Error('Readonly object: Please don\'t set properties on this object.');
			}

			target[name] = val;

			return true;
		}
	};

	return function () {
		return new Proxy(target, handler);
	}.call(this, target);
};
