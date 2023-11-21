<script setup lang="ts">
import {PropType} from "vue";

defineProps({
	active: Boolean as PropType<boolean>,
	ariaLabel: String as PropType<string>,
	index: Number as PropType<number>,
});
</script>

<template>
	<button
		type="button"
		:class="{active:active}"
		:aria-current="!!active"
		data-bs-target
		:aria-label="ariaLabel || `Toggle Carousel Item ${index}`"
	/>
</template>