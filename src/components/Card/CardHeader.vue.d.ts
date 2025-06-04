import { DefineComponent, VNode } from 'vue';
import { CardHeaderPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardHeaderSlots {
    default(): VNode[];
}

export interface CardHeaderEmitOptions {}
export declare type CardHeaderEmits = EmitFn<CardHeaderEmitOptions>;

declare const CardHeader: DefineComponent<CardHeaderPropsInterface, CardHeaderSlots, CardHeaderEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardHeader: DefineComponent<CardHeaderPropsInterface, CardHeaderSlots, CardHeaderEmits>;
    }
}

export default CardHeader;
