<template>
    <component :is="tag" :class="classes" :style="{height:height}">
        <slot v-if="$slots.default"></slot>
        <ProgressBar
            v-else
            :is="barTag"
            :value="value"
            :min="min"
            :max="max"
            :show-value="showValue"
            :variant="variant"
            :striped="striped"
            :animated="animated"
        />
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import ProgressBar from "./ProgressBar.vue";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "Progress",
    components: {ProgressBar},
    props: {
        tag: {type: String, default: 'div'},
        barTag: {type: String, default: 'div'},
        value: {type: Number, default: 0},
        min: {type: Number, default: 0},
        max: {type: Number, default: 100},
        showValue: {type: Boolean as PropType<true | false>, default: true},
        striped: {type: Boolean as PropType<true | false>, default: false},
        animated: {type: Boolean as PropType<true | false>, default: false},
        height: {type: String, default: null},
        variant: {type: String as PropType<ColorVariants>}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "progress"
            ])
        }
    }
})
</script>