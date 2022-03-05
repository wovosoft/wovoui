import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    content: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    borderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    textVariant: {
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
    content: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    borderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    variant: ColorVariants;
    content: string;
    borderVariant: ColorVariants;
    textVariant: ColorVariants;
}>;
export default _default;
//# sourceMappingURL=CardHeader.d.ts.map