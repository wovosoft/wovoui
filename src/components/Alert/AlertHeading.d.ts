import {DefineComponent, VNode} from 'vue';
import {AlertHeadingProps} from "./index";

export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {
    'update:modelValue': [value: boolean];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const AlertHeading: DefineComponent<AlertHeadingProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AlertHeading: DefineComponent<AlertHeadingProps, ComponentSlots, ComponentEmits>;
    }
}

export default AlertHeading;
