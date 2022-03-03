import { PropType } from "vue";
import { Binary } from "../types/Binary";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<Binary>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
    append: {
        type: PropType<Binary>;
        default: boolean;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<Binary>;
        default: boolean;
    };
    exact: {
        type: PropType<Binary>;
        default: boolean;
    };
    rel: {
        type: PropType<string>;
        default: any;
    };
    replace: {
        type: PropType<Binary>;
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
        active: Binary;
    })[]>;
    isRouterInstalled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<Binary>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
    append: {
        type: PropType<Binary>;
        default: boolean;
    };
    ariaCurrent: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<Binary>;
        default: boolean;
    };
    exact: {
        type: PropType<Binary>;
        default: boolean;
    };
    rel: {
        type: PropType<string>;
        default: any;
    };
    replace: {
        type: PropType<Binary>;
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
    replace: Binary;
    tag: string;
    disabled: Binary;
    href: string;
    target: string;
    active: Binary;
    activeClass: string;
    append: Binary;
    ariaCurrent: string;
    exact: Binary;
    rel: string;
    to: string | object;
}>;
export default _default;
//# sourceMappingURL=BreadcrumbItem.vue.d.ts.map