var render = require('./')
var assert = require('assert')

var ret = render('foo=$foo bar=${bar} notexist=$notexist notexist2=${notexist2} end', {
	foo: 'myfoo',
	bar: 'mybar'
})

assert.deepEqual('foo=myfoo bar=mybar notexist= notexist2= end', ret)

console.log('tests pass!')
