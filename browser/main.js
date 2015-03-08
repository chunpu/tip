var Tip = require('../')

$(function() {
	var tip = Tip($('<div>tip</div>'))
	tip.attach('.target')
})
