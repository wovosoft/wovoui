import {DefineComponent, VNode} from 'vue';
import {ButtonGroupProps} from "./index";

export interface ComponentSlots {
    default(): VNode[];
}

/**
 * Defines valid emits in Button component.
 */
export interface ComponentEmitOptions {
}

export declare type ComponentEmits = EmitFn<ComponentEmitOptions>;

declare const ButtonGroup: DefineComponent<ButtonGroupProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ButtonGroup: DefineComponent<ButtonGroupProps, ComponentSlots, ComponentEmits>;
    }
}

export default ButtonGroup;
