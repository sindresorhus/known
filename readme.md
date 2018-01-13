# known [![Build Status](https://travis-ci.org/sindresorhus/known.svg?branch=master)](https://travis-ci.org/sindresorhus/known)

> Allow only access to known object properties using [ES2015 `Proxy`](https://ponyfoo.com/articles/es6-proxies-in-depth)


## Usage

```
$ npm install known
```

```js
const known = require('known');

const obj = {foo: true};

console.log(obj.bar);
//=> undefined

const obj2 = known(obj);

// Throws a TypeError when you try to access an unknown property
console.log(obj2.bar);
//=> [TypeError] Unknown property: bar
```


## Related

- [on-change](https://github.com/sindresorhus/on-change) - Watch an object or array for changes (Uses `Proxy` too)
- [negative-array](https://github.com/sindresorhus/negative-array) - Negative array index support (Uses `Proxy` too)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
