<script setup lang="ts">
import {CarouselControlProps} from "@/components";

withDefaults(defineProps<CarouselControlProps>(), {})
</script>

<template>
    <button :class="`carousel-control-${type}`" type="button" :data-bs-slide="type">
        <span :class="`carousel-control-${type}-icon`" aria-hidden="true"></span>
        <span class="visually-hidden">
            {{ text || (type === 'prev' ? 'Previous' : 'Next') }}
        </span>
    </button>
</template>