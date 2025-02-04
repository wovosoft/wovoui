import { DefineComponent, VNode } from 'vue';
import { HasTag } from './../../components';

export interface ComponentSlots {
    default(): VNode[];
}

declare const AccordionBody: DefineComponent<HasTag, ComponentSlots>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionBody: DefineComponent<HasTag, ComponentSlots>;
    }
}

export default AccordionBody;
