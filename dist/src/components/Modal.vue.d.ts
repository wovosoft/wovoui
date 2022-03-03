import { PropType } from "vue";
import type { modalFullScreen } from "../types/modalFullScreen";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    animation: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    noClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<string>;
        default: string;
    };
    titleClass: {
        type: PropType<string | object | any[]>;
        default: any;
    };
    titleAttrs: {
        type: PropType<object>;
        default: any;
    };
    noHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    headerClass: {
        type: PropType<any>;
        default: any;
    };
    headerAttrs: {
        type: PropType<object>;
        default: any;
    };
    noFooter: {
        type: PropType<boolean>;
        default: boolean;
    };
    okTitle: {
        type: PropType<string>;
        default: string;
    };
    closeTitle: {
        type: PropType<string>;
        default: string;
    };
    okButtonOptions: {
        type: PropType<object>;
        default: any;
    };
    closeButtonOptions: {
        type: PropType<object>;
        default: any;
    };
    noOkButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    static: {
        type: PropType<boolean>;
        default: boolean;
    };
    noBackdrop: {
        type: PropType<boolean>;
        default: boolean;
    };
    buttonSize: {
        type: PropType<buttonSizes>;
        default: any;
    };
    scrollable: {
        type: PropType<boolean>;
        default: boolean;
    };
    centered: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    fullscreen: {
        type: PropType<modalFullScreen>;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        fade: boolean;
    })[]>;
    dialogClass: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
        "modal-dialog-scrollable": boolean;
        "modal-dialog-centered": boolean;
    })[]>;
    shouldShowBackdrop: import("vue").Ref<boolean>;
    shown: import("vue").Ref<boolean>;
    toggle: () => void;
    toggleState: (value?: any) => void;
    show: () => void;
    hide: () => void;
    close(): void;
    ok(): void;
}, unknown, {}, {
    clickedOutside(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "ok" | "showing" | "hiding" | "shown" | "hidden" | "stateChanged")[], "close" | "update:modelValue" | "shown" | "ok" | "showing" | "hiding" | "hidden" | "stateChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    animation: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    noClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<string>;
        default: string;
    };
    titleClass: {
        type: PropType<string | object | any[]>;
        default: any;
    };
    titleAttrs: {
        type: PropType<object>;
        default: any;
    };
    noHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    headerClass: {
        type: PropType<any>;
        default: any;
    };
    headerAttrs: {
        type: PropType<object>;
        default: any;
    };
    noFooter: {
        type: PropType<boolean>;
        default: boolean;
    };
    okTitle: {
        type: PropType<string>;
        default: string;
    };
    closeTitle: {
        type: PropType<string>;
        default: string;
    };
    okButtonOptions: {
        type: PropType<object>;
        default: any;
    };
    closeButtonOptions: {
        type: PropType<object>;
        default: any;
    };
    noOkButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    noCloseButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    static: {
        type: PropType<boolean>;
        default: boolean;
    };
    noBackdrop: {
        type: PropType<boolean>;
        default: boolean;
    };
    buttonSize: {
        type: PropType<buttonSizes>;
        default: any;
    };
    scrollable: {
        type: PropType<boolean>;
        default: boolean;
    };
    centered: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    fullscreen: {
        type: PropType<modalFullScreen>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onOk?: (...args: any[]) => any;
    onShowing?: (...args: any[]) => any;
    onHiding?: (...args: any[]) => any;
    onShown?: (...args: any[]) => any;
    onHidden?: (...args: any[]) => any;
    onStateChanged?: (...args: any[]) => any;
}, {
    size: buttonSizes;
    modelValue: boolean;
    header: string;
    title: string;
    titleTag: string;
    headerClass: any;
    headerTag: keyof HTMLElementTagNameMap;
    noBody: boolean;
    animation: string;
    noClose: boolean;
    titleClass: string | object | any[];
    titleAttrs: object;
    noHeader: boolean;
    headerAttrs: object;
    noFooter: boolean;
    okTitle: string;
    closeTitle: string;
    okButtonOptions: object;
    closeButtonOptions: object;
    noOkButton: boolean;
    noCloseButton: boolean;
    static: boolean;
    noBackdrop: boolean;
    buttonSize: buttonSizes;
    scrollable: boolean;
    centered: boolean;
    fullscreen: modalFullScreen;
}>;
export default _default;
//# sourceMappingURL=Modal.vue.d.ts.map