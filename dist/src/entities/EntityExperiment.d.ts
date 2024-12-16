import { APIConfigRule, APIConfigType, APIEntityType } from "../types/ConfigSpecs";
import { Experiment } from "../types/Experiment";
import IEntity from "./IEntity";
export default class EntityExperiment implements IEntity {
    private experiment;
    constructor(experiment: Experiment);
    getIsEnabled(): boolean;
    getName(): string;
    getSalt(): string;
    getDefaultValue(): Record<string, unknown>;
    getRules(): APIConfigRule[];
    getAPIType(): APIConfigType;
    getIsDeviceBased(): boolean;
    getIDType(): string;
    getAPIEntity(): APIEntityType;
    getIsActive(): boolean;
}
