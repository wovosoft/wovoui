import {HTMLAttributes} from "vue";
import type {ClassType, ColorVariants, TooltipPlacement} from "@/index";

export {default as Offcanvas} from "./Offcanvas.vue";
export {default as OffcanvasBody} from "./OffcanvasBody.vue";
export {default as OffcanvasHeader} from "./OffcanvasHeader.vue";
export {default as OffcanvasTitle} from "./OffcanvasTitle.vue";

export interface OffcanvasProps {
    modelValue?: boolean;
    placement?: TooltipPlacement;
    header?: string;
    headerClass?: ClassType;
    bodyClass?: ClassType;
    backdropClass?: ClassType;
    headerStyle?: HTMLAttributes['style'];
    bodyStyle?: HTMLAttributes['style'];
    backdropStyle?: HTMLAttributes['style'];
    title?: string;
    tag?: keyof HTMLElementTagNameMap;
    backdrop?: boolean;
    enableBodyScroll?: boolean;
    bgVariant?: ColorVariants;
    textVariant?: ColorVariants;
    btnCloseWhite?: boolean;
    scrollbarPadding?: string;
    noCloseOnEsc?: boolean;
}

export interface OffcanvasHeaderProps {
    modelValue?: boolean;
    tag?: keyof HTMLElementTagNameMap;
    title?: string;
    showClose?: boolean;
    btnCloseWhite?: boolean;
}