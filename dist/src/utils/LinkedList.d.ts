interface IndexableItem {
    id: string;
}
/**
 * Utility class to manage an ordered list uniquely indexed items
 * with fast lookup, mutations, and re-ordering.
 */
export default class LinkedList<T extends IndexableItem> {
    private _head;
    private _tail;
    private _lookup;
    constructor(items: T[]);
    /**
     * Add an item to the end of the list
     */
    add(item: T): void;
    /**
     * Update an item in the list
     */
    update(item: T): void;
    /**
     * Delete an item in the list
     */
    delete(item: T): void;
    /**
     * Swap an item with another item in the list
     */
    swap(itemA: T, itemB: T): void;
    /**
     * Get the previous item in the list
     */
    getPrev(item: T): T | null;
    /**
     * Get the next item in the list
     */
    getNext(item: T): T | null;
    /**
     * Returns the size of the list
     */
    size(): number;
    /**
     * Returns the list in the form of a Typescript array
     */
    toArray(): T[];
}
export {};
