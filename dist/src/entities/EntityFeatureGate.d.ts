import { APIConfigRule, APIConfigType, APIEntityType } from "../types/ConfigSpecs";
import { FeatureGate } from "../types/FeatureGate";
import IEntity from "./IEntity";
export default class EntityFeatureGate implements IEntity {
    private gate;
    constructor(gate: FeatureGate);
    getIsEnabled(): boolean;
    getName(): string;
    getSalt(): string;
    getDefaultValue(): boolean;
    getRules(): APIConfigRule[];
    getAPIType(): APIConfigType;
    getIsDeviceBased(): boolean;
    getIDType(): string;
    getAPIEntity(): APIEntityType;
}
