import { PropType } from "vue";
import { ColorVariants } from "../types";
declare const _default: import("vue").DefineComponent<{
    tabIndex: {
        type: PropType<number>;
        default: number;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    ariaLabelledby: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: PropType<"top" | "left" | "right" | "bottom" | "start" | "end">;
        default: string;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerClass: {
        type: PropType<any>;
        default: any;
    };
    headerStyle: {
        type: PropType<string | object>;
        default: any;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    backdrop: {
        type: PropType<boolean>;
        default: boolean;
    };
    enableBodyScroll: {
        type: PropType<boolean>;
        default: boolean;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    btnCloseWhite: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    shown: import("vue").Ref<boolean>;
    showBackdrop: import("vue").Ref<boolean>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariants;
        show: boolean;
    })[]>;
}, unknown, {}, {
    transitionEnded(): void;
    globalEventListener(e: any): void;
    show(): void;
    hide(): void;
    toggle(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "shown" | "hidden" | "beforeShow" | "beforeHide")[], "shown" | "update:modelValue" | "hidden" | "beforeShow" | "beforeHide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabIndex: {
        type: PropType<number>;
        default: number;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    ariaLabelledby: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: PropType<"top" | "left" | "right" | "bottom" | "start" | "end">;
        default: string;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerClass: {
        type: PropType<any>;
        default: any;
    };
    headerStyle: {
        type: PropType<string | object>;
        default: any;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    backdrop: {
        type: PropType<boolean>;
        default: boolean;
    };
    enableBodyScroll: {
        type: PropType<boolean>;
        default: boolean;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    btnCloseWhite: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onShown?: (...args: any[]) => any;
    onHidden?: (...args: any[]) => any;
    onBeforeShow?: (...args: any[]) => any;
    onBeforeHide?: (...args: any[]) => any;
}, {
    id: string;
    modelValue: boolean;
    title: string;
    header: string;
    backdrop: boolean;
    placement: "top" | "left" | "right" | "bottom" | "start" | "end";
    tag: keyof HTMLElementTagNameMap;
    textVariant: ColorVariants;
    bgVariant: ColorVariants;
    headerClass: any;
    btnCloseWhite: boolean;
    tabIndex: number;
    ariaLabelledby: string;
    headerStyle: string | object;
    enableBodyScroll: boolean;
}>;
export default _default;
//# sourceMappingURL=OffCanvas.vue.d.ts.map