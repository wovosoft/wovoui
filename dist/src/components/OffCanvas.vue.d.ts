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
        type: PropType<"top" | "start" | "end" | "bottom" | "left" | "right">;
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "shown" | "hidden" | "beforeShow" | "beforeHide")[], "update:modelValue" | "shown" | "hidden" | "beforeShow" | "beforeHide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<"top" | "start" | "end" | "bottom" | "left" | "right">;
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
    header: string;
    title: string;
    tag: keyof HTMLElementTagNameMap;
    modelValue: boolean;
    id: string;
    textVariant: ColorVariants;
    bgVariant: ColorVariants;
    headerClass: any;
    placement: "top" | "start" | "end" | "bottom" | "left" | "right";
    btnCloseWhite: boolean;
    tabIndex: number;
    ariaLabelledby: string;
    headerStyle: string | object;
    backdrop: boolean;
    enableBodyScroll: boolean;
}>;
export default _default;
//# sourceMappingURL=OffCanvas.vue.d.ts.map