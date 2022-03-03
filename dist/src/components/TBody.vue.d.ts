import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    align: {
        type: PropType<string>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | ColorVariants;
        "table-active": boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    align: {
        type: PropType<string>;
        default: any;
    };
}>>, {
    variant: ColorVariants;
    active: boolean;
    align: string;
}>;
export default _default;
//# sourceMappingURL=TBody.vue.d.ts.map