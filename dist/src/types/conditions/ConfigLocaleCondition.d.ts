import { z } from "zod";
import { OmitUndefined } from "../../utils/types";
import { APIConditionType, APIFieldName, APIOperatorType } from "../ConfigSpecs";
import ConfigCondition, { ConfigConditionType } from "./ConfigCondition";
declare const AllowedOperators: z.ZodUnion<[z.ZodLiteral<APIOperatorType.ANY>, z.ZodLiteral<APIOperatorType.NONE>, z.ZodLiteral<APIOperatorType.EQ>, z.ZodLiteral<APIOperatorType.NEQ>, z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>, z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>, z.ZodLiteral<APIOperatorType.STR_STARTS_WITH_ANY>, z.ZodLiteral<APIOperatorType.STR_ENDS_WITH_ANY>, z.ZodLiteral<APIOperatorType.STR_MATCHES>]>;
declare const AllowedValues: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>;
export declare const LocaleConditionInputSchema: z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.ANY;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.ANY;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.NONE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.NONE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.NEQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.NEQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.LT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.LT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.GT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.GT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_LT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.VERSION_LT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_LTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.VERSION_LTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_GT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.VERSION_GT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_GTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.VERSION_GTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNull]>, any, any>;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.VERSION_EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.VERSION_EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.ON;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.ON;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: z.ZodUnion<[z.ZodUndefined, z.ZodLiteral<APIFieldName.LOCALE>]>;
}, "strip", z.ZodTypeAny, {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>]>, {
    operator: APIOperatorType.ANY | APIOperatorType.NONE | APIOperatorType.STR_CONTAINS_ANY | APIOperatorType.STR_CONTAINS_NONE | APIOperatorType.STR_STARTS_WITH_ANY | APIOperatorType.STR_ENDS_WITH_ANY | APIOperatorType.EQ | APIOperatorType.NEQ | APIOperatorType.STR_MATCHES;
    targetValue: string | string[] | null;
    field: APIFieldName.LOCALE | undefined;
}, {
    operator: APIOperatorType.ANY;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.NONE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.NEQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.STR_CONTAINS_ANY;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.STR_CONTAINS_NONE;
    targetValue: string[];
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.STR_MATCHES;
    targetValue: string;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.LT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.LTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.GT;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.GTE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.VERSION_LT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.VERSION_LTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.VERSION_GT;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.VERSION_GTE;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.VERSION_EQ;
    targetValue?: any;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.ON;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.AFTER;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
} | {
    operator: APIOperatorType.BEFORE;
    targetValue: number;
    field?: APIFieldName.LOCALE | undefined;
}>;
export type LocaleConditionInput = OmitUndefined<z.infer<typeof LocaleConditionInputSchema>>;
export default class ConfigLocaleCondition extends ConfigCondition {
    protected operator: z.infer<typeof AllowedOperators>;
    protected targetValue: z.infer<typeof AllowedValues>;
    constructor(input: LocaleConditionInput);
    getConfigConditionType(): ConfigConditionType;
    getAPIConditionType(): APIConditionType;
    getIDType(): string;
    getOperator(): APIOperatorType;
    getField(): string;
    getTargetValue(): string | string[] | null;
}
export {};
