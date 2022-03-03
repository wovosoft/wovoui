import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
    gap: {
        type: PropType<string | number>;
        default: number;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: string | number | boolean;
        vstack: boolean;
        hstack: boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
    gap: {
        type: PropType<string | number>;
        default: number;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    vertical: boolean;
    gap: string | number;
}>;
export default _default;
//# sourceMappingURL=Stack.vue.d.ts.map