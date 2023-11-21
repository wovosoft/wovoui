import {InjectionKey, Ref} from "vue";
import {HasTag} from "@/components";

export {default as Carousel} from "./Carousel.vue";
export {default as CarouselCaption} from "./CarouselCaption";
export {default as CarouselControl} from "./CarouselControl.vue";
export {default as CarouselIndicators} from "./CarouselIndicators.vue";
export {default as CarouselInner} from "./CarouselInner";
export {default as CarouselItem} from "./CarouselItem.vue";

export const registerCarouselItem = Symbol("Register Carousel Item") as InjectionKey<(visible: Ref<boolean>) => any>;

export interface CarouselProps extends HasTag {
    modelValue?: number;
    fade?: boolean;
    dark?: boolean;
    slide?: boolean;
    indicators?: boolean;
    controls?: boolean;
    timeout?: number;
}

export interface CarouselItemProps extends HasTag {
    active?: boolean;
    activeClass?: string;
}

export interface CarouselIndicatorsProps extends HasTag {

}

export interface CarouselInnerProps extends HasTag {

}