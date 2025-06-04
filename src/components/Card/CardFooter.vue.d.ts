import { DefineComponent, VNode } from 'vue';
import { CardFooterPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardFooterSlots {
    default(): VNode[];
}

export interface CardFooterEmitOptions {}
export declare type CardFooterEmits = EmitFn<CardFooterEmitOptions>;

declare const CardFooter: DefineComponent<CardFooterPropsInterface, CardFooterSlots, CardFooterEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardFooter: DefineComponent<CardFooterPropsInterface, CardFooterSlots, CardFooterEmits>;
    }
}

export default CardFooter;
