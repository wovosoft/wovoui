import { DefineComponent, VNode } from 'vue';
import { CardTextPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardTextSlots {
    default(): VNode[];
}

export interface CardTextEmitOptions {}
export declare type CardTextEmits = EmitFn<CardTextEmitOptions>;

declare const CardText: DefineComponent<CardTextPropsInterface, CardTextSlots, CardTextEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardText: DefineComponent<CardTextPropsInterface, CardTextSlots, CardTextEmits>;
    }
}

export default CardText;
