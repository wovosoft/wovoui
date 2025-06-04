import { DefineComponent, VNode } from 'vue';
import type { CarouselProps } from './index';
import type { EmitFn } from '@/index';

export interface CarouselSlots {
    default(): VNode[];
}

export interface CarouselEmitOptions {}
export declare type CarouselEmits = EmitFn<CarouselEmitOptions>;

declare const Carousel: DefineComponent<CarouselProps, CarouselSlots, CarouselEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Carousel: DefineComponent<CarouselProps, CarouselSlots, CarouselEmits>;
    }
}

export default Carousel;
