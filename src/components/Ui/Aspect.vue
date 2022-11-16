<template>
    <component :is="tag" :class="classes" :style="styles">
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
import {makeProp, makeTag} from "../../composables/useProps";
import type {AspectRatios} from "../../types";

/**
 * This component is generated based on bootstrap helpers.
 * More details can be found at
 * @link https://getbootstrap.com/docs/5.2/helpers/ratio
 */
const props = defineProps({
    /**
     * Wrapper Tag.
     * @default div
     */
    tag: makeTag(),
    /**
     * Any Bootstrap 5 supported ratio component's css values.
     * The supported values are '1x1' | '4x3' | '16x9' | '21x9'
     * @default "16x9"
     *
     * More Info can be found at
     * @link https://getbootstrap.com/docs/5.2/helpers/ratio/
     *
     * Bootstrap Supports dynamic ratios. This component also supports dynamic ratios.
     * Any valid numeric values will be directly used as Number%
     * and any ratio such as MxN will be converted to (N/M*100)%.
     * Check out more details at
     * @link https://getbootstrap.com/docs/5.2/helpers/ratio/#custom-ratios
     */
    ratio: makeProp<AspectRatios>("16x9", [String, Number])
});

const styles = computed(() => {
    if (typeof props.ratio === "number" || !isNaN(Number(props.ratio))) {
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

const classes = computed(() => [
    "ratio", {
        ["ratio-" + props.ratio]: ['1x1', '4x3', '16x9', '21x9'].includes(props.ratio)
    }
]);
</script>