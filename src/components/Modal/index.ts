import {CSSProperties} from "vue";

import {
    ButtonProps,
    ButtonSizes,
    ClassType,
    ColorVariants, HasColorVariant,
    HasTag
} from "@/index";

export type ModalSizes = "sm" | "lg" | "xl" | null;
export type ModalFullScreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';

export {default as Modal} from "./Modal.vue";
export {default as ModalBody} from "./ModalBody.vue";
export {default as ModalFooter} from "./ModalFooter.vue";
export {default as ModalHeader} from "./ModalHeader.vue";
export {default as ModalTitle} from "./ModalTitle.vue";
export {default as ModalDialog} from "./ModalDialog.vue";

export interface ModalProps extends HasTag {
    id?: string;
    animation?: string;
    shrink?: boolean;
    loading?: boolean;
    //null refers to initial value
    modelValue?: boolean;
    noClose?: boolean;
    closeBtnWhite?: boolean;
    noBody?: boolean;
    lazy?: boolean;
    bodyClass?: ClassType;
    bodyVariant?: ColorVariants;
    contentClass?: ClassType;

    title?: string;
    titleTag?: keyof HTMLElementTagNameMap;
    titleClass?: ClassType;
    titleAttrs?: CSSProperties;

    //header props
    noHeader?: boolean;
    header?: string;
    headerTag?: keyof HTMLElementTagNameMap;
    headerClass?: ClassType;
    headerAttrs?: CSSProperties;
    headerVariant?: ColorVariants;

    noFooter?: boolean;
    footerClass?: ClassType;
    footerVariant?: ColorVariants;

    //buttons
    okTitle?: string;
    closeTitle?: string;
    okButtonOptions?: ButtonProps;
    closeButtonOptions?: Record<string, any>;
    noOkButton?: boolean;
    noCloseButton?: boolean;
    noCloseOnBackdrop?: boolean;
    noCloseOnEsc?: boolean;

    static?: boolean;
    noBackdrop?: boolean;
    buttonSize?: ButtonSizes;

    //modal dialog props
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalBodyProps extends HasTag, HasColorVariant {

}

export interface ModalDialogProps extends HasTag {
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalFooterProps extends HasTag, HasColorVariant {
    shrink?: boolean;
}

export interface ModalHeaderProps extends HasTag, HasColorVariant {
    shrink?: boolean;
}