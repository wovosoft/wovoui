import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
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
}, {
    items: any[];
    activeItem: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
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
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: number;
    flush: boolean;
    alwaysOpen: boolean;
}>;
export default _default;
//# sourceMappingURL=Accordion.vue.d.ts.map