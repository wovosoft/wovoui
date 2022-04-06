import type { ColorVariants } from "../types/colorVariants";
import { PropType } from "vue";
import type { badgePositions } from "../types/badgePositions";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
        type: PropType<boolean>;
        default: boolean;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: PropType<boolean>;
        default: boolean;
    };
    squared: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    pressed: {
        type: PropType<boolean>;
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
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
        type: PropType<boolean>;
        default: boolean;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: PropType<boolean>;
        default: boolean;
    };
    squared: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    pressed: {
        type: PropType<boolean>;
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
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    size: buttonSizes;
    type: string;
    active: boolean;
    href: string;
    disabled: boolean;
    block: boolean;
    tag: keyof HTMLElementTagNameMap;
    variant: ColorVariants;
    activeClass: string;
    badge: string | number;
    pill: boolean;
    outline: boolean;
    squared: boolean;
    pressed: boolean;
    badePosition: badgePositions;
    badgeVariant: ColorVariants;
}>;
export default _default;
//# sourceMappingURL=Button.d.ts.map