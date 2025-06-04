import { DefineComponent, VNode } from 'vue';
import type { AccordionHeaderProps } from './index';
import type { EmitFn } from '@/index';

export interface AccordionHeaderSlots {
    default(): VNode[];
}

export interface AccordionHeaderEmitOptions {
    'update:modelValue': [value: boolean];
}
export declare type AccordionHeaderEmits = EmitFn<AccordionHeaderEmitOptions>;

declare const AccordionHeader: DefineComponent<AccordionHeaderProps, AccordionHeaderSlots, AccordionHeaderEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionHeader: DefineComponent<AccordionHeaderProps, AccordionHeaderSlots, AccordionHeaderEmits>;
    }
}

export default AccordionHeader;
