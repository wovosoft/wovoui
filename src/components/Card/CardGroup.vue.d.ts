import { DefineComponent, VNode } from 'vue';
import { CardGroupPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardGroupSlots {
    default(): VNode[];
}

export interface CardGroupEmitOptions {}
export declare type CardGroupEmits = EmitFn<CardGroupEmitOptions>;

declare const CardGroup: DefineComponent<CardGroupPropsInterface, CardGroupSlots, CardGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardGroup: DefineComponent<CardGroupPropsInterface, CardGroupSlots, CardGroupEmits>;
    }
}

export default CardGroup;
