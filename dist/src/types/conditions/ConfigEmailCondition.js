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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConditionInputSchema = void 0;
var ConfigSpecs_1 = require("../ConfigSpecs");
var ConfigCondition_1 = __importStar(require("./ConfigCondition"));
var zod_1 = require("zod");
var AllowedOperators = zod_1.z.union([
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.ANY),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.NONE),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.EQ),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.NEQ),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_CONTAINS_ANY),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_CONTAINS_NONE),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_STARTS_WITH_ANY),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_ENDS_WITH_ANY),
    zod_1.z.literal(ConfigSpecs_1.APIOperatorType.STR_MATCHES),
]);
var AllowedValues = zod_1.z.union([zod_1.z.string(), zod_1.z.string().array(), zod_1.z.null()]);
var AllowedFields = zod_1.z.union([
    zod_1.z.undefined() /* From input */,
    zod_1.z.literal(ConfigSpecs_1.APIFieldName.EMAIL) /* From JSON */,
]);
exports.EmailConditionInputSchema = (0, ConfigCondition_1.SupportedOperations)(AllowedOperators, AllowedValues, AllowedFields);
var ConfigEmailCondition = /** @class */ (function (_super) {
    __extends(ConfigEmailCondition, _super);
    function ConfigEmailCondition(input) {
        var _this = _super.call(this) || this;
        exports.EmailConditionInputSchema.safeParse(input);
        _this.operator = input.operator;
        _this.targetValue = input.targetValue;
        return _this;
    }
    ConfigEmailCondition.prototype.getConfigConditionType = function () {
        return ConfigCondition_1.ConfigConditionType.EMAIL;
    };
    ConfigEmailCondition.prototype.getAPIConditionType = function () {
        return ConfigSpecs_1.APIConditionType.USER_FIELD;
    };
    ConfigEmailCondition.prototype.getIDType = function () {
        return "userID";
    };
    ConfigEmailCondition.prototype.getOperator = function () {
        return this.operator;
    };
    ConfigEmailCondition.prototype.getField = function () {
        return ConfigSpecs_1.APIFieldName.EMAIL;
    };
    ConfigEmailCondition.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    return ConfigEmailCondition;
}(ConfigCondition_1.default));
exports.default = ConfigEmailCondition;
