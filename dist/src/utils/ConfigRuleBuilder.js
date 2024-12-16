"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigRule_1 = __importDefault(require("../types/ConfigRule"));
var ConfigConditionLoader_1 = __importDefault(require("./ConfigConditionLoader"));
var ConfigRuleLoader_1 = __importDefault(require("./ConfigRuleLoader"));
var HashUtils_1 = __importDefault(require("./HashUtils"));
var IDUtils_1 = require("./IDUtils");
var LinkedList_1 = __importDefault(require("./LinkedList"));
/**
 * External interface for mutating the rules of a config
 */
var ConfigRuleBuilder = /** @class */ (function () {
    function ConfigRuleBuilder(config) {
        var rules = ConfigRuleLoader_1.default.getRulesFromData(config.rulesJSON);
        this.rules = new LinkedList_1.default(rules);
    }
    ConfigRuleBuilder.prototype.addRule = function (input) {
        var rule = ConfigRule_1.default.new({
            name: input.name,
            passPercentage: input.passPercentage,
            conditions: input.conditions.map(function (c) {
                return ConfigConditionLoader_1.default.getConditionFromInput(c);
            }),
            returnValue: input.value,
            id: HashUtils_1.default.hashString(input.name),
            salt: IDUtils_1.IDUtils.generateNewSalt(),
            idType: input.idType,
        });
        this.rules.add(rule);
        return rule;
    };
    ConfigRuleBuilder.prototype.updateRule = function (rule) {
        this.rules.update(rule);
    };
    ConfigRuleBuilder.prototype.deleteRule = function (rule) {
        this.rules.delete(rule);
    };
    ConfigRuleBuilder.prototype.moveRuleUp = function (rule) {
        var prev = this.rules.getPrev(rule);
        if (prev) {
            this.rules.swap(prev, rule);
        }
    };
    ConfigRuleBuilder.prototype.moveRuleDown = function (rule) {
        var next = this.rules.getNext(rule);
        if (next) {
            this.rules.swap(next, rule);
        }
    };
    ConfigRuleBuilder.prototype.swapRules = function (ruleA, ruleB) {
        this.rules.swap(ruleA, ruleB);
    };
    ConfigRuleBuilder.prototype.getRules = function () {
        return this.rules.toArray();
    };
    ConfigRuleBuilder.prototype.getRulesJSON = function () {
        var rulesJSON = this.getRules().map(function (rule) { return rule.getRuleJSON(); });
        return JSON.stringify(rulesJSON);
    };
    return ConfigRuleBuilder;
}());
exports.default = ConfigRuleBuilder;
