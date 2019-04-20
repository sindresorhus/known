import {expectType, expectError} from 'tsd';
import known = require('.');

const object = {foo: true};
const object2 = known(object);

expectType<boolean>(object2.foo);
expectError(object2.bar);
