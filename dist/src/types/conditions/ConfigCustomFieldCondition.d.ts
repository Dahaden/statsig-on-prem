import { APIConditionType, APIFieldName, APIOperatorType } from "../ConfigSpecs";
import ConfigCondition, { ConfigConditionType } from "./ConfigCondition";
import { z } from "zod";
import { OmitUndefined } from "../../utils/types";
declare const AllowedOperators: z.ZodUnion<[z.ZodLiteral<APIOperatorType.ANY>, z.ZodLiteral<APIOperatorType.NONE>, z.ZodLiteral<APIOperatorType.EQ>, z.ZodLiteral<APIOperatorType.NEQ>, z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>, z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>, z.ZodLiteral<APIOperatorType.STR_STARTS_WITH_ANY>, z.ZodLiteral<APIOperatorType.STR_ENDS_WITH_ANY>, z.ZodLiteral<APIOperatorType.LT>, z.ZodLiteral<APIOperatorType.LTE>, z.ZodLiteral<APIOperatorType.GT>, z.ZodLiteral<APIOperatorType.GTE>, z.ZodLiteral<APIOperatorType.VERSION_LT>, z.ZodLiteral<APIOperatorType.VERSION_LTE>, z.ZodLiteral<APIOperatorType.VERSION_GT>, z.ZodLiteral<APIOperatorType.VERSION_GTE>, z.ZodLiteral<APIOperatorType.VERSION_EQ>, z.ZodLiteral<APIOperatorType.ON>, z.ZodLiteral<APIOperatorType.AFTER>, z.ZodLiteral<APIOperatorType.BEFORE>, z.ZodLiteral<APIOperatorType.STR_MATCHES>]>;
declare const AllowedValues: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>;
export declare const CustomFieldConditionInputSchema: z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.ANY;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.ANY;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.NONE;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.NONE;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.EQ;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.EQ;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.NEQ;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.NEQ;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field: string;
}, {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field: string;
}, {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field: string;
}, {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.LT;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.LT;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.GT;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.GT;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_LT;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.VERSION_LT;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_LTE;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.VERSION_LTE;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_GT;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.VERSION_GT;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_GTE;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.VERSION_GTE;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_EQ;
    field: string;
    targetValue?: any;
}, {
    operator: APIOperatorType.VERSION_EQ;
    field: string;
    targetValue?: any;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.ON;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.ON;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field: string;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodNativeEnum<typeof APIFieldName>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field: string;
}, {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field: string;
}>]>, {
    operator: APIOperatorType.ANY | APIOperatorType.NONE | APIOperatorType.GT | APIOperatorType.LT | APIOperatorType.LTE | APIOperatorType.GTE | APIOperatorType.VERSION_GT | APIOperatorType.VERSION_LT | APIOperatorType.VERSION_EQ | APIOperatorType.VERSION_GTE | APIOperatorType.VERSION_LTE | APIOperatorType.STR_CONTAINS_ANY | APIOperatorType.STR_CONTAINS_NONE | APIOperatorType.STR_STARTS_WITH_ANY | APIOperatorType.STR_ENDS_WITH_ANY | APIOperatorType.AFTER | APIOperatorType.BEFORE | APIOperatorType.ON | APIOperatorType.EQ | APIOperatorType.NEQ | APIOperatorType.STR_MATCHES;
    targetValue: string | number | string[] | number[] | null;
    field: string;
}, {
    operator: APIOperatorType.ANY;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.NONE;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.EQ;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.NEQ;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field: string;
} | {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field: string;
} | {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field: string;
} | {
    operator: APIOperatorType.LT;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.GT;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.VERSION_LT;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.VERSION_LTE;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.VERSION_GT;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.VERSION_GTE;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.VERSION_EQ;
    field: string;
    targetValue?: any;
} | {
    operator: APIOperatorType.ON;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field: string;
} | {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field: string;
}>;
export type CustomFieldConditionInput = OmitUndefined<z.infer<typeof CustomFieldConditionInputSchema>>;
export default class ConfigCustomFieldCondition extends ConfigCondition {
    protected operator: z.infer<typeof AllowedOperators>;
    protected targetValue: z.infer<typeof AllowedValues>;
    protected field: APIFieldName | string;
    constructor(input: CustomFieldConditionInput);
    getConfigConditionType(): ConfigConditionType;
    getAPIConditionType(): APIConditionType;
    getIDType(): string;
    getOperator(): APIOperatorType;
    getField(): APIFieldName | string;
    getTargetValue(): string | string[] | number | number[] | null;
}
export {};
