import { PropType, Ref } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    to: {
        default: () => any;
    };
    button: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
        active: boolean;
        disabled: boolean;
        "list-group-item-action": boolean;
    })[]>;
    attributes: Ref<any>;
    theTag: Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    to: {
        default: () => any;
    };
    button: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
}>>, {
    button: boolean;
    active: boolean;
    href: string;
    disabled: boolean;
    to: any;
    tag: string;
    variant: ColorVariants;
}>;
export default _default;
//# sourceMappingURL=ListGroupItem.vue.d.ts.map