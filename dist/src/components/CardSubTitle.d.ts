import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { textVariants } from "../types/textVariants";
declare const _default: import("vue").DefineComponent<{
    title: {
        type: PropType<string>;
        default: any;
    };
    tag: {
        type: PropType<string>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants | textVariants>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: any;
    };
    tag: {
        type: PropType<string>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants | textVariants>;
        default: string;
    };
}>>, {
    title: string;
    tag: string;
    textVariant: ColorVariants | textVariants;
}>;
export default _default;
//# sourceMappingURL=CardSubTitle.d.ts.map