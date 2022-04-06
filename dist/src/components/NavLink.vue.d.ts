import { PropType } from "vue";
import type { classTypes } from "../types/classTypes";
declare type linkAttributesType = {
    href?: string;
    ariaCurrent?: string;
    target?: string;
};
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
        default: any;
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
    classes: import("vue").ComputedRef<classTypes>;
    linkAttributes: import("vue").ComputedRef<linkAttributesType>;
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
        default: any;
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
    active: boolean;
    href: string;
    disabled: boolean;
    target: string;
    to: object;
    tag: keyof HTMLElementTagNameMap;
    ariaCurrent: string;
}>;
export default _default;
//# sourceMappingURL=NavLink.vue.d.ts.map