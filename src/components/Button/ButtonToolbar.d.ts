import {DefineComponent, VNode} from 'vue';
import {ButtonToolbarProps} from "./index";

export interface ComponentSlots {
    default(): VNode[];
}

/**
 * Defines valid emits in Button component.
 */
export interface ComponentEmitOptions {
}

export declare type ComponentEmits = EmitFn<ComponentEmitOptions>;

declare const ButtonToolbar: DefineComponent<ButtonToolbarProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ButtonToolbar: DefineComponent<ButtonToolbarProps, ComponentSlots, ComponentEmits>;
    }
}

export default ButtonToolbar;
