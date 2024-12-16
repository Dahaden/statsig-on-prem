"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigSpecs_1 = require("../types/ConfigSpecs");
var EntityFeatureGate = /** @class */ (function () {
    function EntityFeatureGate(gate) {
        this.gate = gate;
    }
    EntityFeatureGate.prototype.getIsEnabled = function () {
        return this.gate.enabled;
    };
    EntityFeatureGate.prototype.getName = function () {
        return this.gate.name;
    };
    EntityFeatureGate.prototype.getSalt = function () {
        return this.gate.salt;
    };
    EntityFeatureGate.prototype.getDefaultValue = function () {
        return false;
    };
    EntityFeatureGate.prototype.getRules = function () {
        return [
            {
                name: "rule1",
                passPercentage: 100,
                conditions: [
                    {
                        type: ConfigSpecs_1.APIConditionType.PUBLIC,
                        targetValue: null,
                        operator: null,
                        field: null,
                        additionalValues: {},
                        idType: this.getIDType(),
                    },
                ],
                returnValue: true,
                id: "rule1",
                salt: "rule1",
                idType: this.getIDType(),
            },
        ];
    };
    EntityFeatureGate.prototype.getAPIType = function () {
        return ConfigSpecs_1.APIConfigType.FEATURE_GATE;
    };
    EntityFeatureGate.prototype.getIsDeviceBased = function () {
        return false;
    };
    EntityFeatureGate.prototype.getIDType = function () {
        return this.gate.idType;
    };
    EntityFeatureGate.prototype.getAPIEntity = function () {
        return ConfigSpecs_1.APIEntityType.FEATURE_GATE;
    };
    return EntityFeatureGate;
}());
exports.default = EntityFeatureGate;
