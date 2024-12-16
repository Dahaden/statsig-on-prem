import ConfigCondition, { ConfigConditionJSON, ConfigConditionType } from "../types/conditions/ConfigCondition";
import { CustomFieldConditionInput } from "../types/conditions/ConfigCustomFieldCondition";
import { EmailConditionInput } from "../types/conditions/ConfigEmailCondition";
import { LocaleConditionInput } from "../types/conditions/ConfigLocaleCondition";
import { UnitIDConditionInput } from "../types/conditions/ConfigUnitIDCondition";
import { UserIDConditionInput } from "../types/conditions/ConfigUserIDCondition";
export type ConfigConditionInput = {
    type: ConfigConditionType.PUBLIC;
} | {
    type: ConfigConditionType.CUSTOM_FIELD;
    input: CustomFieldConditionInput;
} | {
    type: ConfigConditionType.EMAIL;
    input: EmailConditionInput;
} | {
    type: ConfigConditionType.LOCALE;
    input: LocaleConditionInput;
} | {
    type: ConfigConditionType.UNIT_ID;
    input: UnitIDConditionInput;
} | {
    type: ConfigConditionType.USER_ID;
    input: UserIDConditionInput;
};
/**
 * Class for defining new conditions and loading conditions from stringified data
 * with schema validation on both the Javascript input and JSON data
 */
export default abstract class ConfigConditionLoader {
    /**
     * Creates a new ConfigCondition that meets criteria using static typing
     * @param args The type of condition and the allowed inputs
     * @returns A new ConfigCondition
     */
    static getConditionFromInput(args: ConfigConditionInput): ConfigCondition;
    /**
     * Revives the original ConfigCondition from it's JSON representation using
     * dynamic typing to validate the criteria.
     * @param condition The JSON representation of the condition
     * @returns A new ConfigCondition
     */
    private static getConditionFromJSON;
    static getConditionsFromJSON(conditions: ConfigConditionJSON[]): ConfigCondition[];
    static getConditionsFromData(data: string): ConfigCondition[];
    private static validateAndParseInputFromJSON;
}
