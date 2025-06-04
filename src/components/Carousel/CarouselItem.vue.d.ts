import { DefineComponent, VNode } from 'vue';
import type { CarouselItemProps } from './index';
import type { EmitFn } from '@/index';

export interface CarouselItemSlots {
    default(): VNode[];
}

export interface CarouselItemEmitOptions {}
export declare type CarouselItemEmits = EmitFn<CarouselItemEmitOptions>;

declare const CarouselItem: DefineComponent<CarouselItemProps, CarouselItemSlots, CarouselItemEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselItem: DefineComponent<CarouselItemProps, CarouselItemSlots, CarouselItemEmits>;
    }
}

export default CarouselItem;
