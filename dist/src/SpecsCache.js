"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecsCache = /** @class */ (function () {
    function SpecsCache() {
        this.cache = {};
    }
    SpecsCache.prototype.get = function (key, field) {
        var _a;
        if (!(key in this.cache)) {
            return Promise.resolve(null);
        }
        return Promise.resolve((_a = this.cache[key][field]) !== null && _a !== void 0 ? _a : null);
    };
    SpecsCache.prototype.set = function (key, field, specs) {
        if (!(key in this.cache)) {
            this.cache[key] = {};
        }
        this.cache[key][field] = specs;
        return Promise.resolve();
    };
    SpecsCache.prototype.clear = function (key, field) {
        if (field && key in this.cache) {
            delete this.cache[key][field];
        }
        else {
            delete this.cache[key];
        }
        return Promise.resolve();
    };
    SpecsCache.prototype.clearAll = function () {
        this.cache = {};
        return Promise.resolve();
    };
    return SpecsCache;
}());
exports.default = SpecsCache;
