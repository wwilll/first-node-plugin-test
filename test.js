// test.js
(function (definition) {
    "use strict";
    // CommonJS
     if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();
    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);
    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // initialize myPlugin as a global.
        global.test = definition();

    } else {
        throw new Error("This environment was not anticipated by myPlugin,Please file a bug.");
    }
})(function () {
    function test() {
        return {
            print,
            getExactTypeOfData
        }
    }
    function print(words) {
        console.log('test plugin print: ' + words);
    }
    function getExactTypeOfData(element, type) {
        if (typeof element === 'symbol') {
            return type === 'symbol' || 'symbol';
        } else {
            var str = Object.prototype.toString.call(element);
            var strType = str.substring(8, str.length - 1).toLowerCase();
            return strType === type || strType;
        }
    }
    return test();
})