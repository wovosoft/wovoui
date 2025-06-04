import { DefineComponent, VNode } from 'vue';
import type { CardPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardSlots {
    /**
     * Default slot for card content
     */
    default(): VNode[];
    /**
     * Named slot for card header
     */
    header(): VNode[];
    /**
     * Named slot for card footer
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Card component.
 * (No emits defined)
 */
export interface CardEmitOptions {}

export declare type CardEmits = EmitFn<CardEmitOptions>;

declare const Card: DefineComponent<CardPropsInterface, CardSlots, CardEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Card: DefineComponent<CardPropsInterface, CardSlots, CardEmits>;
    }
}

export default Card;
