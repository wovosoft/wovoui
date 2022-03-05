import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    dismissLabel: {
        type: PropType<string>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    dismissible: {
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
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    countdown: {
        type: PropType<null>;
        default: any;
    };
    countdownStep: {
        type: PropType<number>;
        default: number;
    };
}, {
    timeoutNow: import("vue").Ref<number>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
        "alert-dismissible": boolean;
    })[]>;
    visible: import("vue").Ref<boolean>;
    show: () => boolean;
    hide: () => boolean;
    toggle: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:show" | "dismissed" | "countdown")[], "update:modelValue" | "update:show" | "dismissed" | "countdown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    dismissLabel: {
        type: PropType<string>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    dismissible: {
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
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    countdown: {
        type: PropType<null>;
        default: any;
    };
    countdownStep: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:show"?: (...args: any[]) => any;
    onDismissed?: (...args: any[]) => any;
    onCountdown?: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: boolean;
    countdown: null;
    dismissLabel: string;
    variant: ColorVariants;
    dismissible: boolean;
    fade: boolean;
    show: boolean;
    countdownStep: number;
}>;
export default _default;
//# sourceMappingURL=Alert.vue.d.ts.map