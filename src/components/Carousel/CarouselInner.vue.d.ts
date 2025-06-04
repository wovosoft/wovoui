import { DefineComponent, VNode } from 'vue';
import type { HasTag } from '@/components';
import type { EmitFn } from '@/index';

export interface CarouselInnerSlots {
    default(): VNode[];
}

export interface CarouselInnerEmitOptions {}
export declare type CarouselInnerEmits = EmitFn<CarouselInnerEmitOptions>;

declare const CarouselInner: DefineComponent<HasTag, CarouselInnerSlots, CarouselInnerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CarouselInner: DefineComponent<HasTag, CarouselInnerSlots, CarouselInnerEmits>;
    }
}

export default CarouselInner;
