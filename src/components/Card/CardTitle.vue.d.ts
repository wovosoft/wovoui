import { DefineComponent, VNode } from 'vue';
import { CardTitlePropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardTitleSlots {
    default(): VNode[];
}

export interface CardTitleEmitOptions {}
export declare type CardTitleEmits = EmitFn<CardTitleEmitOptions>;

declare const CardTitle: DefineComponent<CardTitlePropsInterface, CardTitleSlots, CardTitleEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardTitle: DefineComponent<CardTitlePropsInterface, CardTitleSlots, CardTitleEmits>;
    }
}

export default CardTitle;
