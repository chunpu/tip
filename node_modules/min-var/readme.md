min-var
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-var.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-var
[downloads-image]: http://img.shields.io/npm/dm/min-var.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-var
[david-image]: http://img.shields.io/david/chunpu/min-var.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-var


Smallest var template replace

Installation
---

```sh
npm i min-var
```

Usage
---

Use `$var` or `${var}`

```js
var render = require('min-var')

render('foo=$foo bar=${bar} notexist=$notexist notexist2=${notexist2} end', {
	foo: 'myfoo',
	bar: 'mybar'
})

// => foo=myfoo bar=mybar notexist= notexist2= end
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-var.svg?style=flat-square
[license-url]: #
