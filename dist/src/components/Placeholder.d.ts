import { PropType } from "vue";
import type { responsiveNumbers } from "../types/responsiveLayoutSizes";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    glow: {
        type: PropType<boolean>;
        default: boolean;
    };
    wave: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "lg" | "xs">;
        default: any;
    };
    col: {
        type: PropType<responsiveNumbers>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    glow: {
        type: PropType<boolean>;
        default: boolean;
    };
    wave: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "lg" | "xs">;
        default: any;
    };
    col: {
        type: PropType<responsiveNumbers>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}>>, {
    size: "sm" | "lg" | "xs";
    col: responsiveNumbers;
    tag: keyof HTMLElementTagNameMap;
    variant: ColorVariants;
    glow: boolean;
    wave: boolean;
}>;
export default _default;
//# sourceMappingURL=Placeholder.d.ts.map