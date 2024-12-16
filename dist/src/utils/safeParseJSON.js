"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeParseJSON = safeParseJSON;
function safeParseJSON(data, fallback) {
    try {
        return data ? JSON.parse(data) : fallback;
    }
    catch (_a) {
        return fallback;
    }
}
