import { PropType } from "vue";
import { badgePositions } from "../types/badgePositions";
import { ColorVariants } from "../types/colorVariants";
import { Binary } from "../types/Binary";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    pill: {
        type: PropType<Binary>;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: any;
    };
    position: {
        type: PropType<badgePositions>;
        default: any;
    };
}, {
    attributes: {
        href: any;
        target: any;
    };
    classes: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean;
        "rounded-pill": Binary;
        "text-decoration-none": string;
        "position-absolute translate-middle": badgePositions;
        "start-100 top-0": boolean;
        "start-0 top-0": boolean;
        "start-0 top-100": boolean;
        "start-100 top-100": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    pill: {
        type: PropType<Binary>;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: any;
    };
    position: {
        type: PropType<badgePositions>;
        default: any;
    };
}>>, {
    tag: string;
    variant: ColorVariants;
    href: string;
    pill: Binary;
    position: badgePositions;
}>;
export default _default;
//# sourceMappingURL=Badge.vue.d.ts.map