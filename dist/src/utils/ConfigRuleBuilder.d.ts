import ConfigRule from "../types/ConfigRule";
import type { DynamicConfig } from "../types/DynamicConfig";
import { ConfigConditionInput } from "./ConfigConditionLoader";
/**
 * External interface for mutating the rules of a config
 */
export default class ConfigRuleBuilder {
    private rules;
    constructor(config: DynamicConfig);
    addRule(input: {
        name: string;
        conditions: ConfigConditionInput[];
        value: boolean | Record<string, unknown>;
        passPercentage: number;
        idType: string;
    }): ConfigRule;
    updateRule(rule: ConfigRule): void;
    deleteRule(rule: ConfigRule): void;
    moveRuleUp(rule: ConfigRule): void;
    moveRuleDown(rule: ConfigRule): void;
    swapRules(ruleA: ConfigRule, ruleB: ConfigRule): void;
    getRules(): ConfigRule[];
    getRulesJSON(): string;
}
