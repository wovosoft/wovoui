import { DefineComponent, VNode } from 'vue';
import type { AccordionProps } from './index';
import type { EmitFn } from '@/index';

export interface AccordionSlots {
    default(): VNode[];
}

export interface AccordionEmitOptions {
    'update:modelValue': [value: number];
}
export declare type AccordionEmits = EmitFn<AccordionEmitOptions>;

declare const Accordion: DefineComponent<AccordionProps, AccordionSlots, AccordionEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Accordion: DefineComponent<AccordionProps, AccordionSlots, AccordionEmits>;
    }
}

export default Accordion;
