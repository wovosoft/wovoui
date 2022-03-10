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
                @click="changeSlide(indicator,indicator_index,currentIndex)"
                :class="{active:indicator.value}"
                :aria-current="indicator.value"
                aria-label="Slide 1">
            </button>
        </CarouselIndicators>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, provide, Ref, ref} from "vue";
import CarouselInner from "./CarouselInner";
import CarouselIndicators from "./CarouselIndicators";
import {ChevronLeft, ChevronRight} from "@wovosoft/wovoui-icons";

type directionType = 'left' | 'right' | 'start' | 'end';
export default defineComponent({
    name: "Carousel",
    components: {ChevronLeft, ChevronRight, CarouselInner, CarouselIndicators},
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        slide: {type: Boolean as PropType<boolean>, default: true},
        controlsEnabled: {type: Boolean as PropType<boolean>, default: true},
        indicatorsEnabled: {type: Boolean as PropType<boolean>, default: true},
        fade: {type: Boolean as PropType<boolean>, default: false},
        dark: {type: Boolean as PropType<boolean>, default: false},
        intervals: {type: Number as PropType<number>, default: 0},  //in seconds
        direction: {type: String as PropType<'next' | 'prev'>, default: 'next'},    //default auto direction
        // modelValue: makeNumber(null)
    },

    setup(props, context) {
        const slides: Ref<Ref<boolean>[]> = ref([]);
        provide('registerItem', item => slides.value.push(item));

        const direction: Ref<directionType> = ref('start');
        provide('direction', direction);

        let interval = null;

        // function which finally changes slide
        const changeSlide = (slideVisibility, next_slide_index, current_index = null) => {
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
                direction.value = next_slide_index >= current_index ? 'start' : 'end';
                slideVisibility.value = true;
            }

            //get next slide and toggle it's visibility
            if (!interval && props.intervals > 0) {
                interval = setInterval(() => changeSlideByIndex(props.direction), props.intervals * 1000);
            }
            // context.emit('update:modelValue',currentIndex())
        };

        //initialize auto sliding
        // if (props.intervals) {
        //     timeout = setTimeout(() => changeSlideByIndex(props.direction), props.intervals * 1000);
        // }

        const currentSlide = () => slides.value.find(i => i.value);
        const currentIndex = () => slides.value.indexOf(currentSlide());

        const changeSlideByIndex = (type) => {
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

        return {
            slides,
            direction,
            currentIndex: computed(currentIndex),
            changeSlide,
            changeSlideByIndex,
            classes: computed(() => [
                "carousel",
                {
                    slide: props.slide,
                    "carousel-fade": props.fade,
                    "carousel-dark": props.dark,
                }
            ])
        }
    }
})
</script>