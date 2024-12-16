"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDUtils = void 0;
var uuid_1 = require("uuid");
var IDUtils = /** @class */ (function () {
    function IDUtils() {
    }
    IDUtils.generateNewSalt = function () {
        return (0, uuid_1.v4)();
    };
    return IDUtils;
}());
exports.IDUtils = IDUtils;
