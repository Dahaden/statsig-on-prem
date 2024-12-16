import { APIConditionType } from "../ConfigSpecs";
import ConfigCondition, { ConfigConditionType } from "./ConfigCondition";
export default class ConfigPublicCondition extends ConfigCondition {
    getConfigConditionType(): ConfigConditionType;
    getAPIConditionType(): APIConditionType;
    getIDType(): string;
    getOperator(): null;
    getField(): null;
    getTargetValue(): null;
}
