import { SpecsCacheInterface } from "./interfaces/SpecsCacheInterface";
import { ConfigSpecs } from "./types/ConfigSpecs";
export default class SpecsCache implements SpecsCacheInterface {
    private cache;
    constructor();
    get(key: string, field: string): Promise<ConfigSpecs | null>;
    set(key: string, field: string, specs: ConfigSpecs): Promise<void>;
    clear(key: string, field?: string): Promise<void>;
    clearAll(): Promise<void>;
}
