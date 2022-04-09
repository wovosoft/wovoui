import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
    tabindex: {
        type: PropType<string | number>;
        default: number;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<any[]>;
        default: () => any[];
    };
    removeOnDelete: {
        type: PropType<boolean>;
        default: boolean;
    };
    separator: {
        type: PropType<any[]>;
        default: () => any[];
    };
    tagPills: {
        type: PropType<boolean>;
        default: boolean;
    };
    tagVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    addButtonSize: {
        type: PropType<buttonSizes>;
        default: string;
    };
    addButtonText: {
        type: PropType<string>;
        default: string;
    };
    noAddOnEnter: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    model: import("vue").Ref<any[]>;
    inputText: any;
    addTag: (e: any) => void;
    backspacePressed: (e: any) => void;
    classes: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
    tabindex: {
        type: PropType<string | number>;
        default: number;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<any[]>;
        default: () => any[];
    };
    removeOnDelete: {
        type: PropType<boolean>;
        default: boolean;
    };
    separator: {
        type: PropType<any[]>;
        default: () => any[];
    };
    tagPills: {
        type: PropType<boolean>;
        default: boolean;
    };
    tagVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    addButtonSize: {
        type: PropType<buttonSizes>;
        default: string;
    };
    addButtonText: {
        type: PropType<string>;
        default: string;
    };
    noAddOnEnter: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    placeholder: string;
    separator: any[];
    tag: keyof HTMLElementTagNameMap;
    modelValue: any[];
    role: string;
    tabindex: string | number;
    removeOnDelete: boolean;
    tagPills: boolean;
    tagVariant: ColorVariants;
    addButtonSize: buttonSizes;
    addButtonText: string;
    noAddOnEnter: boolean;
}>;
export default _default;
//# sourceMappingURL=Tags.vue.d.ts.map