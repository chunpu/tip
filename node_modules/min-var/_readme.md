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
