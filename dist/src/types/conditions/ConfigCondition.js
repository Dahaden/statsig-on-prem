"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigConditionType = void 0;
exports.SupportedOperations = SupportedOperations;
var ConfigSpecs_1 = require("../ConfigSpecs");
var zod_1 = require("zod");
var MultiTypes = zod_1.z.union([
    zod_1.z.string().array().nullable(),
    zod_1.z.number().array().nullable(),
    zod_1.z.null(),
]);
var SingleTypes = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.null()]);
var MultiValue = function (type) {
    return type.refine(function (t) { return MultiTypes.safeParse(t).success; }, "Expected array of strings or numbers.");
};
var SingleValue = function (type) {
    return type.refine(function (t) { return SingleTypes.safeParse(t).success; }, "Expected string or number.");
};
function SupportedOperations(operators, targetValue, field) {
    return zod_1.z
        .union([
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.ANY),
            targetValue: MultiValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.NONE),
            targetValue: MultiValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.EQ),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.NEQ),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_CONTAINS_ANY),
            targetValue: zod_1.z.string().array(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_CONTAINS_NONE),
            targetValue: zod_1.z.string().array(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_MATCHES),
            targetValue: zod_1.z.string(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.LT),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.LTE),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.GT),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.GTE),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.VERSION_LT),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.VERSION_LTE),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.VERSION_GT),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.VERSION_GTE),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.VERSION_EQ),
            targetValue: SingleValue(targetValue),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.ON),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.AFTER),
            targetValue: zod_1.z.number(),
            field: field,
        }),
        zod_1.z.object({
            operator: zod_1.z.literal(ConfigSpecs_1.APIOperatorType.BEFORE),
            targetValue: zod_1.z.number(),
            field: field,
        }),
    ])
        .refine(function (data) { return operators.safeParse(data.operator).success; });
}
var ConfigConditionType;
(function (ConfigConditionType) {
    ConfigConditionType["PUBLIC"] = "public";
    ConfigConditionType["CUSTOM_FIELD"] = "custom_field";
    ConfigConditionType["EMAIL"] = "email";
    ConfigConditionType["LOCALE"] = "locale";
    ConfigConditionType["UNIT_ID"] = "unit_id";
    ConfigConditionType["USER_ID"] = "user_id";
})(ConfigConditionType || (exports.ConfigConditionType = ConfigConditionType = {}));
var ConfigCondition = /** @class */ (function () {
    function ConfigCondition() {
    }
    // Schematized for SDK evaluation
    ConfigCondition.prototype.getAPICondition = function () {
        return {
            type: this.getAPIConditionType(),
            targetValue: this.getTargetValue(),
            operator: this.getOperator(),
            field: this.getField(),
            additionalValues: null,
            idType: this.getIDType(),
        };
    };
    // Schematized for storage
    ConfigCondition.prototype.getConditionJSON = function () {
        return {
            type: this.getConfigConditionType(),
            targetValue: this.getTargetValue(),
            operator: this.getOperator(),
            field: this.getField(),
        };
    };
    return ConfigCondition;
}());
exports.default = ConfigCondition;
