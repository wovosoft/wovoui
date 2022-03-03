import { PropType } from "vue";
import type { colAlignments, ColSizes, justifyContentAlignments, responsiveNumbers } from "../types/responsiveLayoutSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    cols: {
        type: PropType<responsiveNumbers>;
        default: any;
    };
    sm: {
        type: PropType<number | boolean>;
        default: any;
    };
    md: {
        type: PropType<number | boolean>;
        default: any;
    };
    lg: {
        type: PropType<number | boolean>;
        default: any;
    };
    xl: {
        type: PropType<number | boolean>;
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
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: number | boolean | "auto" | "start" | "center" | "end" | "around" | "between" | "evenly";
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    cols: {
        type: PropType<responsiveNumbers>;
        default: any;
    };
    sm: {
        type: PropType<number | boolean>;
        default: any;
    };
    md: {
        type: PropType<number | boolean>;
        default: any;
    };
    lg: {
        type: PropType<number | boolean>;
        default: any;
    };
    xl: {
        type: PropType<number | boolean>;
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
}>>, {
    g: ColSizes;
    tag: keyof HTMLElementTagNameMap;
    sm: number | boolean;
    lg: number | boolean;
    md: number | boolean;
    xl: number | boolean;
    justifyContent: justifyContentAlignments;
    cols: responsiveNumbers;
    alignItems: colAlignments;
    gSm: ColSizes;
    gMd: ColSizes;
    gLg: ColSizes;
    gXl: ColSizes;
}>;
export default _default;
//# sourceMappingURL=Row.vue.d.ts.map