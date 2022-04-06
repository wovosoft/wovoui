import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    divider: {
        type: PropType<string>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    divider: {
        type: PropType<string>;
        default: any;
    };
}>>, {
    items: any[];
    tag: keyof HTMLElementTagNameMap;
    divider: string;
}>;
export default _default;
//# sourceMappingURL=Breadcrumb.vue.d.ts.map