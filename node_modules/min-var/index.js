module.exports = exports = render

function render(str, opt) {
	opt = opt || {}
	return str.replace(/\$(\w+)/g, '${$1}').replace(/\${(\w+)}/g, function(src, key) {
		return opt[key] || ''
	})
}
