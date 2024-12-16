"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigConditionLoader_1 = __importDefault(require("../utils/ConfigConditionLoader"));
var ConfigRule = /** @class */ (function () {
    function ConfigRule(id, name, conditions, passPercentage, returnValue, salt, idType) {
        this.id = id;
        this.name = name;
        this.conditions = conditions;
        this.passPercentage = passPercentage;
        this.returnValue = returnValue;
        this.salt = salt;
        this.idType = idType;
    }
    ConfigRule.new = function (input) {
        return new ConfigRule(input.id, input.name, input.conditions, input.passPercentage, input.returnValue, input.salt, input.idType);
    };
    ConfigRule.prototype.getAPIRule = function () {
        return {
            id: this.id,
            name: this.name,
            conditions: this.conditions.map(function (c) { return c.getAPICondition(); }),
            passPercentage: this.passPercentage,
            returnValue: this.returnValue,
            salt: this.salt,
            idType: this.idType,
        };
    };
    ConfigRule.prototype.getRuleJSON = function () {
        return {
            id: this.id,
            name: this.name,
            conditions: this.conditions.map(function (c) { return c.getConditionJSON(); }),
            passPercentage: this.passPercentage,
            returnValue: this.returnValue,
            salt: this.salt,
            idType: this.idType,
        };
    };
    ConfigRule.fromRuleJSON = function (rule) {
        return new ConfigRule(rule.id, rule.name, ConfigConditionLoader_1.default.getConditionsFromJSON(rule.conditions), rule.passPercentage, rule.returnValue, rule.salt, rule.idType);
    };
    return ConfigRule;
}());
exports.default = ConfigRule;
