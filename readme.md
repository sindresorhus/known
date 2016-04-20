# known [![Build Status](https://travis-ci.org/sindresorhus/known.svg?branch=master)](https://travis-ci.org/sindresorhus/known)

> Allow only access to known object properties using [ES2015 Proxy](http://soft.vub.ac.be/~tvcutsem/proxies/)

-

> Proxies are objects for which the programmer has to define the semantics in JavaScript. The default object semantics are implemented in the JavaScript engine, often written in lower-level languages like C++. Proxies let the programmer define most of the behavior of an object in JavaScript. They are said to provide a meta-programming API.


## Usage

```
$ npm install --save known
```

```js
var known = require('known');

var obj = {foo: true};

console.log(obj.bar);
//=> undefined

obj = known(obj);

// throws a TypeError when you try to access an unknown property
console.log(obj.bar);
//=> [TypeError] Unknown property: bar
```


## Compatibility

- Node >=0.8.0: `node --harmony --harmony-proxies`
- Chrome - with the this flag enabled `chrome://flags/#enable-javascript-harmony` *(copy/paste into address-bar)*
- Firefox >=12


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
