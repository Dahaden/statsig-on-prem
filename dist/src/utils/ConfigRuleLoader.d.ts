import ConfigRule, { ConfigRuleJSON } from "../types/ConfigRule";
/**
 * Class for loading rules from stringified data
 */
export default abstract class ConfigRuleLoader {
    static getRulesFromJSON(rules: ConfigRuleJSON[]): ConfigRule[];
    static getRulesFromData(data: string | undefined): ConfigRule[];
}
