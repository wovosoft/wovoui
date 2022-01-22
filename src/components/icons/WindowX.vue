<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
  <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0Z"/>
</svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "WindowX",
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
                "bi bi-window-x",
                {
                    ["text-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                }
            ])
        }
    }
}
</script>