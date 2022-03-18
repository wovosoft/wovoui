import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    isNav: {
        type: PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    menuTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: PropType<import("../types/buttonSizes").buttonSizes>;
        default: any;
    };
    text: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    splitVariant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    dir: {
        type: PropType<import("../types/dropdownDirections").dropdownDirections>;
        default: string;
    };
    align: {
        type: PropType<import("../types/dropdownAlignments").dropdownAlignments>;
        default: string;
    };
    menuDark: {
        type: PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: PropType<string | object | any[]>;
        default: () => any[];
    };
    split: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableInnerClicks: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isNav: {
        type: PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    menuTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: PropType<import("../types/buttonSizes").buttonSizes>;
        default: any;
    };
    text: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    splitVariant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    dir: {
        type: PropType<import("../types/dropdownDirections").dropdownDirections>;
        default: string;
    };
    align: {
        type: PropType<import("../types/dropdownAlignments").dropdownAlignments>;
        default: string;
    };
    menuDark: {
        type: PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: PropType<string | object | any[]>;
        default: () => any[];
    };
    split: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableInnerClicks: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    size: import("../types/buttonSizes").buttonSizes;
    split: boolean;
    text: string;
    dir: import("../types/dropdownDirections").dropdownDirections;
    tag: keyof HTMLElementTagNameMap;
    toggleTag: keyof HTMLElementTagNameMap;
    isNav: boolean;
    disabled: boolean;
    variant: import("../types/colorVariants").ColorVariants;
    block: boolean;
    align: import("../types/dropdownAlignments").dropdownAlignments;
    menuTag: keyof HTMLElementTagNameMap;
    splitVariant: import("../types/colorVariants").ColorVariants;
    menuDark: boolean;
    menuClass: string | object | any[];
    disableInnerClicks: boolean;
}>;
export default _default;
//# sourceMappingURL=NavItemDropdown.vue.d.ts.map