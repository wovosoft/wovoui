import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        'dropdown-menu-dark': boolean;
        show: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    dark: boolean;
    show: boolean;
    tag: keyof HTMLElementTagNameMap;
}>;
export default _default;
//# sourceMappingURL=DropdownMenu.vue.d.ts.map