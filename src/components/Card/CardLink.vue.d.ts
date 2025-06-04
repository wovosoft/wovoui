import { DefineComponent, VNode } from 'vue';
import { CardLinkPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardLinkSlots {
    default(): VNode[];
}

export interface CardLinkEmitOptions {}
export declare type CardLinkEmits = EmitFn<CardLinkEmitOptions>;

declare const CardLink: DefineComponent<CardLinkPropsInterface, CardLinkSlots, CardLinkEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardLink: DefineComponent<CardLinkPropsInterface, CardLinkSlots, CardLinkEmits>;
    }
}

export default CardLink;
