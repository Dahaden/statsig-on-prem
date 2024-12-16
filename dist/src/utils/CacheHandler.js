"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SDKKeysCache_1 = __importDefault(require("../SDKKeysCache"));
var SpecsCache_1 = __importDefault(require("../SpecsCache"));
var CacheUtils_1 = __importDefault(require("./CacheUtils"));
var CacheHandler = /** @class */ (function () {
    function CacheHandler(cache) {
        var _a, _b;
        this.cache = {
            specs: (_a = cache.specs) !== null && _a !== void 0 ? _a : new SpecsCache_1.default(),
            keys: (_b = cache.keys) !== null && _b !== void 0 ? _b : new SDKKeysCache_1.default(),
        };
    }
    CacheHandler.prototype.cacheSpecs = function (sdkKey, options, specs) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = CacheUtils_1.default.getCacheKey(sdkKey, options);
                        return [4 /*yield*/, this.cache.specs.set(sdkKey, cacheKey, specs)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheHandler.prototype.getSpecs = function (sdkKey, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = CacheUtils_1.default.getCacheKey(sdkKey, options);
                        return [4 /*yield*/, this.cache.specs.get(sdkKey, cacheKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CacheHandler.prototype.clearSpecs = function () {
        var sdkKeys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sdkKeys[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sdkKeys.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(sdkKeys.map(function (sdkKey) {
                                return _this.cache.specs.clear(sdkKey);
                            }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.cache.specs.clearAll()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CacheHandler.prototype.cacheSDKKeys = function (sdkKeys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.keys.set(sdkKeys)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CacheHandler.prototype.getSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.keys.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CacheHandler.prototype.cacheGlobalSDKKeys = function (sdkKeys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.keys.setGlobal(sdkKeys)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CacheHandler.prototype.getGlobalSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.keys.getGlobal()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CacheHandler.prototype.clearSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.keys.clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cache.keys.clearGlobal()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheHandler.prototype.clearAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.specs.clearAll()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cache.keys.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cache.keys.clearGlobal()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CacheHandler;
}());
exports.default = CacheHandler;
