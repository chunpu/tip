var Tip = require('../')

$(function() {
	var tip = Tip($('<div>tip</div>'), {stay: true})
	tip.attach('.target')
})
