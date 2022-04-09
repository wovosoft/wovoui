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
        type: PropType<"center" | "end" | "right">;
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
        [x: string]: buttonSizes | "center" | "end" | "right";
    })[]>;
    pageCount: import("vue").ComputedRef<number>;
    state: import("vue").Ref<number>;
    setPage: (page: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "update:currentPage")[], "update:modelValue" | "change" | "update:currentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<"center" | "end" | "right">;
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
    tag: keyof HTMLElementTagNameMap;
    modelValue: number;
    align: "center" | "end" | "right";
    totalRows: number;
    perPage: number;
    currentPage: number;
    firstColPageCount: number;
    centerColPageCount: number;
    lastColPageCount: number;
}>;
export default _default;
//# sourceMappingURL=Pagination.vue.d.ts.map