import {DefineComponent, VNode} from 'vue';
import {AccordionProps} from './index';

export interface ComponentSlots {
    default(): VNode[];
}

/**
 * Defines valid emits in Accordion component.
 */
export interface ComponentEmitOptions {
    'update:modelValue': [value: number];
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

/**
 * Exposed methods from the Accordion component.
 */
export interface AccordionExposed {
    /**
     * Toggles the state of all accordion items.
     */
    toggleAll: () => void;

    /**
     * Opens all accordion items.
     */
    openAll: () => void;

    /**
     * Collapses all accordion items.
     */
    collapseAll: () => void;
}

/**
 * Declaration for the Accordion component.
 */
declare const Accordion: DefineComponent<
    AccordionProps,
    AccordionExposed,
    ComponentSlots,
    ComponentEmits
>;

declare module 'vue' {
    export interface GlobalComponents {
        Accordion: DefineComponent<AccordionProps, AccordionExposed, ComponentSlots, ComponentEmits>;
    }
}

export default Accordion;
