import { PropType } from "vue";
declare type itemType = {
    title?: string;
    text?: string;
    link?: string | object;
    children?: itemType[];
};
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<itemType[]>;
        default: () => any[];
    };
    child: {
        type: PropType<boolean>;
        default: boolean;
    };
    ps: {
        type: PropType<number>;
        default: number;
    };
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
}, {
    style: import("vue").ComputedRef<{
        borderLeft: number;
        borderRight: number;
        borderRadius: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<itemType[]>;
        default: () => any[];
    };
    child: {
        type: PropType<boolean>;
        default: boolean;
    };
    ps: {
        type: PropType<number>;
        default: number;
    };
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
}>>, {
    tag: keyof HTMLElementTagNameMap;
    modelValue: number;
    flush: boolean;
    alwaysOpen: boolean;
    items: itemType[];
    child: boolean;
    ps: number;
}>;
export default _default;
//# sourceMappingURL=Menu.vue.d.ts.map