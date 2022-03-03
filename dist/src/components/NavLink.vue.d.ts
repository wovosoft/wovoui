import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    ariaCurrent: {
        type: PropType<string>;
        default: any;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    to: {
        type: PropType<object>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<void>;
    linkAttributes: import("vue").ComputedRef<{
        href: string;
        ariaCurrent: string;
        target: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaCurrent: {
        type: PropType<string>;
        default: any;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    to: {
        type: PropType<object>;
        default: any;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    disabled: boolean;
    href: string;
    target: string;
    active: boolean;
    ariaCurrent: string;
    to: object;
}>;
export default _default;
//# sourceMappingURL=NavLink.vue.d.ts.map