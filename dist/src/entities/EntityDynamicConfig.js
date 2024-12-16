"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigSpecs_1 = require("../types/ConfigSpecs");
var ConfigRuleLoader_1 = __importDefault(require("../utils/ConfigRuleLoader"));
var EntityDynamicConfig = /** @class */ (function () {
    function EntityDynamicConfig(config) {
        this.config = config;
    }
    EntityDynamicConfig.prototype.getIsEnabled = function () {
        return this.config.enabled;
    };
    EntityDynamicConfig.prototype.getName = function () {
        return this.config.name;
    };
    EntityDynamicConfig.prototype.getSalt = function () {
        return this.config.salt;
    };
    EntityDynamicConfig.prototype.getDefaultValue = function () {
        return this.config.defaultValue;
    };
    EntityDynamicConfig.prototype.getRules = function () {
        var rules = ConfigRuleLoader_1.default.getRulesFromData(this.config.rulesJSON);
        return rules.map(function (rule) { return rule.getAPIRule(); });
    };
    EntityDynamicConfig.prototype.getAPIType = function () {
        return ConfigSpecs_1.APIConfigType.DYNAMIC_CONFIG;
    };
    EntityDynamicConfig.prototype.getIsDeviceBased = function () {
        return false;
    };
    EntityDynamicConfig.prototype.getIDType = function () {
        return this.config.idType;
    };
    EntityDynamicConfig.prototype.getAPIEntity = function () {
        return ConfigSpecs_1.APIEntityType.DYNAMIC_CONFIG;
    };
    return EntityDynamicConfig;
}());
exports.default = EntityDynamicConfig;
