<script lang="ts" setup>
import {computed} from "vue";
import {CardGroupPropsInterface} from "@/components";

const props = withDefaults(defineProps<CardGroupPropsInterface>(), {
    tag: 'div'
})
const classes = computed(() => [
    {
        "card-group": !props.deck && !props.columns,
        "card-deck": props.deck,
        "card-columns": props.columns,
    }
]);
</script>
<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>