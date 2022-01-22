<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"/>
</svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "Mouse2Fill",
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
                "bi bi-mouse2-fill",
                {
                    ["text-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                }
            ])
        }
    }
}
</script>