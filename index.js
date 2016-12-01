'use strict';

/**
 * @responsive solution
 * @author  heyli
 * @date 2016.12.01
 * @reference1: Tencent AlloyTeam Responsive Solution (家校群及互动直播)
 * @reference2: https://github.com/amfe/lib-flexible
 */

var responsive = responsive || {};

/**
 * [init function]
 * @param  {Object} opts [options]
 */
responsive.init = function () {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var win = window,
        doc = window.document,
        html = doc.documentElement,
        body = doc.body,
        timer = null;

    var baseW = opts.baseW || 375,
        baseFontSize = opts.baseFontSize || 75,
        maxW = opts.maxW || 0;

    function adjustFontSize() {
        var targetW = html.getBoundingClientRect().width,
            adjustRate = targetW / baseW,
            targetFontSize = adjustRate * baseFontSize,
            maxFontSize = maxW / baseW * baseFontSize;

        targetFontSize = maxFontSize > 0 && targetFontSize > maxFontSize ? maxFontSize : targetFontSize;

        html.style.fontSize = targetFontSize + 'px';
        responsive.rem = targetFontSize;
    }

    win.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(adjustFontSize, 300);
    }, false);

    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(adjustFontSize, 300);
        }
    }, false);

    adjustFontSize();
};

/**
 * [rem converted to px]
 * @param  {String} d [rem unit, ie 1rem]
 * @return {String}   [px unit, ie 75px]
 */
responsive.rem2px = function (d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px';
    }
    return val;
};

/**
 * [px converted to rem]
 * @param  {String} d [px unit, ie 75px]
 * @return {String}   [rem unit, ie 1rem]
 */
responsive.px2rem = function (d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
    }
    return val;
};

var _module = _module || {};

_module.exports = responsive;