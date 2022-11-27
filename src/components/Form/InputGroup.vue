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
import {computed, PropType} from "vue";
import {InputGroupText} from "../..";
import type {ButtonSizes} from "../../types";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    size: {type: String as PropType<ButtonSizes>, default: null},
    prepend: {type: String as PropType<string>, default: null},
    append: {type: String as PropType<string>, default: null},
    noWrap: {type: Boolean as PropType<boolean>, default: false}
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