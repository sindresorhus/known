'use strict';
require('harmony-reflect');

module.exports = function (obj) {
	return new Proxy(obj, {
		get: function (target, name, receiver) {
			if (!(name in target)) {
				throw new TypeError('Unknown property: ' + name);
			}

			return Reflect.get(target, name, receiver);
		}
	});
};
