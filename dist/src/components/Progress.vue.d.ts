import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    barTag: {
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
    height: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    barTag: {
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
    height: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}>>, {
    value: number;
    tag: string;
    height: string;
    min: number;
    striped: boolean;
    max: number;
    showValue: boolean;
    animated: boolean;
    barTag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=Progress.vue.d.ts.map