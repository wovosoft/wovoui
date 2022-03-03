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
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "Progress",
    components: {ProgressBar},
    props: {
        tag: {type: String as PropType<string>, default: 'div'},
        barTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
        value: {type: Number as PropType<number>, default: 0},
        min: {type: Number as PropType<number>, default: 0},
        max: {type: Number as PropType<number>, default: 100},
        showValue: {type: Boolean as PropType<boolean>, default: true},
        striped: {type: Boolean as PropType<boolean>, default: false},
        animated: {type: Boolean as PropType<boolean>, default: false},
        height: {type: String as PropType<string>, default: null},
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