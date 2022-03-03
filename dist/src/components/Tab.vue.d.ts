import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    updateVisible: (value: any) => any;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {
    applyVisibility(value: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:active"[], "update:active", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
}>> & {
    "onUpdate:active"?: (...args: any[]) => any;
}, {
    active: boolean;
    title: string;
}>;
export default _default;
//# sourceMappingURL=Tab.vue.d.ts.map