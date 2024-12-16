"use strict";
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
exports.GLOBAL_ASSOC_KEY = exports.Assoc = void 0;
var Errors_1 = require("../Errors");
var HashUtils_1 = __importDefault(require("./HashUtils"));
var ConfigSpecs_1 = require("../types/ConfigSpecs");
var Assoc;
(function (Assoc) {
    Assoc[Assoc["FEATURE_GATE"] = 0] = "FEATURE_GATE";
    Assoc[Assoc["DYNAMIC_CONFIG"] = 1] = "DYNAMIC_CONFIG";
    Assoc[Assoc["EXPERIMENT"] = 2] = "EXPERIMENT";
    Assoc[Assoc["TARGET_APPS"] = 3] = "TARGET_APPS";
    Assoc[Assoc["TARGET_APP_TO_ENTITY_NAMES"] = 4] = "TARGET_APP_TO_ENTITY_NAMES";
    Assoc[Assoc["SDK_KEY_TO_TARGET_APPS"] = 5] = "SDK_KEY_TO_TARGET_APPS";
    Assoc[Assoc["TARGET_APP_TO_SDK_KEYS"] = 6] = "TARGET_APP_TO_SDK_KEYS";
    Assoc[Assoc["SDK_KEY"] = 7] = "SDK_KEY";
    Assoc[Assoc["SDK_KEYS"] = 8] = "SDK_KEYS";
})(Assoc || (exports.Assoc = Assoc = {}));
var GLOBAL_PREFIX = "statsig";
exports.GLOBAL_ASSOC_KEY = "";
var StorageUtils = /** @class */ (function () {
    function StorageUtils() {
    }
    StorageUtils.getStorageKey = function (type, id) {
        var hashedID = id ? HashUtils_1.default.hashString(id) : exports.GLOBAL_ASSOC_KEY;
        switch (type) {
            case Assoc.FEATURE_GATE:
                return "".concat(GLOBAL_PREFIX, ":gate:").concat(hashedID);
            case Assoc.DYNAMIC_CONFIG:
                return "".concat(GLOBAL_PREFIX, ":config:").concat(hashedID);
            case Assoc.EXPERIMENT:
                return "".concat(GLOBAL_PREFIX, ":experiment:").concat(hashedID);
            case Assoc.TARGET_APP_TO_ENTITY_NAMES:
                return "".concat(GLOBAL_PREFIX, ":entities:").concat(hashedID);
            case Assoc.TARGET_APPS:
                return "".concat(GLOBAL_PREFIX, ":targetApps");
            case Assoc.SDK_KEY_TO_TARGET_APPS:
                return "".concat(GLOBAL_PREFIX, ":").concat(hashedID, ":targetApps");
            case Assoc.TARGET_APP_TO_SDK_KEYS:
                return "".concat(GLOBAL_PREFIX, ":").concat(hashedID, ":sdkKeys");
            case Assoc.SDK_KEY:
                return "".concat(GLOBAL_PREFIX, ":sdkKey:").concat(hashedID);
            case Assoc.SDK_KEYS:
                return "".concat(GLOBAL_PREFIX, ":sdkKeys");
            default:
                throw new Errors_1.ExhaustSwitchError(type);
        }
    };
    StorageUtils.getAssocForEntityType = function (type) {
        switch (type) {
            case ConfigSpecs_1.APIEntityType.FEATURE_GATE:
            case ConfigSpecs_1.APIEntityType.HOLDOUT:
                return Assoc.FEATURE_GATE;
            case ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG:
                return Assoc.DYNAMIC_CONFIG;
            case ConfigSpecs_1.APIEntityType.EXPERIMENT:
            case ConfigSpecs_1.APIEntityType.AUTOTUNE:
                return Assoc.EXPERIMENT;
            default:
                throw new Errors_1.ExhaustSwitchError(type);
        }
    };
    StorageUtils.getEntityGroupKeyForEntityType = function (type) {
        switch (type) {
            case ConfigSpecs_1.APIEntityType.FEATURE_GATE:
            case ConfigSpecs_1.APIEntityType.HOLDOUT:
                return "gates";
            case ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG:
                return "configs";
            case ConfigSpecs_1.APIEntityType.EXPERIMENT:
            case ConfigSpecs_1.APIEntityType.AUTOTUNE:
                return "experiments";
            default:
                throw new Errors_1.ExhaustSwitchError(type);
        }
    };
    StorageUtils.serialize = function (object) {
        return JSON.stringify(object, function (_key, value) {
            return value instanceof Set
                ? { dataType: "Set", value: Array.from(value) }
                : value;
        });
    };
    StorageUtils.deserialize = function (value) {
        return JSON.parse(value, function (_key, value) {
            return value && value.dataType === "Set" ? new Set(value.value) : value;
        });
    };
    StorageUtils.mergeSets = function (sets) {
        var initialValue = [];
        return new Set(sets.reduce(function (acc, set) { return __spreadArray(__spreadArray([], acc, true), Array.from(set), true); }, initialValue));
    };
    return StorageUtils;
}());
exports.default = StorageUtils;
