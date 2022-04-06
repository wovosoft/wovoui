import { PropType } from "vue";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    totalRows: {
        type: PropType<number>;
        default: number;
    };
    perPage: {
        type: PropType<number>;
        default: number;
    };
    currentPage: {
        type: PropType<number>;
        default: number;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    align: {
        type: PropType<"right" | "center" | "end">;
        default: any;
    };
    firstColPageCount: {
        type: PropType<number>;
        default: number;
    };
    centerColPageCount: {
        type: PropType<number>;
        default: number;
    };
    lastColPageCount: {
        type: PropType<number>;
        default: number;
    };
}, {
    firstBlock: import("vue").ComputedRef<number[]>;
    centerBlock: import("vue").ComputedRef<any[]>;
    lastBlock: import("vue").ComputedRef<any[]>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: "right" | "center" | "end" | buttonSizes;
    })[]>;
    pageCount: import("vue").ComputedRef<number>;
    state: import("vue").Ref<number>;
    setPage: (page: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "update:currentPage")[], "change" | "update:modelValue" | "update:currentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    totalRows: {
        type: PropType<number>;
        default: number;
    };
    perPage: {
        type: PropType<number>;
        default: number;
    };
    currentPage: {
        type: PropType<number>;
        default: number;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    align: {
        type: PropType<"right" | "center" | "end">;
        default: any;
    };
    firstColPageCount: {
        type: PropType<number>;
        default: number;
    };
    centerColPageCount: {
        type: PropType<number>;
        default: number;
    };
    lastColPageCount: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    "onUpdate:currentPage"?: (...args: any[]) => any;
}, {
    size: buttonSizes;
    modelValue: number;
    align: "right" | "center" | "end";
    tag: keyof HTMLElementTagNameMap;
    totalRows: number;
    perPage: number;
    currentPage: number;
    firstColPageCount: number;
    centerColPageCount: number;
    lastColPageCount: number;
}>;
export default _default;
//# sourceMappingURL=Pagination.vue.d.ts.map