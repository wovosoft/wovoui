import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    linkTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: any;
    };
    href: {
        type: PropType<string>;
        default: string;
    };
    to: {
        type: PropType<object>;
        default: any;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    attributes: import("vue").ComputedRef<{}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    linkTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: any;
    };
    href: {
        type: PropType<string>;
        default: string;
    };
    to: {
        type: PropType<object>;
        default: any;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    disabled: boolean;
    href: string;
    target: string;
    active: boolean;
    ariaCurrent: string;
    to: object;
    linkTag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=NavItem.vue.d.ts.map