import { PropType } from "vue";
import type { colAlignments, ColSizes, justifyContentAlignments } from "../types/responsiveLayoutSizes";
import { responsiveNumbers } from "../types/responsiveLayoutSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    cols: {
        type: PropType<ColSizes>;
        default: any;
    };
    sm: {
        type: PropType<ColSizes>;
        default: any;
    };
    md: {
        type: PropType<ColSizes>;
        default: any;
    };
    lg: {
        type: PropType<ColSizes>;
        default: any;
    };
    xl: {
        type: PropType<ColSizes>;
        default: any;
    };
    alignItems: {
        type: PropType<colAlignments>;
        default: any;
    };
    justifyContent: {
        type: PropType<justifyContentAlignments>;
        default: any;
    };
    g: {
        type: PropType<ColSizes>;
        default: any;
    };
    gSm: {
        type: PropType<ColSizes>;
        default: any;
    };
    gMd: {
        type: PropType<ColSizes>;
        default: any;
    };
    gLg: {
        type: PropType<ColSizes>;
        default: any;
    };
    gXl: {
        type: PropType<ColSizes>;
        default: any;
    };
    gx: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    gy: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    cols: {
        type: PropType<ColSizes>;
        default: any;
    };
    sm: {
        type: PropType<ColSizes>;
        default: any;
    };
    md: {
        type: PropType<ColSizes>;
        default: any;
    };
    lg: {
        type: PropType<ColSizes>;
        default: any;
    };
    xl: {
        type: PropType<ColSizes>;
        default: any;
    };
    alignItems: {
        type: PropType<colAlignments>;
        default: any;
    };
    justifyContent: {
        type: PropType<justifyContentAlignments>;
        default: any;
    };
    g: {
        type: PropType<ColSizes>;
        default: any;
    };
    gSm: {
        type: PropType<ColSizes>;
        default: any;
    };
    gMd: {
        type: PropType<ColSizes>;
        default: any;
    };
    gLg: {
        type: PropType<ColSizes>;
        default: any;
    };
    gXl: {
        type: PropType<ColSizes>;
        default: any;
    };
    gx: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    gy: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
}>>, {
    g: ColSizes;
    sm: ColSizes;
    lg: ColSizes;
    md: ColSizes;
    xl: ColSizes;
    tag: keyof HTMLElementTagNameMap;
    justifyContent: justifyContentAlignments;
    gx: 0 | responsiveNumbers;
    gy: 0 | responsiveNumbers;
    cols: ColSizes;
    alignItems: colAlignments;
    gSm: ColSizes;
    gMd: ColSizes;
    gLg: ColSizes;
    gXl: ColSizes;
}>;
export default _default;
//# sourceMappingURL=Row.d.ts.map