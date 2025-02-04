import {DefineComponent, VNode} from 'vue';

import {ButtonProps} from "./index";

export interface ButtonSlots {
    default(): VNode[];
}

/**
 * Defines valid emits in Button component.
 */
export interface ButtonEmitsOptions {
}

export declare type ButtonEmits = EmitFn<ButtonEmitsOptions>;

declare const Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;
    }
}

export default Button;
