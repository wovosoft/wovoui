import { DefineComponent, VNode } from 'vue';
import type { EmitFn } from '@/index';

export interface AccordionItemProps {
    header?: string;
    modelValue?: boolean;
    bodyClass?: string | string[] | Record<string, boolean>;
}

export interface AccordionItemSlots {
    default(): VNode[];
    header(): VNode[];
}

export interface AccordionItemEmitOptions {}
export declare type AccordionItemEmits = EmitFn<AccordionItemEmitOptions>;

declare const AccordionItem: DefineComponent<AccordionItemProps, AccordionItemSlots, AccordionItemEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionItem: DefineComponent<AccordionItemProps, AccordionItemSlots, AccordionItemEmits>;
    }
}

export default AccordionItem;
