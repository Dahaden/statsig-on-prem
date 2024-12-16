import { StorageInterface } from "../src/interfaces/StorageInterface";
export default class StatsigStorageExample implements StorageInterface {
    private store;
    constructor();
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    delete(key: string): Promise<void>;
    initialize(): Promise<void>;
    shutdown(): Promise<void>;
    clearAll(): void;
}
