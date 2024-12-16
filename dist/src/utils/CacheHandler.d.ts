import { SDKKeysCacheInterface } from "../interfaces/SDKKeyCacheInterface";
import { SpecsCacheInterface } from "../interfaces/SpecsCacheInterface";
import { ConfigSpecs } from "../types/ConfigSpecs";
import { ConfigSpecsOptions } from "./ConfigSpecsUtils";
type CacheLibrary = {
    specs: SpecsCacheInterface;
    keys: SDKKeysCacheInterface;
};
export default class CacheHandler {
    private cache;
    constructor(cache: Partial<CacheLibrary>);
    cacheSpecs(sdkKey: string, options: ConfigSpecsOptions | undefined, specs: ConfigSpecs): Promise<void>;
    getSpecs(sdkKey: string, options: ConfigSpecsOptions | undefined): Promise<ConfigSpecs | null>;
    clearSpecs(...sdkKeys: string[]): Promise<void>;
    cacheSDKKeys(sdkKeys: Set<string>): Promise<void>;
    getSDKKeys(): Promise<Set<string> | null>;
    cacheGlobalSDKKeys(sdkKeys: Set<string>): Promise<void>;
    getGlobalSDKKeys(): Promise<Set<string> | null>;
    clearSDKKeys(): Promise<void>;
    clearAll(): Promise<void>;
}
export {};
