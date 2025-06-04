import { DefineComponent, VNode } from 'vue';
import type { CarouselIndicatorsProps } from './index';
import type { EmitFn } from '@/index';

export interface CarouselIndicatorsSlots {
    default(): VNode[];
}

export interface CarouselIndicatorsEmitOptions {}
export declare type CarouselIndicatorsEmits = EmitFn<CarouselIndicatorsEmitOptions>;

declare const CarouselIndicators: DefineComponent<CarouselIndicatorsProps, CarouselIndicatorsSlots, CarouselIndicatorsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselIndicators: DefineComponent<CarouselIndicatorsProps, CarouselIndicatorsSlots, CarouselIndicatorsEmits>;
    }
}

export default CarouselIndicators;
