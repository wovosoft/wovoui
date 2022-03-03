import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    visible: {
        type: PropType<boolean>;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    isNav: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    shown: import("vue").Ref<boolean>;
    shouldRender: import("vue").Ref<boolean>;
    toggleCollapse: (container: any, shown: any, dim?: string) => void;
    collapseTransitionEnd: (e: any, showing: any, dim?: string) => void;
    classes: import("vue").ComputedRef<(string | {
        "navbar-collapse": boolean;
        "collapse-horizontal": boolean;
    })[]>;
    updateState: (value: any) => void;
}, unknown, {}, {
    listener(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    visible: {
        type: PropType<boolean>;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    isNav: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    tag: string;
    modelValue: boolean;
    visible: boolean;
    class: any;
    id: string;
    isNav: boolean;
    horizontal: boolean;
}>;
export default _default;
//# sourceMappingURL=Collapse.vue.d.ts.map