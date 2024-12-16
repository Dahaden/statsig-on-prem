"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SDKKeysCache = /** @class */ (function () {
    function SDKKeysCache() {
        this.cache = { allKeys: null, globalKeys: null };
    }
    SDKKeysCache.prototype.get = function () {
        return Promise.resolve(this.cache.allKeys);
    };
    SDKKeysCache.prototype.set = function (keys) {
        this.cache.allKeys = keys;
        return Promise.resolve();
    };
    SDKKeysCache.prototype.clear = function () {
        this.cache.allKeys = null;
        return Promise.resolve();
    };
    SDKKeysCache.prototype.getGlobal = function () {
        return Promise.resolve(this.cache.globalKeys);
    };
    SDKKeysCache.prototype.setGlobal = function (keys) {
        this.cache.globalKeys = keys;
        return Promise.resolve();
    };
    SDKKeysCache.prototype.clearGlobal = function () {
        this.cache.globalKeys = null;
        return Promise.resolve();
    };
    return SDKKeysCache;
}());
exports.default = SDKKeysCache;
