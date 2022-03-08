import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    fade: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<boolean>;
        default: any;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    bodyClass: {
        type: PropType<string | object>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    container: {
        type: PropType<string>;
        default: any;
    };
}, {
    visible: import("vue").Ref<boolean>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariants;
        show: boolean;
        fade: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:show")[], "update:modelValue" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    fade: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<boolean>;
        default: any;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    bodyClass: {
        type: PropType<string | object>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    container: {
        type: PropType<string>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:show"?: (...args: any[]) => any;
}, {
    header: string;
    modelValue: boolean;
    bodyClass: string | object;
    variant: ColorVariants;
    fade: boolean;
    show: boolean;
    noBody: boolean;
    noCloseButton: boolean;
    container: string;
}>;
export default _default;
//# sourceMappingURL=Toast.vue.d.ts.map