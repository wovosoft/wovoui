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
    href: {
        type: PropType<string>;
        default: string;
    };
    prev: {
        type: PropType<boolean>;
        default: boolean;
    };
    next: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaLabel: {
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
}, {
    classes: import("vue").ComputedRef<(string | {
        active: boolean;
        disabled: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    linkTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    href: {
        type: PropType<string>;
        default: string;
    };
    prev: {
        type: PropType<boolean>;
        default: boolean;
    };
    next: {
        type: PropType<boolean>;
        default: boolean;
    };
    ariaLabel: {
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
}>>, {
    active: boolean;
    href: string;
    disabled: boolean;
    tag: keyof HTMLElementTagNameMap;
    next: boolean;
    prev: boolean;
    ariaLabel: string;
    linkTag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=PageItem.vue.d.ts.map