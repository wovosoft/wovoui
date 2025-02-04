import {DefineComponent, VNode} from 'vue';
import {CollapseProps} from "./../../components";


export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {
    'update:modelValue': [value: boolean];
    'update:visible': [value: boolean];
    'showing': [state: boolean];
    'shown': [state: boolean];
    'hiding': [state: boolean];
    'hidden': [state: boolean];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const Collapse: DefineComponent<CollapseProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Collapse: DefineComponent<CollapseProps, ComponentSlots, ComponentEmits>;
    }
}

export default Collapse;
