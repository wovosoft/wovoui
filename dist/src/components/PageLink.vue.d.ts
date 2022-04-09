import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
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
    prevText: {
        type: PropType<string>;
        default: string;
    };
    nextText: {
        type: PropType<string>;
        default: string;
    };
    ariaLabel: {
        type: PropType<string>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    ariaLabelText: import("vue").ComputedRef<"Next" | "Previous">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
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
    prevText: {
        type: PropType<string>;
        default: string;
    };
    nextText: {
        type: PropType<string>;
        default: string;
    };
    ariaLabel: {
        type: PropType<string>;
        default: any;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    ariaLabel: string;
    href: string;
    next: boolean;
    prev: boolean;
    prevText: string;
    nextText: string;
}>;
export default _default;
//# sourceMappingURL=PageLink.vue.d.ts.map