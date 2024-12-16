"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigRule_1 = __importDefault(require("../types/ConfigRule"));
var safeParseJSON_1 = require("./safeParseJSON");
/**
 * Class for loading rules from stringified data
 */
var ConfigRuleLoader = /** @class */ (function () {
    function ConfigRuleLoader() {
    }
    ConfigRuleLoader.getRulesFromJSON = function (rules) {
        return rules.map(function (rule) { return ConfigRule_1.default.fromRuleJSON(rule); });
    };
    ConfigRuleLoader.getRulesFromData = function (data) {
        var rules = (0, safeParseJSON_1.safeParseJSON)(data, []);
        return this.getRulesFromJSON(rules);
    };
    return ConfigRuleLoader;
}());
exports.default = ConfigRuleLoader;
