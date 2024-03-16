<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {getBinaryClasses} from "@/composables";
import {CardSubTitlePropsInterface} from "@/components";

const props = withDefaults(defineProps<CardSubTitlePropsInterface>(), {
    tag: "h6",
    textVariant: "muted"
});

const classes = computed(() => [
    "card-subtitle",
    getBinaryClasses({
        text: props.textVariant,
    })
]);
</script>