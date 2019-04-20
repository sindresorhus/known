import test from 'ava';
import known from '.';

test('main', t => {
	const result = known({foo: true});

	t.true(result.foo);

	t.throws(() => {
		console.log(result.bar);
	});
});
