<script lang="ts" setup>
import {computed} from "vue";
import {type RowProps} from "./index";

const props = withDefaults(defineProps<RowProps>(), {
    tag: 'div',
});

const classes = computed(() => ["row", {
    ["row-cols-" + props.cols]: props.cols,
    ["row-cols-sm-" + props.sm]: props.sm,
    ["row-cols-md-" + props.md]: props.md,
    ["row-cols-lg-" + props.lg]: props.lg,
    ["row-cols-xl-" + props.xl]: props.xl,
    ["align-items-" + props.alignItems]: props.alignItems,
    ["justify-content-" + props.justifyContent]: props.justifyContent,
    ["g-" + props.g]: props.g,
    ["g-sm-" + props.gSm]: props.gSm,
    ["g-md-" + props.gMd]: props.gMd,
    ["g-lg-" + props.gLg]: props.gLg,
    ["g-xl-" + props.gXl]: props.gXl,
    ["gx-" + props.gx]: props.gx,
    ["gy-" + props.gy]: props.gy,
}]);
</script>

<template>
    <component :is="props.tag" :class="classes">
        <slot/>
    </component>
</template>