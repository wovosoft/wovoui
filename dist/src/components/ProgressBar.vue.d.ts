import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    value: {
        type: PropType<number>;
        default: number;
    };
    min: {
        type: PropType<number>;
        default: number;
    };
    max: {
        type: PropType<number>;
        default: number;
    };
    showValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    striped: {
        type: PropType<boolean>;
        default: boolean;
    };
    animated: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariants;
        "progress-bar-striped": boolean;
        "progress-bar-animated": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    value: {
        type: PropType<number>;
        default: number;
    };
    min: {
        type: PropType<number>;
        default: number;
    };
    max: {
        type: PropType<number>;
        default: number;
    };
    showValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    striped: {
        type: PropType<boolean>;
        default: boolean;
    };
    animated: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}>>, {
    value: number;
    min: number;
    max: number;
    tag: keyof HTMLElementTagNameMap;
    striped: boolean;
    showValue: boolean;
    animated: boolean;
}>;
export default _default;
//# sourceMappingURL=ProgressBar.vue.d.ts.map