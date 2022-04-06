import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
        type: PropType<string | number>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
        type: PropType<string | number>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
    };
}>>, {
    value: number;
    height: string | number;
    min: number;
    max: number;
    tag: keyof HTMLElementTagNameMap;
    striped: boolean;
    barTag: keyof HTMLElementTagNameMap;
    showValue: boolean;
    animated: boolean;
}>;
export default _default;
//# sourceMappingURL=Progress.d.ts.map