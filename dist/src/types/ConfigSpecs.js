"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIOperatorType = exports.APIFieldName = exports.APIConditionType = exports.APIEntityType = exports.APIConfigType = void 0;
var APIConfigType;
(function (APIConfigType) {
    APIConfigType["DYNAMIC_CONFIG"] = "dynamic_config";
    APIConfigType["FEATURE_GATE"] = "feature_gate";
})(APIConfigType || (exports.APIConfigType = APIConfigType = {}));
var APIEntityType;
(function (APIEntityType) {
    APIEntityType["AUTOTUNE"] = "autotune";
    APIEntityType["DYNAMIC_CONFIG"] = "dynamic_config";
    APIEntityType["EXPERIMENT"] = "experiment";
    APIEntityType["FEATURE_GATE"] = "feature_gate";
    APIEntityType["HOLDOUT"] = "holdout";
    APIEntityType["LAYER"] = "layer";
    APIEntityType["SEGMENT"] = "segment";
})(APIEntityType || (exports.APIEntityType = APIEntityType = {}));
var APIConditionType;
(function (APIConditionType) {
    APIConditionType["FALLBACK"] = "fallback";
    APIConditionType["PUBLIC"] = "public";
    APIConditionType["IP_BASED"] = "ip_based";
    APIConditionType["UA_BASED"] = "ua_based";
    APIConditionType["USER_FIELD"] = "user_field";
    APIConditionType["PASS_GATE"] = "pass_gate";
    APIConditionType["FAIL_GATE"] = "fail_gate";
    APIConditionType["CURRENT_TIME"] = "current_time";
    APIConditionType["ENVIRONMENT_FIELD"] = "environment_field";
    APIConditionType["USER_BUCKET"] = "user_bucket";
    APIConditionType["UNIT_ID"] = "unit_id";
    APIConditionType["JAVASCRIPT"] = "javascript";
    APIConditionType["MULTI_PASS_GATE"] = "multi_pass_gate";
    APIConditionType["MULTI_FAIL_GATE"] = "multi_fail_gate";
    APIConditionType["USER_BUCKET_ENCODED"] = "user_bucket_encoded";
})(APIConditionType || (exports.APIConditionType = APIConditionType = {}));
var APIFieldName;
(function (APIFieldName) {
    APIFieldName["BROWSER_NAME"] = "browser_name";
    APIFieldName["BROWSER_VERSION"] = "browser_version";
    APIFieldName["OS_NAME"] = "os_name";
    APIFieldName["OS_VERSION"] = "os_version";
    // user data fields
    APIFieldName["APP_VERISON"] = "appVersion";
    APIFieldName["COUNTRY"] = "country";
    APIFieldName["EMAIL"] = "email";
    APIFieldName["USER_ID"] = "userID";
    APIFieldName["IP"] = "ip";
    APIFieldName["LOCALE"] = "locale";
    // environment fields
    APIFieldName["TIER"] = "tier";
})(APIFieldName || (exports.APIFieldName = APIFieldName = {}));
var APIOperatorType;
(function (APIOperatorType) {
    APIOperatorType["ANY"] = "any";
    APIOperatorType["NONE"] = "none";
    APIOperatorType["GT"] = "gt";
    APIOperatorType["LT"] = "lt";
    APIOperatorType["LTE"] = "lte";
    APIOperatorType["GTE"] = "gte";
    APIOperatorType["VERSION_GT"] = "version_gt";
    APIOperatorType["VERSION_LT"] = "version_lt";
    APIOperatorType["VERSION_EQ"] = "version_eq";
    APIOperatorType["VERSION_GTE"] = "version_gte";
    APIOperatorType["VERSION_LTE"] = "version_lte";
    APIOperatorType["STR_CONTAINS_ANY"] = "str_contains_any";
    APIOperatorType["STR_CONTAINS_NONE"] = "str_contains_none";
    APIOperatorType["STR_STARTS_WITH_ANY"] = "str_starts_with_any";
    APIOperatorType["STR_ENDS_WITH_ANY"] = "str_ends_with_any";
    APIOperatorType["AFTER"] = "after";
    APIOperatorType["BEFORE"] = "before";
    APIOperatorType["ON"] = "on";
    APIOperatorType["IN_SEGMENT_LIST"] = "in_segment_list";
    APIOperatorType["NOT_IN_SEGMENT_LIST"] = "not_in_segment_list";
    APIOperatorType["EQ"] = "eq";
    APIOperatorType["NEQ"] = "neq";
    APIOperatorType["STR_MATCHES"] = "str_matches";
    APIOperatorType["ENCODED_ANY"] = "encoded_any";
})(APIOperatorType || (exports.APIOperatorType = APIOperatorType = {}));
