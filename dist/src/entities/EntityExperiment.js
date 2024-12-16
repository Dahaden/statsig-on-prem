"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigSpecs_1 = require("../types/ConfigSpecs");
var EntityExperiment = /** @class */ (function () {
    function EntityExperiment(experiment) {
        this.experiment = experiment;
    }
    EntityExperiment.prototype.getIsEnabled = function () {
        return this.experiment.enabled;
    };
    EntityExperiment.prototype.getName = function () {
        return this.experiment.name;
    };
    EntityExperiment.prototype.getSalt = function () {
        return this.experiment.salt;
    };
    EntityExperiment.prototype.getDefaultValue = function () {
        return this.experiment.defaultValue;
    };
    EntityExperiment.prototype.getRules = function () {
        var _this = this;
        var bucketSize = 1000 / this.experiment.groups.length;
        return this.experiment.groups.map(function (group, index) {
            return {
                name: "rule-".concat(index),
                groupName: group.name,
                passPercentage: 100,
                conditions: [
                    {
                        type: ConfigSpecs_1.APIConditionType.USER_BUCKET,
                        targetValue: bucketSize * (index + 1),
                        operator: ConfigSpecs_1.APIOperatorType.LT,
                        field: null,
                        additionalValues: {
                            salt: _this.experiment.salt,
                        },
                        idType: _this.getIDType(),
                    },
                ],
                returnValue: group.parameters,
                id: "rule-".concat(index),
                salt: "rule-".concat(index),
                idType: _this.getIDType(),
                isExperimentGroup: true,
            };
        });
    };
    EntityExperiment.prototype.getAPIType = function () {
        return ConfigSpecs_1.APIConfigType.DYNAMIC_CONFIG;
    };
    EntityExperiment.prototype.getIsDeviceBased = function () {
        return false;
    };
    EntityExperiment.prototype.getIDType = function () {
        return this.experiment.idType;
    };
    EntityExperiment.prototype.getAPIEntity = function () {
        return ConfigSpecs_1.APIEntityType.EXPERIMENT;
    };
    EntityExperiment.prototype.getIsActive = function () {
        return this.experiment.started;
    };
    return EntityExperiment;
}());
exports.default = EntityExperiment;
