import { DefineComponent, VNode } from 'vue';
import { CardBodyPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardBodySlots {
    /**
     * Default slot for card body content
     */
    default(): VNode[];
    /**
     * Named slot for card title
     */
    title(): VNode[];
    /**
     * Named slot for card subtitle
     */
    subTitle(): VNode[];
}

export interface CardBodyEmitOptions {}
export declare type CardBodyEmits = EmitFn<CardBodyEmitOptions>;

declare const CardBody: DefineComponent<CardBodyPropsInterface, CardBodySlots, CardBodyEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardBody: DefineComponent<CardBodyPropsInterface, CardBodySlots, CardBodyEmits>;
    }
}

export default CardBody;
