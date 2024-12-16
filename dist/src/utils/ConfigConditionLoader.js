"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errors_1 = require("../Errors");
var ConfigCondition_1 = require("../types/conditions/ConfigCondition");
var ConfigCustomFieldCondition_1 = __importStar(require("../types/conditions/ConfigCustomFieldCondition"));
var ConfigEmailCondition_1 = __importStar(require("../types/conditions/ConfigEmailCondition"));
var ConfigLocaleCondition_1 = __importStar(require("../types/conditions/ConfigLocaleCondition"));
var ConfigPublicCondition_1 = __importDefault(require("../types/conditions/ConfigPublicCondition"));
var ConfigUnitIDCondition_1 = __importStar(require("../types/conditions/ConfigUnitIDCondition"));
var ConfigUserIDCondition_1 = __importStar(require("../types/conditions/ConfigUserIDCondition"));
var filterNulls_1 = require("./filterNulls");
var safeParseJSON_1 = require("./safeParseJSON");
/**
 * Class for defining new conditions and loading conditions from stringified data
 * with schema validation on both the Javascript input and JSON data
 */
var ConfigConditionLoader = /** @class */ (function () {
    function ConfigConditionLoader() {
    }
    /**
     * Creates a new ConfigCondition that meets criteria using static typing
     * @param args The type of condition and the allowed inputs
     * @returns A new ConfigCondition
     */
    ConfigConditionLoader.getConditionFromInput = function (args) {
        var type = args.type;
        switch (type) {
            case ConfigCondition_1.ConfigConditionType.PUBLIC:
                return new ConfigPublicCondition_1.default();
            case ConfigCondition_1.ConfigConditionType.CUSTOM_FIELD:
                return new ConfigCustomFieldCondition_1.default(args.input);
            case ConfigCondition_1.ConfigConditionType.EMAIL:
                return new ConfigEmailCondition_1.default(args.input);
            case ConfigCondition_1.ConfigConditionType.LOCALE:
                return new ConfigLocaleCondition_1.default(args.input);
            case ConfigCondition_1.ConfigConditionType.UNIT_ID:
                return new ConfigUnitIDCondition_1.default(args.input);
            case ConfigCondition_1.ConfigConditionType.USER_ID:
                return new ConfigUserIDCondition_1.default(args.input);
            default:
                throw new Errors_1.ExhaustSwitchError(type);
        }
    };
    /**
     * Revives the original ConfigCondition from it's JSON representation using
     * dynamic typing to validate the criteria.
     * @param condition The JSON representation of the condition
     * @returns A new ConfigCondition
     */
    ConfigConditionLoader.getConditionFromJSON = function (condition) {
        var input = this.validateAndParseInputFromJSON(condition);
        if (!input) {
            return null;
        }
        return this.getConditionFromInput(input);
    };
    ConfigConditionLoader.getConditionsFromJSON = function (conditions) {
        var _this = this;
        return (0, filterNulls_1.filterNulls)(conditions.map(function (c) { return _this.getConditionFromJSON(c); }));
    };
    ConfigConditionLoader.getConditionsFromData = function (data) {
        var conditions = (0, safeParseJSON_1.safeParseJSON)(data, []);
        return this.getConditionsFromJSON(conditions);
    };
    ConfigConditionLoader.validateAndParseInputFromJSON = function (condition) {
        try {
            var type = condition.type, input = __rest(condition, ["type"]);
            switch (type) {
                case ConfigCondition_1.ConfigConditionType.PUBLIC:
                    return { type: type };
                case ConfigCondition_1.ConfigConditionType.CUSTOM_FIELD:
                    return { type: type, input: ConfigCustomFieldCondition_1.CustomFieldConditionInputSchema.parse(input) };
                case ConfigCondition_1.ConfigConditionType.EMAIL:
                    return { type: type, input: ConfigEmailCondition_1.EmailConditionInputSchema.parse(input) };
                case ConfigCondition_1.ConfigConditionType.LOCALE:
                    return { type: type, input: ConfigLocaleCondition_1.LocaleConditionInputSchema.parse(input) };
                case ConfigCondition_1.ConfigConditionType.UNIT_ID:
                    return { type: type, input: ConfigUnitIDCondition_1.UnitIDConditionInputSchema.parse(input) };
                case ConfigCondition_1.ConfigConditionType.USER_ID:
                    return { type: type, input: ConfigUserIDCondition_1.UserIDConditionInputSchema.parse(input) };
                default:
                    throw new Errors_1.ExhaustSwitchError(type);
            }
        }
        catch (e) {
            console.log("Unable to parse config condition data: ".concat(JSON.stringify(condition), ": ").concat(JSON.stringify(e)));
            return null;
        }
    };
    return ConfigConditionLoader;
}());
exports.default = ConfigConditionLoader;
