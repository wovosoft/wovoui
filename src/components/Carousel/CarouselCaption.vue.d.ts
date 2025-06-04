import { DefineComponent, VNode } from 'vue';
import type { HasTag } from '@/components';
import type { EmitFn } from '@/index';

export interface CarouselCaptionSlots {
    default(): VNode[];
}

export interface CarouselCaptionEmitOptions {}
export declare type CarouselCaptionEmits = EmitFn<CarouselCaptionEmitOptions>;

declare const CarouselCaption: DefineComponent<HasTag, CarouselCaptionSlots, CarouselCaptionEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselCaption: DefineComponent<HasTag, CarouselCaptionSlots, CarouselCaptionEmits>;
    }
}

export default CarouselCaption;
