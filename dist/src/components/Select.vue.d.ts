import { PropType } from "vue";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    options: {
        type: PropType<any[]>;
        default: () => any[];
    };
    valueField: {
        type: PropType<string | Function>;
        default: any;
    };
    textField: {
        type: PropType<string | Function>;
        default: any;
    };
    disabledField: {
        type: PropType<string>;
        default: string;
    };
    labelField: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        default: any;
    };
}, {
    getEntity: (o: any, k: any) => any;
    isDisabledOption: (o: any) => any;
    model: import("vue").Ref<unknown>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    options: {
        type: PropType<any[]>;
        default: () => any[];
    };
    valueField: {
        type: PropType<string | Function>;
        default: any;
    };
    textField: {
        type: PropType<string | Function>;
        default: any;
    };
    disabledField: {
        type: PropType<string>;
        default: string;
    };
    labelField: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    size: buttonSizes;
    options: any[];
    modelValue: any;
    multiple: boolean;
    valueField: string | Function;
    textField: string | Function;
    disabledField: string;
    labelField: string;
}>;
export default _default;
//# sourceMappingURL=Select.vue.d.ts.map