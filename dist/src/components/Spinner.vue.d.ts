import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    grow: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: ColorVariants | buttonSizes;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    grow: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}>>, {
    size: buttonSizes;
    variant: ColorVariants;
    grow: boolean;
}>;
export default _default;
//# sourceMappingURL=Spinner.vue.d.ts.map