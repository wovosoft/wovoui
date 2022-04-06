declare const _default: import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        default: any;
    };
    flush: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        default: any;
    };
    flush: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    modelValue: number;
    flush: boolean;
    tag: keyof HTMLElementTagNameMap;
    alwaysOpen: boolean;
}>;
export default _default;
//# sourceMappingURL=Accordion.d.ts.map