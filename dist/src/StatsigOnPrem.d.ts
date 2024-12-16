import { StatsigInterface } from "./interfaces/StatsigInterface";
import { StorageInterface } from "./interfaces/StorageInterface";
import type { DynamicConfig, DynamicConfigCreationArgs, DynamicConfigUpdateArgs } from "./types/DynamicConfig";
import type { Experiment, ExperimentCreationArgs, ExperimentUpdateArgs } from "./types/Experiment";
import type { FeatureGate, FeatureGateCreationArgs, FeatureGateUpdateArgs } from "./types/FeatureGate";
import { EntityNames } from "./types/EntityNames";
import { ConfigSpecs } from "./types/ConfigSpecs";
import { ConfigSpecsOptions } from "./utils/ConfigSpecsUtils";
import { SpecsCacheInterface } from "./interfaces/SpecsCacheInterface";
import { TargetAppNames } from "./types/TargetAppNames";
import { SDKKeysCacheInterface } from "./interfaces/SDKKeyCacheInterface";
type Plugins = Partial<{
    specsCache: SpecsCacheInterface;
    sdkKeysCache: SDKKeysCacheInterface;
}>;
export default class StatsigOnPrem implements StatsigInterface {
    private store;
    private cache;
    constructor(storage: StorageInterface, plugins?: Plugins);
    initialize(): Promise<void>;
    shutdown(): Promise<void>;
    clearCache(sdkKey?: string): Promise<void>;
    clearCacheForTargetApp(...targetApps: string[]): Promise<void>;
    clearCacheForEntity(entity: FeatureGate | Experiment | DynamicConfig): Promise<void>;
    getConfigSpecs(sdkKey: string, options?: ConfigSpecsOptions): Promise<ConfigSpecs>;
    getGate(name: string): Promise<FeatureGate | null>;
    createGate(name: string, args: FeatureGateCreationArgs): Promise<void>;
    updateGate(name: string, args: FeatureGateUpdateArgs): Promise<void>;
    deleteGate(name: string): Promise<void>;
    addTargetAppsToGate(name: string, targetApps: string[]): Promise<void>;
    removeTargetAppsFromGate(name: string, targetApps: string[]): Promise<void>;
    getExperiment(name: string): Promise<Experiment | null>;
    createExperiment(name: string, args: ExperimentCreationArgs): Promise<void>;
    updateExperiment(name: string, args: ExperimentUpdateArgs): Promise<void>;
    deleteExperiment(name: string): Promise<void>;
    startExperiment(name: string): Promise<void>;
    addTargetAppsToExperiment(name: string, targetApps: string[]): Promise<void>;
    removeTargetAppsFromExperiment(name: string, targetApps: string[]): Promise<void>;
    getConfig(name: string): Promise<DynamicConfig | null>;
    createConfig(name: string, args: DynamicConfigCreationArgs): Promise<void>;
    updateConfig(name: string, args: DynamicConfigUpdateArgs): Promise<void>;
    deleteConfig(name: string): Promise<void>;
    addTargetAppsToConfig(name: string, targetApps: string[]): Promise<void>;
    removeTargetAppsFromConfig(name: string, targetApps: string[]): Promise<void>;
    createTargetApp(name: string, entities: EntityNames): Promise<void>;
    updateTargetApp(name: string, entities: Partial<EntityNames>): Promise<void>;
    deleteTargetApp(name: string): Promise<void>;
    addEntitiesToTargetApp(targetApp: string, entities: EntityNames): Promise<void>;
    removeEntitiesFromTargetApp(targetApp: string, entities: EntityNames): Promise<void>;
    assignTargetAppsToSDKKey(targetApps: string[], sdkKey: string): Promise<void>;
    removeTargetAppsFromSDKKey(targetApps: string[], sdkKey: string): Promise<void>;
    clearTargetAppsFromSDKKey(sdkKey: string): Promise<void>;
    getTargetAppNames(sdkKey?: string): Promise<TargetAppNames | null>;
    registerSDKKey(sdkKey: string): Promise<void>;
    deactivateSDKKey(sdkKey: string): Promise<void>;
    getRegisteredSDKKeys(): Promise<Set<string>>;
    getGlobalSDKKeys(): Promise<Set<string>>;
}
export {};