<script lang="ts" setup>
import {computed} from "vue";
import type {FormLabelProps} from "@/index";

const props = withDefaults(defineProps<FormLabelProps>(), {});

const classes = computed(() => {
    const isHorizontal = props.horizontal;
    let result: Record<string, any> = {
        "form-label": !isHorizontal,
        "col-form-label": isHorizontal
    };

    if (isHorizontal) {
        result["col-sm-" + props.sm] = props.sm;
        result["col-md-" + props.md] = props.md;
        result["col-lg-" + props.lg] = props.lg;
        result["col-xl-" + props.xl] = props.xl;
    }

    return result;
});

</script>

<template>
    <label :class="classes">
        <slot></slot>
    </label>
</template>