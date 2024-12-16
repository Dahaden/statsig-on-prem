"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashUtils = /** @class */ (function () {
    function HashUtils() {
    }
    HashUtils.hashString = function (str) {
        return this.djb2Hash(str);
    };
    HashUtils.fasthash = function (value) {
        var hash = 0;
        for (var i = 0; i < value.length; i++) {
            var character = value.charCodeAt(i);
            hash = (hash << 5) - hash + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    HashUtils.djb2Hash = function (value) {
        return String(this.fasthash(value) >>> 0);
    };
    return HashUtils;
}());
exports.default = HashUtils;
