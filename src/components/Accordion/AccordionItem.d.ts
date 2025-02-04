import { DefineComponent, VNode } from 'vue';
import { AccordionItemStateType } from './../../index';

export interface AccordionItemProps {
    header?: string;
    modelValue?: boolean;
    bodyClass?: string | Record<string, boolean> | Array<string>;
}

export interface ComponentSlots {
    header(): VNode[];
    default(): VNode[];
}

export interface ComponentEmitOptions {
    'update:modelValue': [value: boolean];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const AccordionItem: DefineComponent<AccordionItemProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionItem: DefineComponent<AccordionItemProps, ComponentSlots, ComponentEmits>;
    }
}

export default AccordionItem;
