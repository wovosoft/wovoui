import {DefineComponent, VNode} from 'vue';
import {AlertProps} from "./../../components";

export interface ComponentSlots {
    default(): VNode[];

    heading(): VNode[];
}

export interface ComponentEmitOptions {
    'update:modelValue': [value: boolean];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const Alert: DefineComponent<AlertProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Alert: DefineComponent<AlertProps, ComponentSlots, ComponentEmits>;
    }
}

export default Alert;
