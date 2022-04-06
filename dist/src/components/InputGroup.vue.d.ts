import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: any;
    };
    prepend: {
        type: PropType<string>;
        default: any;
    };
    append: {
        type: PropType<string>;
        default: any;
    };
    noWrap: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
        "flex-nowrap": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: PropType<string>;
        default: any;
    };
    prepend: {
        type: PropType<string>;
        default: any;
    };
    append: {
        type: PropType<string>;
        default: any;
    };
    noWrap: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    size: string;
    prepend: string;
    tag: keyof HTMLElementTagNameMap;
    append: string;
    noWrap: boolean;
}>;
export default _default;
//# sourceMappingURL=InputGroup.vue.d.ts.map