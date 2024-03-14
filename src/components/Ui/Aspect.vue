<template>
    <component :is="tag"
               :class="[
                    'ratio',
                    {['ratio-' + ratio]: ['1x1', '4x3', '16x9', '21x9'].includes(ratio)}
                ]"
               :style="styles">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
/**
 * Bootstrap 5.5.2 provides following values only. Using the given
 * mechanism we can provide custom ratios. The bootstrap docs has solution for that.
 * $aspect-ratios: (
 *   "1x1": 100%,
 *   "4x3": calc(3 / 4 * 100%),
 *   "16x9": calc(9 / 16 * 100%),
 *   "21x9": calc(9 / 21 * 100%)
 * );
 */

import {computed} from "vue";
import type {AspectProps} from "@/index";

const props = withDefaults(defineProps<AspectProps>(), {
    tag: "div",
    ratio: "16x9"
});

const styles = computed(() => {
    if (!isNaN(Number(props.ratio))) {
        return {
            "--bs-aspect-ratio": props.ratio ? (props.ratio + "%") : null
        }
    }

    if (!['1x1', '4x3', '16x9', '21x9'].includes(props.ratio) && props.ratio.includes('x')) {
        let ratios = ((ratios) => (ratios[1] / ratios[0] * 100))(props.ratio.split("x").map(i => Number(i)));
        return {
            "--bs-aspect-ratio": ratios > 0 && ratios !== Infinity ? (ratios + "%") : null
        }
    }
});
</script>