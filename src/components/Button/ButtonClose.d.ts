import {DefineComponent, VNode} from 'vue';
import {ButtonCloseProps} from "./../../components";

export interface ComponentSlots {
    default(): VNode[];
}

/**
 * Defines valid emits in Button component.
 */
export interface ButtonCloseEmitsOptions {
}

export declare type ComponentEmits = EmitFn<ButtonCloseEmitsOptions>;

declare const ButtonClose: DefineComponent<ButtonProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ButtonClose: DefineComponent<ButtonCloseProps, ComponentSlots, ComponentEmits>;
    }
}

export default ButtonClose;
