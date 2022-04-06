import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    selectedRows: {
        type: PropType<any[]>;
        default: () => any[];
    };
    filter: {
        type: PropType<string>;
        default: any;
    };
    fields: {
        type: PropType<any[]>;
        default: () => any[];
    };
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    responsive: {
        type: PropType<boolean | import("../types/responsiveLayoutSizes").responsiveSizes>;
        default: boolean;
    };
    variant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    striped: {
        type: PropType<boolean>;
        default: boolean;
    };
    hover: {
        type: PropType<boolean>;
        default: boolean;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    borderVariant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    borderless: {
        type: PropType<boolean>;
        default: boolean;
    };
    small: {
        type: PropType<boolean>;
        default: boolean;
    };
    valign: {
        type: PropType<"top" | "middle" | "bottom">;
        default: any;
    };
    caption: {
        type: PropType<string>;
        default: any;
    };
    captionTop: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<any[]>;
    otherProps: {
        filter: string;
        small: boolean;
        caption: string;
        active: boolean;
        hover: boolean;
        variant: import("../types/colorVariants").ColorVariants;
        selectedRows: any[];
        borderVariant: import("../types/colorVariants").ColorVariants;
        responsive: boolean | import("../types/responsiveLayoutSizes").responsiveSizes;
        striped: boolean;
        bordered: boolean;
        borderless: boolean;
        valign: "top" | "middle" | "bottom";
        captionTop: boolean;
        "onUpdate:selectedRows": (...args: any[]) => any;
    };
    getLabel: (th: any) => any;
    getValue: (row: any, th: any, th_index: any) => any;
    getKey: (th: any) => any;
    sorting: import("vue").Ref<{
        sortBy: any;
        sort: any;
    }>;
    applySorting: (th: any) => void;
    itemsSorted: import("vue").ComputedRef<any[]>;
    clearSorting: () => void;
    filterableColumns: import("vue").ComputedRef<any[]>;
    selectRow: (row: any) => void;
    selectAllRows: () => void;
    unselectAllRows: () => void;
    selectedAllRows: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:selectedRows"[], "update:selectedRows", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectedRows: {
        type: PropType<any[]>;
        default: () => any[];
    };
    filter: {
        type: PropType<string>;
        default: any;
    };
    fields: {
        type: PropType<any[]>;
        default: () => any[];
    };
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    responsive: {
        type: PropType<boolean | import("../types/responsiveLayoutSizes").responsiveSizes>;
        default: boolean;
    };
    variant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    striped: {
        type: PropType<boolean>;
        default: boolean;
    };
    hover: {
        type: PropType<boolean>;
        default: boolean;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    borderVariant: {
        type: PropType<import("../types/colorVariants").ColorVariants>;
        default: any;
    };
    borderless: {
        type: PropType<boolean>;
        default: boolean;
    };
    small: {
        type: PropType<boolean>;
        default: boolean;
    };
    valign: {
        type: PropType<"top" | "middle" | "bottom">;
        default: any;
    };
    caption: {
        type: PropType<string>;
        default: any;
    };
    captionTop: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:selectedRows"?: (...args: any[]) => any;
}, {
    filter: string;
    small: boolean;
    items: any[];
    caption: string;
    active: boolean;
    hover: boolean;
    variant: import("../types/colorVariants").ColorVariants;
    fields: any[];
    selectedRows: any[];
    borderVariant: import("../types/colorVariants").ColorVariants;
    responsive: boolean | import("../types/responsiveLayoutSizes").responsiveSizes;
    striped: boolean;
    bordered: boolean;
    borderless: boolean;
    valign: "top" | "middle" | "bottom";
    captionTop: boolean;
}>;
export default _default;
//# sourceMappingURL=DataTable.vue.d.ts.map