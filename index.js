'use strict';
module.exports = object => {
	return new Proxy(object, {
		get(target, property, receiver) {
			if (!(property in target)) {
				throw new TypeError(`Unknown property: ${property}`);
			}

			return Reflect.get(target, property, receiver);
		}
	});
};
