Usage
---

[online demo](http://chunpu.github.io/tip/browser/)

```js
var Tip = require('tip')

$(function() {
	var tip = Tip($('<div>tip</div>'))
	tip.attach('.target')
})
```

Support
---

IE6+


Api
---

```js
var tip = Tip(nodelist, options)
```


#### Options

- `stay` Boolean, if true then won't hide after mouseleave
- `offsetHook` Function, change raw offset
