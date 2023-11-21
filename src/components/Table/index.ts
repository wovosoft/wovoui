import {ClassTypes} from "@/index";

export {default as Table} from "./Table";
export {default as TBody} from "./TBody";
export {default as Th} from "./Th";
export {default as Td} from "./Td";
export {default as TFoot} from "./TFoot";
export {default as THead} from "./THead";
export {default as Tr} from "./Tr";
export {default as DataTable} from "./DataTable.vue";
export {default as DataTableNext} from "./DataTableNext.vue";


export interface DatatableFieldType {
    key: string;
    label?: string;
    formatter?: (item: object, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: ClassTypes;
    tdClass?: ClassTypes;
}

export type DatatableHeadType = string | {
    key?: string;
    label?: string;
    formatter?: (row: any, key: any) => any;
    sortable?: boolean;
}