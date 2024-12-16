import EntityDynamicConfig from "../entities/EntityDynamicConfig";
import EntityFeatureGate from "../entities/EntityFeatureGate";
import EntityExperiment from "../entities/EntityExperiment";
import type { APIConfigSpec, APIEntityNames, ConfigSpecs } from "../types/ConfigSpecs";
import StorageHandler from "./StorageHandler";
export type ConfigSpecsOptions = {
    ssr?: SSROptions;
};
export type SSROptions = {
    targetApps?: string[] | "all";
    clientKeys?: string[] | "all";
};
export default class ConfigSpecsUtils {
    static getEmptyConfigSpecs(): ConfigSpecs;
    static getConfigSpec<T extends EntityFeatureGate | EntityDynamicConfig | EntityExperiment>(entity: T): APIConfigSpec;
    static getHashedSDKKeysToEntities(store: StorageHandler, options: SSROptions): Promise<Record<string, APIEntityNames>>;
}
