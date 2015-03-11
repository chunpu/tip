(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tip = require('../')

$(function() {
	var tip = Tip($('<div>tip</div>'))
	tip.attach('.target')
})

},{"../":2}],2:[function(require,module,exports){
module.exports = Tip

var body

var initCss = {
      left: 0
    , top: 0
    , visibility: 'hidden'
    , display: 'block'
}

var wrapper = $('<div class="tip"><div class="tip-arrow"></div><div class="tip-inner"></div></div>')

function Tip(val, opt) {
    if (!(this instanceof Tip)) return new Tip(val, opt)
    if (!body) body = $('body')

    var me = this
	me.opt = opt || {}
    var $tip = wrapper.clone().find('.tip-inner').append($(val)).end()
    .on('mouseenter click', function() {
        clearTimeout(me.timer)
    }).on('mouseleave', function() {
        me.hide(200)
    }).appendTo(body)
    var offset = $tip.css(initCss).offset()
    this.rawOffset = offset
    this.tip = $tip
}

var proto = Tip.prototype

proto.hide = function(ms) {
    var me = this
    if (ms) {
        me.timer = setTimeout(function() {
            me.hide()
        }, ms)
        return
    }
    me.tip.css(initCss)
}

proto.attach = function(el) {
    var me = this
    $(el).on('mouseenter', function() {
        console.log('enter')
        me.show($(this))
        clearTimeout(me.timer)
    }).on('mouseleave', function() {
        me.hide(200)
    })
}

proto.show = function(el) {
    var el = $(el).eq(0)
	this.target = el
    if (!el[0]) return
    var $tip = this.tip
    var target = {
        offset: el.offset(),
        width: el.outerWidth(),
        height: el.outerHeight()
    }
    var tip = {
        rawOffset: this.rawOffset,
        width: $tip.outerWidth(),
        height: $tip.outerHeight()
    }

    var offset = {
        // rawOffset + top = target.top + target.height
        top: target.offset.top + target.height - tip.rawOffset.top,
        // rawOffset + left + tip.width / 2 = target.left + target.width / 2
        left: target.offset.left + target.width / 2 - tip.width / 2 - tip.rawOffset.left
    }
	var hook = this.opt.offsetHook
	if (hook) {
		offset = hook.call(this, offset)
	}
    $tip.css({
        left: offset.left,
        top: offset.top,
        visibility: 'visible'
    })
}

},{}]},{},[1]);
