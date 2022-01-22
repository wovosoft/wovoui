<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "CaretLeft",
    props: {
        width: {
            type: [Number, String],
            default: () => 16
        },
        height: {
            type: [Number, String],
            default: () => 16
        },
        size: {
            type: Number,
            default: () => 1
        },
        variant: {
            type: String,
            default: null
        },
        bgVariant: {
            type: String,
            default: null
        },
        fill: {
            type: String,
            default: () => "currentColor"
        }
    },
    setup(props) {
        return {
            sizeWidth: computed(() => props.width * props.size),
            sizeHeight: computed(() => props.height * props.size),
            classes: computed(() => [
                "bi bi-caret-left",
                {
                    ["text-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                }
            ])
        }
    }
}
</script>