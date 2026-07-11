<script lang="ts" setup>
import {type CardTextPropsInterface} from "@/components";

withDefaults(defineProps<CardTextPropsInterface>(), {
    tag: "p"
})
</script>

<template>
    <component :is="tag" class="card-text">
        <slot/>
    </component>
</template>