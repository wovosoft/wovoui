<script setup lang="ts">
import {CarouselIndicatorsProps} from "./index";

withDefaults(defineProps<CarouselIndicatorsProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="carousel-indicators">
		<slot></slot>
	</component>
</template>