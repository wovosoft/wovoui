import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<number>;
        default: any;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: PropType<number>;
        default: any;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: keyof HTMLElementTagNameMap;
    modelValue: number;
    flush: boolean;
    alwaysOpen: boolean;
}>;
export default _default;
//# sourceMappingURL=Accordion.d.ts.map