import { EntityNames } from "../types/EntityNames";
import { APIEntityType } from "../types/ConfigSpecs";
export declare enum Assoc {
    FEATURE_GATE = 0,
    DYNAMIC_CONFIG = 1,
    EXPERIMENT = 2,
    TARGET_APPS = 3,
    TARGET_APP_TO_ENTITY_NAMES = 4,
    SDK_KEY_TO_TARGET_APPS = 5,
    TARGET_APP_TO_SDK_KEYS = 6,
    SDK_KEY = 7,
    SDK_KEYS = 8
}
export type SupportedAPIEntityType = Exclude<APIEntityType, APIEntityType.SEGMENT | APIEntityType.LAYER>;
export declare const GLOBAL_ASSOC_KEY = "";
export default class StorageUtils {
    static getStorageKey(type: Assoc, id?: string): string;
    static getAssocForEntityType(type: SupportedAPIEntityType): Assoc;
    static getEntityGroupKeyForEntityType(type: SupportedAPIEntityType): keyof EntityNames;
    static serialize(object: object): string;
    static deserialize<T extends object>(value: string): T;
    static mergeSets<T>(sets: Set<T>[]): Set<T>;
}
