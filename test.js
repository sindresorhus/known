import test from 'ava';
import known from './index.js';

test('main', t => {
	const result = known({foo: true});

	t.true(result.foo);

	t.throws(() => {
		console.log(result.bar);
	});
});
