"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    Node.prototype.getID = function () {
        return this.value.id;
    };
    Node.prototype.getValue = function () {
        return this.value;
    };
    Node.prototype.setValue = function (value) {
        this.value = value;
    };
    return Node;
}());
/**
 * Utility class to manage an ordered list uniquely indexed items
 * with fast lookup, mutations, and re-ordering.
 */
var LinkedList = /** @class */ (function () {
    function LinkedList(items) {
        var _this = this;
        this._head = null;
        this._tail = null;
        this._lookup = new Map();
        items.forEach(function (item) { return _this.add(item); });
    }
    /**
     * Add an item to the end of the list
     */
    LinkedList.prototype.add = function (item) {
        var node = new Node(item);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        }
        else {
            if (this._tail) {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            }
        }
        this._lookup.set(item.id, node);
    };
    /**
     * Update an item in the list
     */
    LinkedList.prototype.update = function (item) {
        var node = this._lookup.get(item.id);
        if (node) {
            node.setValue(item);
        }
    };
    /**
     * Delete an item in the list
     */
    LinkedList.prototype.delete = function (item) {
        var node = this._lookup.get(item.id);
        if (node) {
            if (node.prev) {
                node.prev.next = node.next;
            }
            else {
                this._head = node.next;
            }
            if (node.next) {
                node.next.prev = node.prev;
            }
            else {
                this._tail = node.prev;
            }
            this._lookup.delete(item.id);
        }
    };
    /**
     * Swap an item with another item in the list
     */
    LinkedList.prototype.swap = function (itemA, itemB) {
        var nodeA = this._lookup.get(itemA.id);
        var nodeB = this._lookup.get(itemB.id);
        if (!nodeA || !nodeB) {
            return;
        }
        nodeA.setValue(itemB);
        nodeB.setValue(itemA);
    };
    /**
     * Get the previous item in the list
     */
    LinkedList.prototype.getPrev = function (item) {
        var node = this._lookup.get(item.id);
        if (!node || !node.prev) {
            return null;
        }
        var prevNode = this._lookup.get(node.prev.getID());
        if (!prevNode) {
            return null;
        }
        return prevNode.getValue();
    };
    /**
     * Get the next item in the list
     */
    LinkedList.prototype.getNext = function (item) {
        var node = this._lookup.get(item.id);
        if (!node || !node.next) {
            return null;
        }
        var nextNode = this._lookup.get(node.next.getID());
        if (!nextNode) {
            return null;
        }
        return nextNode.getValue();
    };
    /**
     * Returns the size of the list
     */
    LinkedList.prototype.size = function () {
        return this._lookup.size;
    };
    /**
     * Returns the list in the form of a Typescript array
     */
    LinkedList.prototype.toArray = function () {
        var res = [];
        var cursor = this._head;
        while (cursor) {
            res.push(cursor.getValue());
            cursor = cursor.next;
        }
        return res;
    };
    return LinkedList;
}());
exports.default = LinkedList;
