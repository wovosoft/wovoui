<template>
    <img :src="src" :class="classes" :alt="alt"/>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CardImg",
    props: {
        src: {type: String as PropType<string>, default: null},
        alt: {type: String as PropType<string>, default: null},
        overlay: {type: Boolean as PropType<boolean>, default: false},
        bottom: {type: Boolean as PropType<boolean>, default: false},
        end: {type: Boolean as PropType<boolean>, default: false},
        left: {type: Boolean as PropType<boolean>, default: false},
        right: {type: Boolean as PropType<boolean>, default: false},
        start: {type: Boolean as PropType<boolean>, default: false},
        top: {type: Boolean as PropType<boolean>, default: false},
        height: {type: [Number, String] as PropType<number | string>, default: null},
        width: {type: [Number, String] as PropType<number | string>, default: null},
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                {
                    "card-img": props.overlay,
                    "card-img-top": props.top,
                    "card-img-bottom": props.bottom,
                    "card-img-left": props.left || props.start,
                    "card-img-right": props.right || props.end,
                }
            ])
        }
    }
})
</script>