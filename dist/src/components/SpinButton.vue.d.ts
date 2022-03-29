import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { buttonSizes } from "../types/buttonSizes";
declare const _sfc_main: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }>>>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    model: import("vue").Ref<number>;
    updateValue: (type: any) => void;
    classes: import("vue").ComputedRef<(string | {
        inline: any;
    })[]>;
    InputGroup: import("vue").DefineComponent<{
        tag: {
            type: PropType<keyof HTMLElementTagNameMap>;
            default: string;
        };
        size: {
            type: PropType<string>;
            default: any;
        };
        prepend: {
            type: PropType<string>;
            default: any;
        };
        append: {
            type: PropType<string>;
            default: any;
        };
        noWrap: {
            type: PropType<boolean>;
            default: boolean;
        };
    }, {
        classes: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
            "flex-nowrap": boolean;
        })[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: PropType<keyof HTMLElementTagNameMap>;
            default: string;
        };
        size: {
            type: PropType<string>;
            default: any;
        };
        prepend: {
            type: PropType<string>;
            default: any;
        };
        append: {
            type: PropType<string>;
            default: any;
        };
        noWrap: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {
        size: string;
        tag: keyof HTMLElementTagNameMap;
        append: string;
        prepend: string;
        noWrap: boolean;
    }>;
    Button: import("vue").DefineComponent<{
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
            type: PropType<import("../types/badgePositions").badgePositions>;
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
            type: PropType<import("../types/badgePositions").badgePositions>;
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
        tag: keyof HTMLElementTagNameMap;
        type: string;
        disabled: boolean;
        variant: ColorVariants;
        href: string;
        pill: boolean;
        badge: string | number;
        active: boolean;
        activeClass: string;
        outline: boolean;
        block: boolean;
        squared: boolean;
        pressed: boolean;
        badePosition: import("../types/badgePositions").badgePositions;
        badgeVariant: ColorVariants;
    }>;
    Dash: any;
    Plus: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    [x: number]: string;
} | {}>;
export default _sfc_main;
//# sourceMappingURL=SpinButton.vue.d.ts.map