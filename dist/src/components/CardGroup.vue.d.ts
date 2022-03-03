import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    deck: {
        type: PropType<boolean>;
        default: boolean;
    };
    columns: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        "card-group": boolean;
        "card-deck": boolean;
        "card-columns": boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    deck: {
        type: PropType<boolean>;
        default: boolean;
    };
    columns: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    tag: string;
    deck: boolean;
    columns: boolean;
}>;
export default _default;
//# sourceMappingURL=CardGroup.vue.d.ts.map