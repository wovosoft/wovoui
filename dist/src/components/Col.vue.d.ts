import { PropType } from "vue";
import type { colAlignments, colOrders, justifyContentAlignments, responsiveNumbers } from "../types/responsiveLayoutSizes.js";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    col: {
        type: PropType<string | number>;
        default: any;
    };
    sm: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    md: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    lg: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    xl: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    alignSelf: {
        type: PropType<colAlignments>;
        default: any;
    };
    justifyContent: {
        type: PropType<justifyContentAlignments>;
        default: any;
    };
    order: {
        type: PropType<colOrders>;
        default: any;
    };
    offsetSm: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetMd: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetLg: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetXl: {
        type: PropType<0 | responsiveNumbers>;
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
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: string | number | boolean;
        col: boolean;
        "col-sm": boolean;
        "col-md": boolean;
        "col-lg": boolean;
        "col-xl": boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    col: {
        type: PropType<string | number>;
        default: any;
    };
    sm: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    md: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    lg: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    xl: {
        type: PropType<string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
        default: any;
    };
    alignSelf: {
        type: PropType<colAlignments>;
        default: any;
    };
    justifyContent: {
        type: PropType<justifyContentAlignments>;
        default: any;
    };
    order: {
        type: PropType<colOrders>;
        default: any;
    };
    offsetSm: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetMd: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetLg: {
        type: PropType<0 | responsiveNumbers>;
        default: any;
    };
    offsetXl: {
        type: PropType<0 | responsiveNumbers>;
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
    tag: string;
    sm: string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg: string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    col: string | number;
    md: string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: string | boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    alignSelf: colAlignments;
    justifyContent: justifyContentAlignments;
    order: colOrders;
    offsetSm: 0 | responsiveNumbers;
    offsetMd: 0 | responsiveNumbers;
    offsetLg: 0 | responsiveNumbers;
    offsetXl: 0 | responsiveNumbers;
    gx: 0 | responsiveNumbers;
    gy: 0 | responsiveNumbers;
}>;
export default _default;
//# sourceMappingURL=Col.vue.d.ts.map