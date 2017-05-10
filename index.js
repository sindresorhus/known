'use strict';

require('harmony-reflect');

module.exports = function (target) {
	var handler = {
		get: function (target, name) {
			if (!(name in target)) {
				throw new TypeError('Unknown property: ' + name);
			}

			return Reflect.get(target, name);
		}
	};

	var instance = new Proxy(target, handler);

	instance.decorateWith = function (fn) {
		return fn(instance);
	}

	return instance;
};
