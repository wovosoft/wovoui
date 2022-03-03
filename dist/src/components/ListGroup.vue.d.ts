import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    numbered: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean | "sm" | "lg" | "md" | "xl" | "xxl">;
        default: boolean;
    };
}, {
    theTag: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | "sm" | "lg" | "md" | "xl" | "xxl";
        "list-group-flush": boolean;
        "list-group-numbered": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    numbered: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean | "sm" | "lg" | "md" | "xl" | "xxl">;
        default: boolean;
    };
}>>, {
    tag: string;
    flush: boolean;
    horizontal: boolean | "sm" | "lg" | "md" | "xl" | "xxl";
    numbered: boolean;
}>;
export default _default;
//# sourceMappingURL=ListGroup.vue.d.ts.map