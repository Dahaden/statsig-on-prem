import { APIConditionType, APIConfigCondition, APIFieldName, APIOperatorType } from "../ConfigSpecs";
import { z } from "zod";
export declare function SupportedOperations<O extends z.ZodTypeAny, V extends z.ZodTypeAny, F extends z.ZodTypeAny>(operators: O, targetValue: V, field: F): z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_2 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_2]; }, { [k_1_1 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_1]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_3 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_3]; }, { [k_1_2 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_2]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_4 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_4]; }, { [k_1_3 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_3]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}, "strip", z.ZodTypeAny, { [k_5 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>, any>[k_5]; }, { [k_1_4 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>[k_1_4]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}, "strip", z.ZodTypeAny, { [k_6 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>, any>[k_6]; }, { [k_1_5 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>[k_1_5]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}, "strip", z.ZodTypeAny, { [k_7 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>, any>[k_7]; }, { [k_1_6 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>[k_1_6]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_8 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_8]; }, { [k_1_7 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_7]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_9 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_9]; }, { [k_1_8 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_8]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_10 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_10]; }, { [k_1_9 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_9]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_11 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_11]; }, { [k_1_10 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_10]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_12 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_12]; }, { [k_1_11 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_11]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_13 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_13]; }, { [k_1_12 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_12]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_14 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_14]; }, { [k_1_13 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_13]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_15 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_15]; }, { [k_1_14 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_14]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}, "strip", z.ZodTypeAny, { [k_16 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>, any>[k_16]; }, { [k_1_15 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_15]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_17 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_17]; }, { [k_1_16 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_16]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_18 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_18]; }, { [k_1_17 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_17]; }>, z.ZodObject<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}, "strip", z.ZodTypeAny, { [k_19 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>, any>[k_19]; }, { [k_1_18 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_18]; }>]>, {
    operator: z.infer<typeof operators>;
    targetValue: z.infer<typeof targetValue>;
    field: z.infer<typeof field>;
}, { [k_1 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ANY>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1]; } | { [k_1_1 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NONE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_1]; } | { [k_1_2 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_2]; } | { [k_1_3 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.NEQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_3]; } | { [k_1_4 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_ANY>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>[k_1_4]; } | { [k_1_5 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_CONTAINS_NONE>;
    targetValue: z.ZodArray<z.ZodString, "many">;
    field: F;
}>[k_1_5]; } | { [k_1_6 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.STR_MATCHES>;
    targetValue: z.ZodString;
    field: F;
}>[k_1_6]; } | { [k_1_7 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LT>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_7]; } | { [k_1_8 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.LTE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_8]; } | { [k_1_9 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GT>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_9]; } | { [k_1_10 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.GTE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_10]; } | { [k_1_11 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_11]; } | { [k_1_12 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_LTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_12]; } | { [k_1_13 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GT>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_13]; } | { [k_1_14 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_GTE>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_14]; } | { [k_1_15 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.VERSION_EQ>;
    targetValue: z.ZodEffects<V, any, any>;
    field: F;
}>[k_1_15]; } | { [k_1_16 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.ON>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_16]; } | { [k_1_17 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.AFTER>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_17]; } | { [k_1_18 in keyof z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>]: z.baseObjectInputType<{
    operator: z.ZodLiteral<APIOperatorType.BEFORE>;
    targetValue: z.ZodNumber;
    field: F;
}>[k_1_18]; }>;
export declare enum ConfigConditionType {
    PUBLIC = "public",
    CUSTOM_FIELD = "custom_field",
    EMAIL = "email",
    LOCALE = "locale",
    UNIT_ID = "unit_id",
    USER_ID = "user_id"
}
export type ConfigConditionJSON = {
    type: ConfigConditionType;
    operator: APIOperatorType | null;
    field: string | APIFieldName | null;
    targetValue: string[] | number[] | string | number | null;
};
export default abstract class ConfigCondition {
    abstract getConfigConditionType(): ConfigConditionType;
    abstract getAPIConditionType(): APIConditionType;
    abstract getIDType(): string;
    abstract getOperator(): APIOperatorType | null;
    abstract getField(): APIFieldName | string | null;
    abstract getTargetValue(): string[] | number[] | string | number | null;
    getAPICondition(): APIConfigCondition;
    getConditionJSON(): ConfigConditionJSON;
}
