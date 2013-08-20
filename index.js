function getType(value) {
    // I use 'ask' object instead of Object.prototype.
    return ask.toString.call(value);
}

function indexOf(value, arr) {
    return arr.indexOf(value) > 0;
}

function indexOfFix(value, arr) {
    var i = 0,
        len = arr.length;

    for (i; i < len; i += 1) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

/**
 * A namespace that has all available questions to ask..
 * @namespace
 */
var ask = {},
    doc = window.document,
    docEl = window.document.documentElement,
    indexof = [].indexOf !== undefined ? indexOf : indexOfFix;


// Types
/**
 * Returns true if the given argument is an array, false if it is not.
 * @param {Array} arr A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isArray([1, 2, 3]); // true
 */
ask.isArray = Array.isArray || function (arr) {
    return getType(arr) === '[object Array]';
};

/**
 * Returns true if the given argument is an object, false if it is not.
 * @param {Object} obj A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isObject({}); // true
 */
ask.isObject = function (obj) {
    return typeof obj === 'object';
};

/**
 * Returns true if the given argument is a function, false if it is not.
 * @param {Function} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isFunction = function (fn) {
    return typeof fn === 'function';
};

/**
 * Returns true if the given argument is a string, false if it is not.
 * @param {String} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isString('Some string.'); // true
 */
ask.isString = function (str) {
    return typeof str === 'string';
};

/**
 * Returns true if the given argument is a number, false if it is not.
 * @param {Number} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isNumber(100); // true
 */
ask.isNumber = function (num) {
    return typeof num === 'number';
};

/**
 * Returns true if the given argument is a date, false if it is not.
 * @param {Date} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isDate = function (date) {
    return getType(date) === '[object Date]';
};

/**
 * Returns true if the given argument is a regular expresion, false if it is not.
 * @param {RegExp} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isRegexp = function (regexp) {
    return getType(regexp) === '[object RegExp]';
};

/**
 * Returns true if the given argument is null, false if it is not.
 * @param {Object} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isNull = function (obj) {
    return obj === null;
};

/**
 * Returns true if the given argument is defined, false if it is not.
 * @param {Object} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isDefined = function (defined) {
    return defined !== undefined;
};

// Nodes
/**
 * Returns true if the given argument is a node element, false if it is not.
 * @param {Object} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isNodeElement = function (node) {
    return getType(node).match(/HTML/) !== null;
};

/**
 * Returns true if the given argument has focus, false if it is not.
 * @param {HTMLElement} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.hasFocus = function (node) {
    return doc.activeElement === node;
};

/**
 * Returns true if the given argument is visible into the viewport, false if it is not.
 * @param {HTMLElement} fn A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isVisible = function (node) {
    var r = node.getBoundingClientRect();

    return r.bottom >= 0 && r.top <= docEl.clientHeight;
};

// Collection
/**
 * Returns true if the given array is empty, false if it is not.
 * @param {Array} arr A given argument to analize.
 * @returns {Boolean}
 * @example
 * ask.isFunction(function () {}); // true
 */
ask.isEmpty = function (arr) {
    return arr.length === 0;
};

/**
 * Returns true if the given argument is in a given array, false if it is not.
 * @param {String} value A given value to analize.
 * @param {Array | String} arr A given array or string to analize.
 * @returns {Boolean}
 * @example
 * ask.isInside(2, [1,2,3]); // true
* @example
 * ask.isInside('World', 'Hello World'); // true
 */
ask.isInside = function (value, arr) {
    if (typeof arr === 'string') {
        return arr.match(new RegExp(value )) !== null;
    }

    return indexof(value, arr);
}

/**
 * Returns true if a given object has a given key, false if it has not.
 * @param {String} key A given key to analize.
 * @param {Object} obj A given object to analize.
 * @returns {Boolean}
 * @example
 * ask.hasProperty('foo', {'foo': 'bar'}); // true
 */
ask.hasProperty = function (key, obj) {
    return obj[key] !== undefined;
}

/**
 * Expose ask
 */
exports = module.exports = ask;