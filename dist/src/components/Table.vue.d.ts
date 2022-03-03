declare const _default: import("vue").DefineComponent<{
    responsive: {
        type: import("vue").PropType<string | boolean>;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    striped: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    borderVariant: {
        type: import("vue").PropType<string>;
        default: any;
    };
    borderless: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    small: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    valign: {
        type: import("vue").PropType<"top" | "bottom" | "middle">;
        default: any;
    };
    caption: {
        type: import("vue").PropType<string>;
        default: any;
    };
    captionTop: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | import("../types/colorVariants").ColorVariants;
        "table-striped": boolean;
        "table-hover": boolean;
        "table-active": boolean;
        "table-bordered": boolean;
        "table-borderless": boolean;
        "table-sm": boolean;
        "caption-top": boolean;
    })[]>;
    wrapperClass: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        "table-responsive": boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    responsive: {
        type: import("vue").PropType<string | boolean>;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    striped: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hover: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    borderVariant: {
        type: import("vue").PropType<string>;
        default: any;
    };
    borderless: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    small: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    valign: {
        type: import("vue").PropType<"top" | "bottom" | "middle">;
        default: any;
    };
    caption: {
        type: import("vue").PropType<string>;
        default: any;
    };
    captionTop: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    small: boolean;
    variant: import("../types/colorVariants").ColorVariants;
    active: boolean;
    caption: string;
    borderVariant: string;
    responsive: string | boolean;
    striped: boolean;
    hover: boolean;
    bordered: boolean;
    borderless: boolean;
    valign: "top" | "bottom" | "middle";
    captionTop: boolean;
}>;
export default _default;
//# sourceMappingURL=Table.vue.d.ts.map