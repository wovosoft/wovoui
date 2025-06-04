import { DefineComponent } from 'vue';
import type { CarouselControlProps } from './index';
import type { EmitFn } from '@/index';

export interface CarouselControlSlots {}

export interface CarouselControlEmitOptions {}
export declare type CarouselControlEmits = EmitFn<CarouselControlEmitOptions>;

declare const CarouselControl: DefineComponent<CarouselControlProps, CarouselControlSlots, CarouselControlEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselControl: DefineComponent<CarouselControlProps, CarouselControlSlots, CarouselControlEmits>;
    }
}

export default CarouselControl;
