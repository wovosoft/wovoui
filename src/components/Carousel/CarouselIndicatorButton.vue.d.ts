import { DefineComponent } from 'vue';
import type { EmitFn } from '@/index';

export interface CarouselIndicatorButtonProps {
    active?: boolean;
    ariaLabel?: string;
    index?: number;
}

export interface CarouselIndicatorButtonSlots {}

export interface CarouselIndicatorButtonEmitOptions {}
export declare type CarouselIndicatorButtonEmits = EmitFn<CarouselIndicatorButtonEmitOptions>;

declare const CarouselIndicatorButton: DefineComponent<CarouselIndicatorButtonProps, CarouselIndicatorButtonSlots, CarouselIndicatorButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselIndicatorButton: DefineComponent<CarouselIndicatorButtonProps, CarouselIndicatorButtonSlots, CarouselIndicatorButtonEmits>;
    }
}

export default CarouselIndicatorButton;
