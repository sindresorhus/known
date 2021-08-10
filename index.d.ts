/**
Allow only access to known object properties using [ES2015 `Proxy`](https://ponyfoo.com/articles/es6-proxies-in-depth).

@example
```
import known from 'known';

const object = {foo: true};

console.log(object.bar);
//=> undefined

const object2 = known(object);

// Throws a TypeError when you try to access an unknown property
console.log(object2.bar);
//=> [TypeError] Unknown property: bar
```
*/
export default function known<T extends Record<string, any>>(object: T): T;
