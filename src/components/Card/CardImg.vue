<script lang="ts" setup>
import {computed} from "vue";
import {CardImgPropsInterface} from "@/components";

const props = withDefaults(defineProps<CardImgPropsInterface>(), {});
const attrs = computed(() => ({
    src: props.src,
    alt: props.alt,
    class: {
        "card-img": props.overlay,
        "card-img-top": props.top,
        "card-img-bottom": props.bottom,
        "card-img-left": props.left || props.start,
        "card-img-right": props.right || props.end,
    }
}));
</script>

<template>
    <img v-bind="attrs"/>
</template>