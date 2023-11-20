<template>
    <component :is="tag" :class="classes">
        <CarouselInner>
            <slot></slot>
        </CarouselInner>
        <template v-if="controlsEnabled">
            <button class="carousel-control-prev"
                    type="button"
                    @click="changeSlideByIndex('prev')"
                    data-bs-target
                    data-bs-slide="prev">
                <ChevronLeft class="carousel-control-prev-icon text-black" aria-hidden="true"/>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next"
                    type="button"
                    @click="changeSlideByIndex('next')"
                    data-bs-target
                    data-bs-slide="next">
                <ChevronRight class="carousel-control-next-icon text-black" aria-hidden="true"/>
                <span class="visually-hidden">Next</span>
            </button>
        </template>
        <CarouselIndicators v-if="indicatorsEnabled">
            <button
                v-for="(indicator,indicator_index) in slides"
                :key="indicator_index"
                data-bs-target
                type="button"
                @click="changeSlide(indicator,indicator_index,currentIndex())"
                :class="{active:indicator.value}"
                :aria-current="indicator.value"
                aria-label="Slide 1">
            </button>
        </CarouselIndicators>
    </component>
</template>

<script lang="ts" setup>
import {computed, provide, Ref, ref} from "vue";
import {ChevronLeft, ChevronRight} from "@wovosoft/wovoui-icons";
import {makeBoolean, makeNumber, makeProp, makeTag} from "@/composables";
import CarouselInner from "./CarouselInner"
import CarouselIndicators from "./CarouselIndicators"

type directionType = 'left' | 'right' | 'start' | 'end';

const props = defineProps({
    tag: makeTag(),
    slide: makeBoolean(true),
    controlsEnabled: makeBoolean(true),
    indicatorsEnabled: makeBoolean(true),
    fade: makeBoolean(false),
    dark: makeBoolean(false),
    intervals: makeNumber(0),  //in seconds
    direction: makeProp<'next' | 'prev'>("next", String)
    // modelValue: makeNumber(null)
});

const slides: Ref<Ref<boolean>[]> = ref([]);

provide('registerItem', (item: Ref<boolean>) => slides.value.push(item));

const direction: Ref<directionType> = ref('start');
provide('direction', direction);

let interval: number | null = null;

// function which finally changes slide
const changeSlide = (slideVisibility: number | Ref<boolean>, next_slide_index: number | null, current_index: number | null = null) => {
    slides.value.filter(i => i.value).forEach(i => i.value = false);

    if (interval) {
        clearInterval(interval);
        interval = null;
    }

    //when index is provided
    if (typeof slideVisibility === "number") {
        slides.value[slideVisibility].value = true;
    }
    //when ref is provided
    else {
        direction.value = Number(next_slide_index) >= Number(current_index) ? 'start' : 'end';
        slideVisibility.value = true;
    }

    //get next slide and toggle it's visibility
    if (!interval && Number(props.intervals) > 0) {
        interval = setInterval(() => changeSlideByIndex(props.direction), Number(props.intervals) * 1000);
    }
    // context.emit('update:modelValue',currentIndex())
};

//initialize auto sliding
// if (props.intervals) {
//     timeout = setTimeout(() => changeSlideByIndex(props.direction), props.intervals * 1000);
// }

const currentSlide = (): Ref<boolean> => slides.value.find(i => i.value) as Ref<boolean>;
const currentIndex = () => slides.value.indexOf(currentSlide());

const changeSlideByIndex = (type: 'next' | 'start' | 'prev' | 'end') => {
    const index = currentIndex();
    if (type === 'next') {
        changeSlide((index + 1) === slides.value.length ? 0 : (index + 1), null);
        direction.value = "start";
    } else if (type === 'prev') {
        changeSlide((index - 1) < 0 ? (slides.value.length - 1) : (index - 1), null);
        direction.value = "end";
    }
    // context.emit('update:modelValue',currentIndex())
};

// watch(() => props.modelValue, (index) => {
//     if (slides.value.length > index && index >= 0) {
//         changeSlide(slides.value[index], currentIndex(), index)
//     }
// });
const classes = computed(() => [
    "carousel",
    {
        slide: props.slide,
        "carousel-fade": props.fade,
        "carousel-dark": props.dark,
    }
]);
</script>