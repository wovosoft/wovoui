import { DefineComponent, VNode } from 'vue';
import { CardSubTitlePropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardSubTitleSlots {
    default(): VNode[];
}

export interface CardSubTitleEmitOptions {}
export declare type CardSubTitleEmits = EmitFn<CardSubTitleEmitOptions>;

declare const CardSubTitle: DefineComponent<CardSubTitlePropsInterface, CardSubTitleSlots, CardSubTitleEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardSubTitle: DefineComponent<CardSubTitlePropsInterface, CardSubTitleSlots, CardSubTitleEmits>;
    }
}

export default CardSubTitle;
