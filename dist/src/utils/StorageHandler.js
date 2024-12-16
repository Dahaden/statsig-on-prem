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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigSpecs_1 = require("../types/ConfigSpecs");
var MutationType_1 = require("../types/MutationType");
var filterNulls_1 = require("./filterNulls");
var StorageUtils_1 = __importStar(require("./StorageUtils"));
var StorageHandler = /** @class */ (function () {
    function StorageHandler(storage) {
        this.storage = storage;
    }
    StorageHandler.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.initialize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.shutdown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.shutdown()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getGate = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntity(name, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.addGate = function (gate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addEntity(gate, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateGate = function (gate, args) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, changes, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = args.targetApps, changes = __rest(args, ["targetApps"]);
                        updated = __assign(__assign({}, gate), changes);
                        if (!targetApps) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateGateTargetApps(updated, new Set(targetApps), MutationType_1.MutationType.Replace)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.updateEntity(updated, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeGate = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeEntity(name, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addTargetAppsToGate = function (gate, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateGateTargetApps(gate, new Set(targetApps), MutationType_1.MutationType.Add)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(gate, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeTargetAppsFromGate = function (gate, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateGateTargetApps(gate, new Set(targetApps), MutationType_1.MutationType.Remove)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(gate, ConfigSpecs_1.APIEntityType.FEATURE_GATE)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getConfig = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntity(name, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.addConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addEntity(config, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateConfig = function (updated, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(args === null || args === void 0 ? void 0 : args.targetApps)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateConfigTargetApps(updated, new Set(args === null || args === void 0 ? void 0 : args.targetApps), MutationType_1.MutationType.Replace)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.updateEntity(updated, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeConfig = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeEntity(name, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addTargetAppsToConfig = function (config, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateConfigTargetApps(config, new Set(targetApps), MutationType_1.MutationType.Add)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(config, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeTargetAppsFromConfig = function (config, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateConfigTargetApps(config, new Set(targetApps), MutationType_1.MutationType.Remove)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(config, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getExperiment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntity(name, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.addExperiment = function (experiment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addEntity(experiment, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateExperiment = function (experiment, args) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, changes, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetApps = args.targetApps, changes = __rest(args, ["targetApps"]);
                        updated = __assign(__assign({}, experiment), changes);
                        if (!targetApps) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateExperimentTargetApps(updated, new Set(targetApps), MutationType_1.MutationType.Replace)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.updateEntity(updated, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeExperiment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeEntity(name, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addTargetAppsToExperiment = function (experiment, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateExperimentTargetApps(experiment, new Set(targetApps), MutationType_1.MutationType.Add)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(experiment, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeTargetAppsFromExperiment = function (experiment, targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateExperimentTargetApps(experiment, new Set(targetApps), MutationType_1.MutationType.Remove)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateEntity(experiment, ConfigSpecs_1.APIEntityType.EXPERIMENT)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addTargetApp = function (name, entities) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES,
                            source: name,
                            destination: entities,
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateTargetAppNames(new Set([name]), MutationType_1.MutationType.Add)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateTargetApp = function (name, entities) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES,
                            source: name,
                            destination: entities,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeTargetApp = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES,
                            source: name,
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateTargetAppNames(new Set([name]), MutationType_1.MutationType.Remove)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addEntityAssocs = function (entities, targetApp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateEntityAssocs(entities, MutationType_1.MutationType.Add, targetApp)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeEntityAssocs = function (entities, targetApp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateEntityAssocs(entities, MutationType_1.MutationType.Remove, targetApp)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getSDKKeysForTargetApp = function (targetApp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_SDK_KEYS,
                            source: targetApp,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.getTargetAppsFromSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({
                            assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                            source: sdkKey,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.addSDKKeyToTargetApp = function (targetApp, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getSDKKeysForTargetApp(targetApp)];
                    case 1:
                        existing = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set([]);
                        return [4 /*yield*/, this.updateSet(existing, new Set([sdkKey]), MutationType_1.MutationType.Add)];
                    case 2:
                        updated = _b.sent();
                        return [4 /*yield*/, this.setAssoc({
                                assoc: StorageUtils_1.Assoc.TARGET_APP_TO_SDK_KEYS,
                                source: targetApp,
                                destination: updated,
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.assignTargetAppsToSDKKey = function (targetApps, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTargetAppsFromSDKKey(sdkKey)];
                    case 1:
                        existing = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set([]);
                        return [4 /*yield*/, this.updateSet(existing, new Set(targetApps), MutationType_1.MutationType.Add)];
                    case 2:
                        updated = _b.sent();
                        return [4 /*yield*/, this.setAssoc({
                                assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                                source: sdkKey,
                                destination: updated,
                            })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, Promise.all(targetApps.map(function (targetApp) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.addSDKKeyToTargetApp(targetApp, sdkKey)];
                            }); }); }))];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeSDKKeyFromTargetApp = function (targetApp, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getSDKKeysForTargetApp(targetApp)];
                    case 1:
                        existing = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set([]);
                        return [4 /*yield*/, this.updateSet(existing, new Set([sdkKey]), MutationType_1.MutationType.Add)];
                    case 2:
                        updated = _b.sent();
                        return [4 /*yield*/, this.setAssoc({
                                assoc: StorageUtils_1.Assoc.TARGET_APP_TO_SDK_KEYS,
                                source: targetApp,
                                destination: updated,
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeTargetAppsFromSDKKey = function (targetApps, sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTargetAppsFromSDKKey(sdkKey)];
                    case 1:
                        existing = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set([]);
                        return [4 /*yield*/, this.updateSet(existing, new Set(targetApps), MutationType_1.MutationType.Remove)];
                    case 2:
                        updated = _b.sent();
                        return [4 /*yield*/, this.setAssoc({
                                assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                                source: sdkKey,
                                destination: updated,
                            })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, Promise.all(targetApps.map(function (targetApp) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.removeSDKKeyFromTargetApp(targetApp, sdkKey)];
                            }); }); }))];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.clearTargetAppsFromSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTargetAppsFromSDKKey(sdkKey)];
                    case 1:
                        targetApps = _a.sent();
                        return [4 /*yield*/, this.deleteAssoc({
                                assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                                source: sdkKey,
                            })];
                    case 2:
                        _a.sent();
                        if (!targetApps) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(Array.from(targetApps).map(function (targetApp) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.removeSDKKeyFromTargetApp(targetApp, sdkKey)];
                            }); }); }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.addSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.Assoc.SDK_KEY,
                            source: sdkKey,
                            destination: "registered",
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateRegisteredSDKKeys(new Set([sdkKey]), MutationType_1.MutationType.Add)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.removeSDKKey = function (sdkKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteAssoc({ assoc: StorageUtils_1.Assoc.SDK_KEY, source: sdkKey })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateRegisteredSDKKeys(new Set([sdkKey]), MutationType_1.MutationType.Remove)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.getEntityAssocs = function (targetApp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES,
                            source: targetApp,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.getEntityAssocsForMultipleTargetApps = function (targetApps) {
        return __awaiter(this, void 0, void 0, function () {
            var assocs, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = filterNulls_1.filterNulls;
                        return [4 /*yield*/, Promise.all(Array.from(targetApps !== null && targetApps !== void 0 ? targetApps : [StorageUtils_1.GLOBAL_ASSOC_KEY]).map(function (targetApp) {
                                return _this.getEntityAssocs(targetApp);
                            }))];
                    case 1:
                        assocs = _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/, {
                                gates: StorageUtils_1.default.mergeSets(assocs.map(function (assoc) { return assoc.gates; })),
                                configs: StorageUtils_1.default.mergeSets(assocs.map(function (assoc) { return assoc.configs; })),
                                experiments: StorageUtils_1.default.mergeSets(assocs.map(function (assoc) { return assoc.experiments; })),
                            }];
                }
            });
        });
    };
    StorageHandler.prototype.getTargetAppNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APPS,
                        })];
                    case 1: return [2 /*return*/, ((_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set())];
                }
            });
        });
    };
    StorageHandler.prototype.updateEntityAssocs = function (entities, mutation, targetApp) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, _a, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.getEntityAssocs(targetApp)];
                    case 1:
                        existing = (_d = (_e.sent())) !== null && _d !== void 0 ? _d : {
                            gates: new Set(),
                            experiments: new Set(),
                            configs: new Set(),
                        };
                        if (!entities.gates) return [3 /*break*/, 3];
                        _a = existing;
                        return [4 /*yield*/, this.updateSet(existing.gates, entities.gates, mutation)];
                    case 2:
                        _a.gates = _e.sent();
                        _e.label = 3;
                    case 3:
                        if (!entities.configs) return [3 /*break*/, 5];
                        _b = existing;
                        return [4 /*yield*/, this.updateSet(existing.configs, entities.configs, mutation)];
                    case 4:
                        _b.configs = _e.sent();
                        _e.label = 5;
                    case 5:
                        if (!entities.experiments) return [3 /*break*/, 7];
                        _c = existing;
                        return [4 /*yield*/, this.updateSet(existing.experiments, entities.experiments, mutation)];
                    case 6:
                        _c.experiments = _e.sent();
                        _e.label = 7;
                    case 7: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES,
                            source: targetApp,
                            destination: existing,
                        })];
                    case 8:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getEntity = function (name, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({
                            assoc: StorageUtils_1.default.getAssocForEntityType(type),
                            source: name,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageHandler.prototype.addEntity = function (entity, type) {
        return __awaiter(this, void 0, void 0, function () {
            var entityNames;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.default.getAssocForEntityType(type),
                            source: entity.name,
                            destination: entity,
                        })];
                    case 1:
                        _b.sent();
                        entityNames = (_a = {},
                            _a[StorageUtils_1.default.getEntityGroupKeyForEntityType(type)] = new Set([
                                entity.name,
                            ]),
                            _a);
                        return [4 /*yield*/, this.addEntityAssocs(entityNames)];
                    case 2:
                        _b.sent();
                        if (!entity.targetApps) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(Array.from(entity.targetApps).map(function (targetApp) {
                                return _this.addEntityAssocs(entityNames, targetApp);
                            }))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateGateTargetApps = function (gate, targetApps, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateEntityTargetApps(gate, ConfigSpecs_1.APIEntityType.FEATURE_GATE, targetApps, mutation)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateConfigTargetApps = function (gate, targetApps, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateEntityTargetApps(gate, ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG, targetApps, mutation)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateExperimentTargetApps = function (gate, targetApps, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateEntityTargetApps(gate, ConfigSpecs_1.APIEntityType.EXPERIMENT, targetApps, mutation)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateEntityTargetApps = function (entity, type, targetApps, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            var entityNames, _a, _b, allTargetApps;
            var _c;
            var _this = this;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        entityNames = (_c = {},
                            _c[StorageUtils_1.default.getEntityGroupKeyForEntityType(type)] = new Set([
                                entity.name,
                            ]),
                            _c);
                        if (!(mutation === MutationType_1.MutationType.Add)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(Array.from(targetApps).map(function (targetApp) {
                                return _this.addEntityAssocs(entityNames, targetApp);
                            }))];
                    case 1:
                        _e.sent();
                        _a = entity;
                        return [4 /*yield*/, this.updateSet((_d = entity.targetApps) !== null && _d !== void 0 ? _d : new Set([]), targetApps, mutation)];
                    case 2:
                        _a.targetApps = _e.sent();
                        return [3 /*break*/, 10];
                    case 3:
                        if (!(mutation === MutationType_1.MutationType.Remove)) return [3 /*break*/, 7];
                        return [4 /*yield*/, Promise.all(Array.from(targetApps).map(function (targetApp) {
                                return _this.removeEntityAssocs(entityNames, targetApp);
                            }))];
                    case 4:
                        _e.sent();
                        if (!(entity.targetApps !== undefined)) return [3 /*break*/, 6];
                        _b = entity;
                        return [4 /*yield*/, this.updateSet(entity.targetApps, targetApps, mutation)];
                    case 5:
                        _b.targetApps = _e.sent();
                        _e.label = 6;
                    case 6: return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, this.getTargetAppNames()];
                    case 8:
                        allTargetApps = _e.sent();
                        return [4 /*yield*/, Promise.all((0, filterNulls_1.filterNulls)(Array.from(allTargetApps).map(function (targetApp) {
                                return targetApps.has(targetApp)
                                    ? _this.addEntityAssocs(entityNames, targetApp)
                                    : entity.targetApps.has(targetApp)
                                        ? _this.removeEntityAssocs(entityNames, targetApp)
                                        : null;
                            })))];
                    case 9:
                        _e.sent();
                        entity.targetApps = targetApps;
                        _e.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateEntity = function (entity, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setAssoc({
                            assoc: StorageUtils_1.default.getAssocForEntityType(type),
                            source: entity.name,
                            destination: entity,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.removeEntity = function (name, type) {
        return __awaiter(this, void 0, void 0, function () {
            var entityNames, targetApps;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.deleteAssoc({
                            assoc: StorageUtils_1.default.getAssocForEntityType(type),
                            source: name,
                        })];
                    case 1:
                        _b.sent();
                        entityNames = (_a = {},
                            _a[StorageUtils_1.default.getEntityGroupKeyForEntityType(type)] = new Set([name]),
                            _a);
                        return [4 /*yield*/, this.getTargetAppNames()];
                    case 2:
                        targetApps = _b.sent();
                        return [4 /*yield*/, Promise.all(Array.from(targetApps).map(function (targetApp) {
                                return _this.removeEntityAssocs(entityNames, targetApp);
                            }))];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.removeEntityAssocs(entityNames)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateTargetAppNames = function (targetApps, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTargetAppNames()];
                    case 1:
                        existing = _a.sent();
                        return [4 /*yield*/, this.updateSet(existing, targetApps, mutation)];
                    case 2:
                        updated = _a.sent();
                        return [4 /*yield*/, this.setAssoc({ assoc: StorageUtils_1.Assoc.TARGET_APPS, destination: updated })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getRegisteredSDKKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getAssoc({ assoc: StorageUtils_1.Assoc.SDK_KEYS })];
                    case 1: return [2 /*return*/, ((_a = (_b.sent())) !== null && _a !== void 0 ? _a : new Set())];
                }
            });
        });
    };
    StorageHandler.prototype.updateRegisteredSDKKeys = function (sdkKeys, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegisteredSDKKeys()];
                    case 1:
                        existing = _a.sent();
                        return [4 /*yield*/, this.updateSet(existing, sdkKeys, mutation)];
                    case 2:
                        updated = _a.sent();
                        return [4 /*yield*/, this.setAssoc({ assoc: StorageUtils_1.Assoc.SDK_KEYS, destination: updated })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, updated];
                }
            });
        });
    };
    StorageHandler.prototype.updateSet = function (existing, updating, mutation) {
        return __awaiter(this, void 0, void 0, function () {
            var cloned, operation;
            return __generator(this, function (_a) {
                if (mutation === MutationType_1.MutationType.Replace) {
                    return [2 /*return*/, updating];
                }
                cloned = new Set(existing);
                operation = function (set) {
                    switch (mutation) {
                        case MutationType_1.MutationType.Add:
                            return set.add;
                        case MutationType_1.MutationType.Remove:
                            return set.delete;
                    }
                };
                updating.forEach(operation(cloned), cloned);
                return [2 /*return*/, cloned];
            });
        });
    };
    StorageHandler.prototype.getAssoc = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var assoc, source, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assoc = args.assoc, source = args.source;
                        return [4 /*yield*/, this.storage.get(StorageUtils_1.default.getStorageKey(assoc, source))];
                    case 1:
                        val = _a.sent();
                        return [2 /*return*/, val ? StorageUtils_1.default.deserialize(val) : null];
                }
            });
        });
    };
    StorageHandler.prototype.setAssoc = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var assoc, source, destination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assoc = args.assoc, source = args.source, destination = args.destination;
                        return [4 /*yield*/, this.storage.set(StorageUtils_1.default.getStorageKey(assoc, source), typeof destination === "string"
                                ? destination
                                : StorageUtils_1.default.serialize(destination))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.deleteAssoc = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var assoc, source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assoc = args.assoc, source = args.source;
                        return [4 /*yield*/, this.storage.delete(StorageUtils_1.default.getStorageKey(assoc, source))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.updateSerialization__V0_0_8_BETA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targetApps, sdkKeys;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([StorageUtils_1.Assoc.SDK_KEYS, StorageUtils_1.Assoc.TARGET_APPS].map(function (assoc) { return __awaiter(_this, void 0, void 0, function () {
                            var deserialized;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getAssoc__DEPRECATED({ assoc: assoc })];
                                    case 1:
                                        deserialized = _a.sent();
                                        if (!deserialized) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.setAssoc({ assoc: assoc, destination: deserialized })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getTargetAppNames()];
                    case 2:
                        targetApps = _a.sent();
                        return [4 /*yield*/, Promise.all([StorageUtils_1.Assoc.TARGET_APP_TO_SDK_KEYS, StorageUtils_1.Assoc.TARGET_APP_TO_ENTITY_NAMES].map(function (assoc) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(Array.from(targetApps).map(function (targetApp) { return __awaiter(_this, void 0, void 0, function () {
                                                var deserialized;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.getAssoc__DEPRECATED({
                                                                assoc: assoc,
                                                                source: targetApp,
                                                            })];
                                                        case 1:
                                                            deserialized = _a.sent();
                                                            if (!deserialized) return [3 /*break*/, 3];
                                                            return [4 /*yield*/, this.setAssoc({
                                                                    assoc: assoc,
                                                                    source: targetApp,
                                                                    destination: deserialized,
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getRegisteredSDKKeys()];
                    case 4:
                        sdkKeys = _a.sent();
                        return [4 /*yield*/, Promise.all(Array.from(sdkKeys).map(function (sdkKey) { return __awaiter(_this, void 0, void 0, function () {
                                var deserialized;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getAssoc__DEPRECATED({
                                                assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                                                source: sdkKey,
                                            })];
                                        case 1:
                                            deserialized = _a.sent();
                                            if (!deserialized) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.setAssoc({
                                                    assoc: StorageUtils_1.Assoc.SDK_KEY_TO_TARGET_APPS,
                                                    source: sdkKey,
                                                    destination: deserialized,
                                                })];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageHandler.prototype.getAssoc__DEPRECATED = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var assoc, source, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assoc = args.assoc, source = args.source;
                        return [4 /*yield*/, this.storage.get(StorageUtils_1.default.getStorageKey(assoc, source))];
                    case 1:
                        val = _a.sent();
                        return [2 /*return*/, val
                                ? JSON.parse(val, function (_key, value) {
                                    return value instanceof Array ? new Set(value) : value;
                                })
                                : null];
                }
            });
        });
    };
    return StorageHandler;
}());
exports.default = StorageHandler;
