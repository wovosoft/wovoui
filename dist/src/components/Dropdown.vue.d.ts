declare const _default: import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    menuTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../types/buttonSizes").buttonSizes>;
        default: any;
    };
    text: {
        type: import("vue").PropType<string>;
        default: any;
    };
    variant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    splitVariant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    dir: {
        type: import("vue").PropType<import("../types/dropdownDirections").dropdownDirections>;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("../types/dropdownAlignments").dropdownAlignments>;
        default: string;
    };
    menuDark: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: import("vue").PropType<string | object | any[]>;
        default: () => any[];
    };
    split: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isNav: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        "btn-group": boolean;
        dropdown: boolean;
        dropend: boolean;
        dropstart: boolean;
        dropup: boolean;
    }[]>;
    popperOptions: import("vue").ComputedRef<{
        placement: string;
        modifiers: {
            name: string;
            options: {
                offset: number[];
            };
        }[];
    }>;
}, {
    shouldOpen: boolean;
    toggleAriaExpanded: boolean;
    popperInstance: any;
}, {}, {
    clickOutside(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    menuTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../types/buttonSizes").buttonSizes>;
        default: any;
    };
    text: {
        type: import("vue").PropType<string>;
        default: any;
    };
    variant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    splitVariant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    dir: {
        type: import("vue").PropType<import("../types/dropdownDirections").dropdownDirections>;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("../types/dropdownAlignments").dropdownAlignments>;
        default: string;
    };
    menuDark: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: import("vue").PropType<string | object | any[]>;
        default: () => any[];
    };
    split: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isNav: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    size: import("../types/buttonSizes").buttonSizes;
    split: boolean;
    dir: import("../types/dropdownDirections").dropdownDirections;
    tag: keyof HTMLElementTagNameMap;
    toggleTag: keyof HTMLElementTagNameMap;
    isNav: boolean;
    disabled: boolean;
    variant: import("../types/colorVariants").ColorVariants;
    block: boolean;
    align: import("../types/dropdownAlignments").dropdownAlignments;
    menuTag: keyof HTMLElementTagNameMap;
    text: string;
    splitVariant: import("../types/colorVariants").ColorVariants;
    menuDark: boolean;
    menuClass: string | object | any[];
}>;
export default _default;
//# sourceMappingURL=Dropdown.vue.d.ts.map