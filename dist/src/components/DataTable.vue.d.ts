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
        type: PropType<string | boolean>;
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
        type: PropType<string>;
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
        type: PropType<"top" | "bottom" | "middle">;
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
        "onUpdate:selectedRows": (...args: any[]) => any;
        selectedRows: any[];
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
        type: PropType<string | boolean>;
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
        type: PropType<string>;
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
        type: PropType<"top" | "bottom" | "middle">;
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
    selectedRows: any[];
    fields: any[];
}>;
export default _default;
//# sourceMappingURL=DataTable.vue.d.ts.map