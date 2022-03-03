import { PropType } from "vue";
import { toastPlacements } from "../types/toastPlacements";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    placement: {
        type: PropType<toastPlacements>;
        default: any;
    };
    container: {
        type: PropType<string>;
        default: any;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        "top-0 start-0": boolean;
        "top-0 start-50 translate-middle-x": boolean;
        "top-0 end-0": boolean;
        "top-50 start-0 translate-middle-y": boolean;
        "top-50 start-50 translate-middle": boolean;
        "top-50 end-0 translate-middle-y": boolean;
        "bottom-0 start-0": boolean;
        "bottom-0 start-50 translate-middle-x": boolean;
        "bottom-0 end-0": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    placement: {
        type: PropType<toastPlacements>;
        default: any;
    };
    container: {
        type: PropType<string>;
        default: any;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    container: string;
    placement: toastPlacements;
}>;
export default _default;
//# sourceMappingURL=ToastContainer.vue.d.ts.map