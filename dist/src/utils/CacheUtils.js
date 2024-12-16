"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HashUtils_1 = __importDefault(require("./HashUtils"));
var CacheUtils = /** @class */ (function () {
    function CacheUtils() {
    }
    CacheUtils.getCacheKey = function (sdkKey, options) {
        var cacheKey = sdkKey;
        if (options === null || options === void 0 ? void 0 : options.ssr) {
            cacheKey = "{sdk_key:".concat(sdkKey, "}");
            var _a = options === null || options === void 0 ? void 0 : options.ssr, clientKeys = _a.clientKeys, targetApps = _a.targetApps;
            if (clientKeys) {
                cacheKey = "".concat(cacheKey, ":{").concat(clientKeys === "all"
                    ? "client_keys:all"
                    : "client_keys:".concat(clientKeys.join()), "}");
            }
            if (targetApps) {
                cacheKey = "".concat(cacheKey, ":{").concat(targetApps === "all"
                    ? "target_apps:all"
                    : "target_apps:".concat(targetApps.join()), "}");
            }
        }
        return HashUtils_1.default.hashString(cacheKey);
    };
    return CacheUtils;
}());
exports.default = CacheUtils;
