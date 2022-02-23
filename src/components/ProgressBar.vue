<template>
    <component
        :is="tag"
        :class="classes"
        role="progressbar"
        :style="{width:value+'%'}"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valuemax="max">
        <slot :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max">
            {{ value + '%' }}
        </slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "ProgressBar",
    props: {
        tag: {type: String, default: "div"},
        value: {type: Number, default: 0},
        min: {type: Number, default: 0},
        max: {type: Number, default: 100},
        showValue: {type: Boolean as PropType<true | false>, default: true},
        striped: {type: Boolean as PropType<true | false>, default: false},
        animated: {type: Boolean as PropType<true | false>, default: false},
        variant: {type: String as PropType<ColorVariants>}
    },
    setup(props, context) {

        return {
            classes: computed(() => [
                "progress-bar", {
                    ["bg-" + props.variant]: props.variant,
                    "progress-bar-striped": props.striped,
                    "progress-bar-animated": props.animated,
                }
            ])
        }
    }
})
</script>