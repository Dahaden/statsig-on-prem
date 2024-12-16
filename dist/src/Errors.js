"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhaustSwitchError = void 0;
exports.assertNeverX = assertNeverX;
var ExhaustSwitchError = /** @class */ (function (_super) {
    __extends(ExhaustSwitchError, _super);
    function ExhaustSwitchError(x) {
        return _super.call(this, "Unreachable case: ".concat(JSON.stringify(x))) || this;
    }
    return ExhaustSwitchError;
}(Error));
exports.ExhaustSwitchError = ExhaustSwitchError;
function assertNeverX(x) {
    throw new ExhaustSwitchError(x);
}
