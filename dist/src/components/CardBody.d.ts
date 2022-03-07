import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { textVariants } from "../types/textVariants";
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
    overlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    subTitle: {
        type: PropType<string>;
        default: any;
    };
    subTitleTag: {
        type: PropType<string>;
        default: string;
    };
    subTitleTextVariant: {
        type: PropType<ColorVariants | textVariants>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
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
    overlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    subTitle: {
        type: PropType<string>;
        default: any;
    };
    subTitleTag: {
        type: PropType<string>;
        default: string;
    };
    subTitleTextVariant: {
        type: PropType<ColorVariants | textVariants>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
}>>, {
    title: string;
    tag: keyof HTMLElementTagNameMap;
    variant: ColorVariants;
    content: string;
    overlay: boolean;
    borderVariant: ColorVariants;
    textVariant: ColorVariants;
    subTitle: string;
    subTitleTag: string;
    subTitleTextVariant: ColorVariants | textVariants;
    titleTag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=CardBody.d.ts.map