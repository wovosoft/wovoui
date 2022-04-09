import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
    append: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    exact: {
        type: PropType<boolean>;
        default: boolean;
    };
    rel: {
        type: PropType<string>;
        default: any;
    };
    replace: {
        type: PropType<boolean>;
        default: boolean;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    to: {
        type: PropType<string | object>;
        default: any;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
}, {
    attributes: import("vue").ComputedRef<{
        ariaCurrent: string;
    }>;
    classes: import("vue").ComputedRef<(string | {
        active: boolean;
    })[]>;
    isRouterInstalled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
    append: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    exact: {
        type: PropType<boolean>;
        default: boolean;
    };
    rel: {
        type: PropType<string>;
        default: any;
    };
    replace: {
        type: PropType<boolean>;
        default: boolean;
    };
    target: {
        type: PropType<string>;
        default: string;
    };
    to: {
        type: PropType<string | object>;
        default: any;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
}>>, {
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    disabled: boolean;
    href: string;
    target: string;
    active: boolean;
    activeClass: string;
    append: boolean;
    ariaCurrent: string;
    exact: boolean;
    rel: string;
    to: string | object;
}>;
export default _default;
//# sourceMappingURL=BreadcrumbItem.vue.d.ts.map