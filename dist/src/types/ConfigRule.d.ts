import ConfigCondition, { ConfigConditionJSON } from "./conditions/ConfigCondition";
import { APIConfigRule } from "./ConfigSpecs";
export type ConfigRuleJSON = {
    id: string;
    name: string;
    conditions: ConfigConditionJSON[];
    passPercentage: number;
    returnValue: boolean | Record<string, unknown>;
    salt: string;
    idType: string;
};
export default class ConfigRule {
    id: string;
    name: string;
    conditions: ConfigCondition[];
    passPercentage: number;
    returnValue: boolean | Record<string, unknown>;
    salt: string;
    idType: string;
    private constructor();
    static new(input: {
        id: string;
        name: string;
        conditions: ConfigCondition[];
        passPercentage: number;
        returnValue: boolean | Record<string, unknown>;
        salt: string;
        idType: string;
    }): ConfigRule;
    getAPIRule(): APIConfigRule;
    getRuleJSON(): ConfigRuleJSON;
    static fromRuleJSON(rule: ConfigRuleJSON): ConfigRule;
}
