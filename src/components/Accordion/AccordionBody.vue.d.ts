import { DefineComponent, VNode } from 'vue';
import type { HasTag } from '@/components';
import type { EmitFn } from '@/index';

export interface AccordionBodySlots {
    default(): VNode[];
}

export interface AccordionBodyEmitOptions {}
export declare type AccordionBodyEmits = EmitFn<AccordionBodyEmitOptions>;

declare const AccordionBody: DefineComponent<HasTag, AccordionBodySlots, AccordionBodyEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionBody: DefineComponent<HasTag, AccordionBodySlots, AccordionBodyEmits>;
    }
}

export default AccordionBody;
