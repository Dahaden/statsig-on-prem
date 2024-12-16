import { SDKKeysCacheInterface } from "./interfaces/SDKKeyCacheInterface";
export default class SDKKeysCache implements SDKKeysCacheInterface {
    private cache;
    constructor();
    get(): Promise<Set<string> | null>;
    set(keys: Set<string>): Promise<void>;
    clear(): Promise<void>;
    getGlobal(): Promise<Set<string> | null>;
    setGlobal(keys: Set<string>): Promise<void>;
    clearGlobal(): Promise<void>;
}
