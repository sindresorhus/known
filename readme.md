# known

> Allow only access to known object properties using [ES2015 `Proxy`](https://ponyfoo.com/articles/es6-proxies-in-depth)

## Install

```
$ npm install known
```

## Usage

```js
import known from 'known';

const object = {foo: true};

console.log(object.bar);
//=> undefined

const object2 = known(object);

// Throws a TypeError when you try to access an unknown property
console.log(object2.bar);
//=> [TypeError] Unknown property: bar
```

Note that `known` transparently wraps the given object, meaning prototype properties will also exist. So `known(someObject).__proto__` does not throw. If you want non-own properties to throw, ensure your object is created with `Object.create(null)`.

## Related

- [on-change](https://github.com/sindresorhus/on-change) - Watch an object or array for changes (Uses `Proxy` too)
- [negative-array](https://github.com/sindresorhus/negative-array) - Negative array index support (Uses `Proxy` too)
