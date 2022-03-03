interface Attributes {
    disabled: Boolean;
    ariaPressed: Boolean;
    autocomplete: string | null;
}
import { PropType } from "vue";
import { ColorVariants, TrueFalse } from "../types";
import { badgePositions } from "../types/badgePositions";
import { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: () => string;
    };
    size: {
        type: PropType<buttonSizes>;
        default: () => any;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    outline: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    block: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    pill: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    squared: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    disabled: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    pressed: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    badge: {
        type: PropType<string | number>;
        default: any;
    };
    badePosition: {
        type: PropType<badgePositions>;
        default: () => any;
    };
    badgeVariant: {
        type: PropType<ColorVariants>;
        default: () => string;
    };
    active: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}, {
    attributes: Attributes;
    theType: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: TrueFalse;
        'w-100': TrueFalse;
        'rounded-pill': TrueFalse;
        'rounded-0': TrueFalse;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: () => string;
    };
    size: {
        type: PropType<buttonSizes>;
        default: () => any;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    outline: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    block: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    pill: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    squared: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    disabled: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    pressed: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    badge: {
        type: PropType<string | number>;
        default: any;
    };
    badePosition: {
        type: PropType<badgePositions>;
        default: () => any;
    };
    badgeVariant: {
        type: PropType<ColorVariants>;
        default: () => string;
    };
    active: {
        type: PropType<TrueFalse>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    size: buttonSizes;
    tag: string;
    type: string;
    disabled: TrueFalse;
    variant: ColorVariants;
    href: string;
    pill: TrueFalse;
    badge: string | number;
    active: TrueFalse;
    activeClass: string;
    outline: TrueFalse;
    block: TrueFalse;
    squared: TrueFalse;
    pressed: TrueFalse;
    badePosition: badgePositions;
    badgeVariant: ColorVariants;
}>;
export default _default;
//# sourceMappingURL=Button.vue.d.ts.map