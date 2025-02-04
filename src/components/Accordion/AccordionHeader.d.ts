import {DefineComponent, VNode} from 'vue';
import {AccordionHeaderProps} from './../../components';

export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {
    'update:modelValue': [value: boolean];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const AccordionHeader: DefineComponent<AccordionHeaderProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionHeader: DefineComponent<AccordionHeaderProps, ComponentSlots, ComponentEmits>;
    }
}

export default AccordionHeader;
