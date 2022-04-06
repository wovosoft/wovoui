import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    modelValue: boolean;
    tag: keyof HTMLElementTagNameMap;
    toggleTag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=AccordionHeader.vue.d.ts.map