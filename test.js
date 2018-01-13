import test from 'ava';
import m from '.';

test(t => {
	const result = m({foo: true});

	t.true(result.foo);

	t.throws(() => {
		console.log(result.bar);
	});
});
