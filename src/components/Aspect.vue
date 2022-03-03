<template>
    <component :is="tag" :class="classes" :style="style">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {aspectRatios} from "../types/aspectRatios";

export default defineComponent({
    name: "Aspect",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        ratio: {type: [String, Number] as PropType<aspectRatios>, default: "16x9"}
    },
    setup(props) {
        return {
            classes: computed(() => [
                "ratio",
                {
                    //when not numeric
                    ["ratio-" + props.ratio]: (isNaN(props.ratio) && props.ratio.toString().indexOf("x") > -1)
                }
            ]),
            style: computed(() => {
                if (typeof props.ratio === "number" || !isNaN(props.ratio)) {
                    return {
                        "--bs-aspect-ratio": props.ratio + "%"
                    }
                }
                return null;
            })
        }
    }
})
</script>