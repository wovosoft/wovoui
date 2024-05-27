import {
    ClassType,
    ColorVariants,
    type ResponsiveSizes,
    type VerticalAlign
} from "@/index";

export {default as Table} from "./Table.vue";
export {default as TBody} from "./TBody.vue";
export {default as Th} from "./Th.vue";
export {default as Td} from "./Td.vue";
export {default as TFoot} from "./TFoot.vue";
export {default as THead} from "./THead.vue";
export {default as Tr} from "./Tr.vue";
export {default as DataTable} from "./DataTable.vue";

export interface DatatableFieldType {
    key: string;
    label?: string;
    formatter?: (item: object, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: ClassType;
    tdClass?: ClassType;
}

export type DatatableHeadType = string | {
    key?: string;
    label?: string;
    formatter?: (row: any, key: any) => any;
    sortable?: boolean;
}

export interface TableCommonProps {
    /**
     * Sets table variant
     */
    variant?: ColorVariants;

    /**
     * Sets table status active
     */
    active?: boolean;

    /**
     * Table alignment
     */
    align?: VerticalAlign;
    content?: string;
}

export interface TableProps extends TableCommonProps {
    /**
     * When set to true, the table becomes responsive. Wraps in .table-responsive
     */
    responsive?: boolean | ResponsiveSizes;

    /**
     * Makes table stripped
     */
    striped?: boolean | 'columns';

    /**
     * Makes table hoverable
     */
    hover?: boolean;

    /**
     * Makes table bordered
     */
    bordered?: boolean;

    /**
     * Sets table border variant
     */
    borderVariant?: ColorVariants;

    /**
     * Removes table borders
     */
    borderless?: boolean;

    /**
     * Makes table shrink, smaller
     */
    small?: boolean;

    /**
     * Sets table caption
     */
    caption?: string;

    /**
     * Places table caption at top
     */
    captionTop?: boolean;
}

export interface DatatableItemType {
    [key: string]: any
}

export interface DatatableProps<ItemType> extends TableProps {
    headClass?: ClassType;
    bodyClass?: ClassType;
    footClass?: ClassType;
    filter?: string;
    fields?: DatatableFieldType[];
    items?: ItemType[];
    headVariant?: ColorVariants;
    bodyVariant?: ColorVariants;
    footVariant?: ColorVariants;
}

export function getTableCommonClasses(props: TableCommonProps) {
    return {
        ["table-" + props.variant]: props.variant,
        "table-active": props.active,
        ["align-" + props.align]: !!props.align
    };
}