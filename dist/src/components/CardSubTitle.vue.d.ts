import { PropType } from "vue";
import { ColorVariants } from "../types/colorVariants";
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
        type: PropType<ColorVariants>;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: any;
    };
    tag: {
        type: PropType<string>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
}>>, {
    tag: string;
    title: string;
    textVariant: ColorVariants;
}>;
export default _default;
//# sourceMappingURL=CardSubTitle.vue.d.ts.map