import { PropType } from "vue";
import { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<string>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        default: any;
    };
    value: {
        default: boolean;
    };
    uncheckedValue: {
        default: boolean;
    };
    switch: {
        type: PropType<boolean>;
        default: boolean;
    };
    button: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    outline: {
        type: PropType<boolean>;
        default: boolean;
    };
    checked: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    identifier: any;
    model: any;
    classes: import("vue").ComputedRef<(string | {
        "form-switch": boolean;
        "form-check-inline": boolean;
    })[]>;
    btnClass: import("vue").ComputedRef<(string | {
        [x: string]: ColorVariants;
    })[]>;
    inputAttrs: import("vue").Ref<{
        role: string;
    }>;
    valueChanged: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "checked" | "unchecked")[], "update:modelValue" | "checked" | "unchecked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: PropType<string>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        default: any;
    };
    value: {
        default: boolean;
    };
    uncheckedValue: {
        default: boolean;
    };
    switch: {
        type: PropType<boolean>;
        default: boolean;
    };
    button: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    outline: {
        type: PropType<boolean>;
        default: boolean;
    };
    checked: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChecked?: (...args: any[]) => any;
    onUnchecked?: (...args: any[]) => any;
}, {
    value: boolean;
    name: string;
    modelValue: any;
    required: boolean;
    button: boolean;
    id: string;
    disabled: boolean;
    variant: ColorVariants;
    outline: boolean;
    checked: boolean;
    readonly: boolean;
    inline: boolean;
    uncheckedValue: boolean;
    switch: boolean;
}>;
export default _default;
//# sourceMappingURL=Checkbox.vue.d.ts.map