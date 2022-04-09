import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    card: {
        type: PropType<boolean>;
        default: boolean;
    };
    pills: {
        type: PropType<boolean>;
        default: boolean;
    };
    fill: {
        type: PropType<boolean>;
        default: boolean;
    };
    justified: {
        type: PropType<boolean>;
        default: boolean;
    };
    align: {
        type: PropType<"center" | "end">;
        default: any;
    };
    end: {
        type: PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    tabsMap: import("vue").Ref<any[]>;
    classes: import("vue").ComputedRef<{
        card: boolean;
        'd-flex': boolean;
        'align-items-start': boolean;
    }>;
    active: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number>;
        default: number;
    };
    card: {
        type: PropType<boolean>;
        default: boolean;
    };
    pills: {
        type: PropType<boolean>;
        default: boolean;
    };
    fill: {
        type: PropType<boolean>;
        default: boolean;
    };
    justified: {
        type: PropType<boolean>;
        default: boolean;
    };
    align: {
        type: PropType<"center" | "end">;
        default: any;
    };
    end: {
        type: PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    fill: boolean;
    modelValue: number;
    vertical: boolean;
    justified: boolean;
    end: boolean;
    align: "center" | "end";
    card: boolean;
    pills: boolean;
}>;
export default _default;
//# sourceMappingURL=Tabs.vue.d.ts.map