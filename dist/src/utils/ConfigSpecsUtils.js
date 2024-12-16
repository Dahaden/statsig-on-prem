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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EntityExperiment_1 = __importDefault(require("../entities/EntityExperiment"));
var HashUtils_1 = __importDefault(require("./HashUtils"));
var filterNulls_1 = require("./filterNulls");
var ConfigSpecsUtils = /** @class */ (function () {
    function ConfigSpecsUtils() {
    }
    ConfigSpecsUtils.getEmptyConfigSpecs = function () {
        return {
            dynamic_configs: [],
            feature_gates: [],
            layer_configs: [],
            layers: {},
            has_updates: false,
            time: 0,
        };
    };
    ConfigSpecsUtils.getConfigSpec = function (entity) {
        return {
            name: entity.getName(),
            type: entity.getAPIType(),
            salt: entity.getSalt(),
            defaultValue: entity.getDefaultValue(),
            enabled: entity.getIsEnabled(),
            rules: entity.getRules(),
            isDeviceBased: entity.getIsDeviceBased(),
            idType: entity.getIDType(),
            isActive: entity instanceof EntityExperiment_1.default ? entity.getIsActive() : undefined,
            entity: entity.getAPIEntity(),
        };
    };
    ConfigSpecsUtils.getHashedSDKKeysToEntities = function (store, options) {
        return __awaiter(this, void 0, void 0, function () {
            var getEntitiesFromKey, getEntitiesFromTargetApp, mappings, keys, _a, _b, _c, targetApps, _d, _e, _f, _g, _h, _j, _k;
            var _this = this;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        getEntitiesFromKey = function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var targetApps;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, store.getTargetAppsFromSDKKey(key)];
                                    case 1:
                                        targetApps = _a.sent();
                                        if (targetApps == null) {
                                            return [2 /*return*/, null];
                                        }
                                        return [4 /*yield*/, store.getEntityAssocsForMultipleTargetApps(targetApps)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        getEntitiesFromTargetApp = function (targetApp) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, store.getEntityAssocs(targetApp)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        mappings = [];
                        if (!options.clientKeys) return [3 /*break*/, 4];
                        if (!(options.clientKeys === "all")) return [3 /*break*/, 2];
                        _c = (_b = Array).from;
                        return [4 /*yield*/, store.getRegisteredSDKKeys()];
                    case 1:
                        _a = _c.apply(_b, [_l.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        _a = options.clientKeys;
                        _l.label = 3;
                    case 3:
                        keys = _a;
                        mappings = mappings.concat(keys.map(function (key) { return ({
                            source: key,
                            load: getEntitiesFromKey,
                        }); }));
                        _l.label = 4;
                    case 4:
                        if (!options.targetApps) return [3 /*break*/, 8];
                        if (!(options.targetApps === "all")) return [3 /*break*/, 6];
                        _f = (_e = Array).from;
                        return [4 /*yield*/, store.getTargetAppNames()];
                    case 5:
                        _d = _f.apply(_e, [_l.sent()]);
                        return [3 /*break*/, 7];
                    case 6:
                        _d = options.targetApps;
                        _l.label = 7;
                    case 7:
                        targetApps = _d;
                        mappings = mappings.concat(targetApps.map(function (targetApp) { return ({
                            source: targetApp,
                            load: getEntitiesFromTargetApp,
                        }); }));
                        _l.label = 8;
                    case 8:
                        _h = (_g = Object).fromEntries;
                        _j = Map.bind;
                        _k = filterNulls_1.filterNulls;
                        return [4 /*yield*/, Promise.all(mappings.map(function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
                                var entities;
                                var source = _b.source, load = _b.load;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, load(source)];
                                        case 1:
                                            entities = _c.sent();
                                            if (entities == null) {
                                                return [2 /*return*/, null];
                                            }
                                            return [2 /*return*/, [
                                                    HashUtils_1.default.hashString(source),
                                                    {
                                                        gates: Array.from(entities.gates),
                                                        configs: __spreadArray(__spreadArray([], Array.from(entities.configs), true), Array.from(entities.experiments), true),
                                                    },
                                                ]];
                                    }
                                });
                            }); }))];
                    case 9: return [2 /*return*/, _h.apply(_g, [new (_j.apply(Map, [void 0, _k.apply(void 0, [_l.sent()])]))()])];
                }
            });
        });
    };
    return ConfigSpecsUtils;
}());
exports.default = ConfigSpecsUtils;