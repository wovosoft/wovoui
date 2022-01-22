<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"/>
  <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"/>
</svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "Toggle2Off",
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
                "bi bi-toggle2-off",
                {
                    ["text-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                }
            ])
        }
    }
}
</script>