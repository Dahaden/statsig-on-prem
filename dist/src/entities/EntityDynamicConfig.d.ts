import { APIConfigRule, APIConfigType, APIEntityType } from "../types/ConfigSpecs";
import { DynamicConfig } from "../types/DynamicConfig";
import IEntity from "./IEntity";
export default class EntityDynamicConfig implements IEntity {
    private config;
    constructor(config: DynamicConfig);
    getIsEnabled(): boolean;
    getName(): string;
    getSalt(): string;
    getDefaultValue(): Record<string, unknown>;
    getRules(): APIConfigRule[];
    getAPIType(): APIConfigType;
    getIsDeviceBased(): boolean;
    getIDType(): string;
    getAPIEntity(): APIEntityType;
}
