"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var StorageUtils_1 = require("./utils/StorageUtils");
var ConfigSpecsUtils_1 = __importDefault(require("./utils/ConfigSpecsUtils"));
var filterNulls_1 = require("./utils/filterNulls");
var EntityExperiment_1 = __importDefault(require("./entities/EntityExperiment"));
var EntityDynamicConfig_1 = __importDefault(require("./entities/EntityDynamicConfig"));
var EntityFeatureGate_1 = __importDefault(require("./entities/EntityFeatureGate"));
var IDUtils_1 = require("./utils/IDUtils");
var StorageHandler_1 = __importDefault(require("./utils/StorageHandler"));
var CacheHandler_1 = __importDefault(require("./utils/CacheHandler"));
var ConfigRuleBuilder_1 = __importDefault(require("./utils/ConfigRuleBuilder"));
var genFilter_1 = require("./utils/genFilter");
var StatsigOnPrem = /** @class */ (function () {
    function StatsigOnPrem(storage, plugins) {
        this.store = new StorageHandler_1.default(storage);
        this.cache = new CacheHandler_1.default({
            specs: plugins === null || plugins === void 0 ? void 0 : plugins.specsCache,
            keys: plugins === null || plugins === void 0 ? void 0 : plugins.sdkKeysCache,
        });
    }
    StatsigOnPrem.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.initialize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.shutdown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.shutdown()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.clearCache = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sdkKey) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cache.clearSpecs(sdkKey)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.cache.clearAll()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.clearCacheForTargetApp = function () {
        var targetApps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetApps[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var globalSDKKeys;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(targetApps.map(function (targetApp) { return __awaiter(_this, void 0, void 0, function () {
                            var sdkKeys;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.store.getSDKKeysForTargetApp(targetApp)];
                                    case 1:
                                        sdkKeys = _b.sent();
                                        if (!sdkKeys) return [3 /*break*/, 3];
                                        return [4 /*yield*/, (_a = this.cache).clearSpecs.apply(_a, Array.from(sdkKeys))];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getGlobalSDKKeys()];
                    case 2:
                        globalSDKKeys = _b.sent();
                        return [4 /*yield*/, (_a = this.cache).clearSpecs.apply(_a, Array.from(globalSDKKeys))];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.clearCacheForEntity = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = entity.targetApps;
                        if (!(targetApps == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cache.clearSpecs()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, Array.from(targetApps))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.getConfigSpecs = function (sdkKey, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedSpecs, registeredKeys, targetApps, entities, gates, _a, configs, _b, experiments, _c, configSpecs, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.cache.getSpecs(sdkKey, options)];
                    case 1:
                        cachedSpecs = _e.sent();
                        if (cachedSpecs) {
                            return [2 /*return*/, cachedSpecs];
                        }
                        return [4 /*yield*/, this.getRegisteredSDKKeys()];
                    case 2:
                        registeredKeys = _e.sent();
                        if (!registeredKeys.has(sdkKey)) {
                            console.warn("Attempting to use a non-registered key");
                        }
                        return [4 /*yield*/, this.store.getTargetAppsFromSDKKey(sdkKey)];
                    case 3:
                        targetApps = _e.sent();
                        return [4 /*yield*/, this.store.getEntityAssocsForMultipleTargetApps(targetApps)];
                    case 4:
                        entities = _e.sent();
                        if (entities == null) {
                            return [2 /*return*/, ConfigSpecsUtils_1.default.getEmptyConfigSpecs()];
                        }
                        _a = filterNulls_1.filterNulls;
                        return [4 /*yield*/, Promise.all(Array.from(entities.gates).map(function (name) {
                                return _this.getGate(name).then(function (gate) {
                                    return gate ? new EntityFeatureGate_1.default(gate) : null;
                                });
                            }))];
                    case 5:
                        gates = _a.apply(void 0, [_e.sent()]);
                        _b = filterNulls_1.filterNulls;
                        return [4 /*yield*/, Promise.all(Array.from(entities.configs).map(function (name) {
                                return _this.getConfig(name).then(function (config) {
                                    return config ? new EntityDynamicConfig_1.default(config) : null;
                                });
                            }))];
                    case 6:
                        configs = _b.apply(void 0, [_e.sent()]);
                        _c = filterNulls_1.filterNulls;
                        return [4 /*yield*/, Promise.all(Array.from(entities.experiments).map(function (name) {
                                return _this.getExperiment(name).then(function (exp) {
                                    return exp ? new EntityExperiment_1.default(exp) : null;
                                });
                            }))];
                    case 7:
                        experiments = _c.apply(void 0, [_e.sent()]);
                        configSpecs = {
                            feature_gates: gates.map(function (gate) { return ConfigSpecsUtils_1.default.getConfigSpec(gate); }),
                            dynamic_configs: __spreadArray(__spreadArray([], configs, true), experiments, true).map(function (config) {
                                return ConfigSpecsUtils_1.default.getConfigSpec(config);
                            }),
                            layer_configs: [],
                            layers: {},
                            has_updates: true,
                            time: Date.now(),
                        };
                        if (!(options === null || options === void 0 ? void 0 : options.ssr)) return [3 /*break*/, 9];
                        _d = configSpecs;
                        return [4 /*yield*/, ConfigSpecsUtils_1.default.getHashedSDKKeysToEntities(this.store, options === null || options === void 0 ? void 0 : options.ssr)];
                    case 8:
                        _d.hashed_sdk_keys_to_entities =
                            _e.sent();
                        _e.label = 9;
                    case 9: return [4 /*yield*/, this.cache.cacheSpecs(sdkKey, options, configSpecs)];
                    case 10:
                        _e.sent();
                        return [2 /*return*/, configSpecs];
                }
            });
        });
    };
    /* Feature Gate */
    StatsigOnPrem.prototype.getGate = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getGate(name)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StatsigOnPrem.prototype.createGate = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, idType, metadata, gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = args.targetApps, idType = args.idType, metadata = __rest(args, ["targetApps", "idType"]);
                        gate = __assign({ name: name, salt: IDUtils_1.IDUtils.generateNewSalt(), idType: idType !== null && idType !== void 0 ? idType : "userID", targetApps: new Set(targetApps !== null && targetApps !== void 0 ? targetApps : []) }, metadata);
                        return [4 /*yield*/, this.store.addGate(gate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(gate)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.updateGate = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGate(name)];
                    case 1:
                        gate = _a.sent();
                        if (gate == null) {
                            console.warn("Attempting to update non-existent gate");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.clearCacheForEntity(gate)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.store.updateGate(gate, args)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(gate)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.deleteGate = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getGate(name)];
                    case 1:
                        gate = _a.sent();
                        if (!gate) {
                            console.warn("Attempting to delete non-existent gate");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeGate(name)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(gate)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.addTargetAppsToGate = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGate(name)];
                    case 1:
                        gate = _a.sent();
                        if (gate == null) {
                            console.warn("Attempting to update non-existent gate");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.addTargetAppsToGate(gate, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.removeTargetAppsFromGate = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGate(name)];
                    case 1:
                        gate = _a.sent();
                        if (gate == null) {
                            console.warn("Attempting to update non-existent gate");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeTargetAppsFromGate(gate, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Experiment */
    StatsigOnPrem.prototype.getExperiment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getExperiment(name)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StatsigOnPrem.prototype.createExperiment = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, idType, metadata, experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = args.targetApps, idType = args.idType, metadata = __rest(args, ["targetApps", "idType"]);
                        experiment = __assign({ name: name, salt: IDUtils_1.IDUtils.generateNewSalt(), idType: idType !== null && idType !== void 0 ? idType : "userID", targetApps: new Set(targetApps !== null && targetApps !== void 0 ? targetApps : []) }, metadata);
                        return [4 /*yield*/, this.store.addExperiment(experiment)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(experiment)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.updateExperiment = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExperiment(name)];
                    case 1:
                        experiment = _a.sent();
                        if (experiment == null) {
                            console.warn("Attempting to update non-existent experiment");
                            return [2 /*return*/];
                        }
                        if (experiment.started) {
                            console.warn("Attempting to update an experiment that has already started");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.clearCacheForEntity(experiment)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.store.updateExperiment(experiment, args)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(experiment)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.deleteExperiment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getExperiment(name)];
                    case 1:
                        experiment = _a.sent();
                        if (!experiment) {
                            console.warn("Attempting to delete non-existent experiment");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeExperiment(name)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(experiment)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.startExperiment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExperiment(name)];
                    case 1:
                        experiment = _a.sent();
                        if (experiment == null) {
                            console.warn("Attempting to start an experiment that doesn't exist");
                            return [2 /*return*/];
                        }
                        if (experiment.started) {
                            console.warn("Attempting to start an experiment that has already started");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.updateExperiment(experiment, { started: true })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(experiment)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.addTargetAppsToExperiment = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExperiment(name)];
                    case 1:
                        experiment = _a.sent();
                        if (experiment == null) {
                            console.warn("Attempting to update non-existent experiment");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.addTargetAppsToExperiment(experiment, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.removeTargetAppsFromExperiment = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var experiment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExperiment(name)];
                    case 1:
                        experiment = _a.sent();
                        if (experiment == null) {
                            console.warn("Attempting to update non-existent experiment");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeTargetAppsFromExperiment(experiment, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Dynamic Config */
    StatsigOnPrem.prototype.getConfig = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getConfig(name)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StatsigOnPrem.prototype.createConfig = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, idType, metadata, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = args.targetApps, idType = args.idType, metadata = __rest(args, ["targetApps", "idType"]);
                        config = __assign({ name: name, salt: IDUtils_1.IDUtils.generateNewSalt(), idType: idType !== null && idType !== void 0 ? idType : "userID", targetApps: new Set(targetApps !== null && targetApps !== void 0 ? targetApps : []) }, metadata);
                        return [4 /*yield*/, this.store.addConfig(config)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(config)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.updateConfig = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var config, targetApps, patchRules, changes, updated, builder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig(name)];
                    case 1:
                        config = _a.sent();
                        if (config == null) {
                            console.warn("Attempting to update non-existent config");
                            return [2 /*return*/];
                        }
                        targetApps = args.targetApps, patchRules = args.patchRules, changes = __rest(args, ["targetApps", "patchRules"]);
                        updated = __assign(__assign({}, config), changes);
                        if (!targetApps) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (patchRules) {
                            builder = new ConfigRuleBuilder_1.default(config);
                            updated.rulesJSON = patchRules(builder).getRulesJSON();
                        }
                        return [4 /*yield*/, this.store.updateConfig(updated, args)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(config)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.deleteConfig = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig(name)];
                    case 1:
                        config = _a.sent();
                        if (!config) {
                            console.warn("Attempting to delete non-existent config");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeConfig(name)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForEntity(config)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.addTargetAppsToConfig = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig(name)];
                    case 1:
                        config = _a.sent();
                        if (config == null) {
                            console.warn("Attempting to update non-existent config");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.addTargetAppsToConfig(config, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.removeTargetAppsFromConfig = function (name, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig(name)];
                    case 1:
                        config = _a.sent();
                        if (config == null) {
                            console.warn("Attempting to update non-existent config");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.removeTargetAppsFromConfig(config, targetApps)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp.apply(this, targetApps)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Target App */
    StatsigOnPrem.prototype.createTargetApp = function (name, entities) {
        return __awaiter(this, void 0, void 0, function () {
            var existing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (name === StorageUtils_1.GLOBAL_ASSOC_KEY) {
                            console.error("Invalid name for target app");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.getEntityAssocs(name)];
                    case 1:
                        existing = _a.sent();
                        if (existing != null) {
                            console.warn("Target app already exists with the name ".concat(name));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.addTargetApp(name, entities)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp(name)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.updateTargetApp = function (name, entities) {
        return __awaiter(this, void 0, void 0, function () {
            var existing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.getEntityAssocs(name)];
                    case 1:
                        existing = _a.sent();
                        if (existing == null) {
                            console.warn("Attempting to update non-existent target app");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.store.updateTargetApp(name, __assign(__assign({}, existing), entities))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp(name)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.deleteTargetApp = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.removeTargetApp(name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp(name)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.addEntitiesToTargetApp = function (targetApp, entities) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.addEntityAssocs(entities, targetApp)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray(__spreadArray([], Array.from(entities.gates).map(function (gate) {
                                return _this.addTargetAppsToGate(gate, [targetApp]);
                            }), true), Array.from(entities.configs).map(function (config) {
                                return _this.addTargetAppsToConfig(config, [targetApp]);
                            }), true), Array.from(entities.experiments).map(function (experiment) {
                                return _this.addTargetAppsToExperiment(experiment, [targetApp]);
                            }), true))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp(targetApp)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.removeEntitiesFromTargetApp = function (targetApp, entities) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.removeEntityAssocs(entities, targetApp)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray(__spreadArray([], Array.from(entities.gates).map(function (gate) {
                                return _this.removeTargetAppsFromGate(gate, [targetApp]);
                            }), true), Array.from(entities.configs).map(function (config) {
                                return _this.removeTargetAppsFromConfig(config, [targetApp]);
                            }), true), Array.from(entities.experiments).map(function (experiment) {
                                return _this.removeTargetAppsFromExperiment(experiment, [targetApp]);
                            }), true))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clearCacheForTargetApp(targetApp)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.assignTargetAppsToSDKKey = function (targetApps, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.assignTargetAppsToSDKKey(targetApps, sdkKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cache.clearSpecs(sdkKey)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.removeTargetAppsFromSDKKey = function (targetApps, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.removeTargetAppsFromSDKKey(targetApps, sdkKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cache.clearSpecs(sdkKey)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.clearTargetAppsFromSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.clearTargetAppsFromSDKKey(sdkKey)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cache.clearSpecs(sdkKey)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.getTargetAppNames = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (sdkKey) {
                    return [2 /*return*/, this.store.getTargetAppsFromSDKKey(sdkKey)];
                }
                return [2 /*return*/, this.store.getTargetAppNames()];
            });
        });
    };
    /* SDK Keys */
    StatsigOnPrem.prototype.registerSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sdkKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.addSDKKey(sdkKey)];
                    case 1:
                        sdkKeys = _a.sent();
                        return [4 /*yield*/, this.cache.cacheSDKKeys(sdkKeys)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.deactivateSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sdkKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.store.removeSDKKey(sdkKey)];
                    case 1:
                        sdkKeys = _a.sent();
                        return [4 /*yield*/, this.cache.cacheSDKKeys(sdkKeys)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cache.clearSpecs(sdkKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsigOnPrem.prototype.getRegisteredSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cachedKeys, sdkKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.getSDKKeys()];
                    case 1:
                        cachedKeys = _a.sent();
                        if (cachedKeys) {
                            return [2 /*return*/, cachedKeys];
                        }
                        return [4 /*yield*/, this.store.getRegisteredSDKKeys()];
                    case 2:
                        sdkKeys = _a.sent();
                        return [4 /*yield*/, this.cache.cacheSDKKeys(sdkKeys)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, sdkKeys];
                }
            });
        });
    };
    StatsigOnPrem.prototype.getGlobalSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cached, sdkKeys, globalKeys, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.cache.getGlobalSDKKeys()];
                    case 1:
                        cached = _b.sent();
                        if (cached) {
                            return [2 /*return*/, cached];
                        }
                        return [4 /*yield*/, this.getRegisteredSDKKeys()];
                    case 2:
                        sdkKeys = _b.sent();
                        _a = Set.bind;
                        return [4 /*yield*/, (0, genFilter_1.genFilter)(Array.from(sdkKeys), function (sdkKey) { return __awaiter(_this, void 0, void 0, function () {
                                var targetApps;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.store.getTargetAppsFromSDKKey(sdkKey)];
                                        case 1:
                                            targetApps = _a.sent();
                                            return [2 /*return*/, targetApps == null];
                                    }
                                });
                            }); })];
                    case 3:
                        globalKeys = new (_a.apply(Set, [void 0, _b.sent()]))();
                        return [4 /*yield*/, this.cache.cacheGlobalSDKKeys(globalKeys)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, globalKeys];
                }
            });
        });
    };
    return StatsigOnPrem;
}());
exports.default = StatsigOnPrem;
