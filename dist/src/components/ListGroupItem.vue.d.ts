import { PropType } from "vue";
import { ColorVariants } from "../types/colorVariants";
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
    attributes: import("vue").Ref<{}>;
    theTag: import("vue").Ref<string>;
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
    tag: string;
    button: boolean;
    disabled: boolean;
    variant: ColorVariants;
    href: string;
    active: boolean;
    to: any;
}>;
export default _default;
//# sourceMappingURL=ListGroupItem.vue.d.ts.map