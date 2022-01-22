<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"/>
  <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"/>
</svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "DistributeVertical",
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
                "bi bi-distribute-vertical",
                {
                    ["text-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                }
            ])
        }
    }
}
</script>