<template>
    <component :is="tag" :class="classes" role="group">
        <slot name="prepend" v-if="$slots.prepend || prepend">
            <InputGroupText v-if="prepend">
                {{ prepend }}
            </InputGroupText>
        </slot>
        <slot></slot>
        <slot name="append" v-if="$slots.append || append">
            <InputGroupText v-if="append">
                {{ append }}
            </InputGroupText>
        </slot>
    </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {InputGroupText} from "../..";
import type {ButtonSizes} from "@/types";
import {makeBoolean, makeSize, makeString, makeTag} from "@/composables/useProps";

const props = defineProps({
    tag: makeTag("div"),
    size: makeSize<ButtonSizes>(null),
    prepend: makeString(),
    append: makeString(),
    noWrap: makeBoolean(false)
});

const classes = computed(() => [
    "input-group",
    {
        ["input-group-" + props.size]: !!props.size,
        "flex-nowrap": props.noWrap
    }
]);
</script>
<style>
.input-group .form-range.form-control {
    height: auto !important;
}
</style>