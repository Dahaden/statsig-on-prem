"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNulls = filterNulls;
function filterNulls(items) {
    return items.filter(function (item) { return item != null; });
}
