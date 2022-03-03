import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: any;
    };
    plain: {
        type: PropType<boolean>;
        default: boolean;
    };
    state: {
        type: PropType<boolean>;
        default: any;
    };
    modelValue: {
        type: PropType<string | number>;
        default: any;
    };
}, {
    attributes: import("vue").Ref<{}>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "form-range": boolean;
        "is-valid": boolean;
        "is-invalid": boolean;
        "form-control-color": boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: any;
    };
    plain: {
        type: PropType<boolean>;
        default: boolean;
    };
    state: {
        type: PropType<boolean>;
        default: any;
    };
    modelValue: {
        type: PropType<string | number>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    size: string;
    modelValue: string | number;
    type: string;
    plain: boolean;
    state: boolean;
}>;
export default _default;
//# sourceMappingURL=Input.vue.d.ts.map