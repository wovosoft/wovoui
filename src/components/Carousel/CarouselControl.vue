<script setup lang="ts">
import {PropType} from "vue";

defineProps({
	type: {
		type: String as PropType<'prev' | 'next'>,
		required: true
	},
	text: {
		type: String as PropType<string>,
		required: false
	}
})
</script>

<template>
	<button :class="`carousel-control-${type}`" type="button" :data-bs-slide="type">
		<span :class="`carousel-control-${type}-icon`" aria-hidden="true"></span>
		<span class="visually-hidden">
            {{text || (type === 'prev' ? 'Previous' : 'Next')}}
        </span>
	</button>
</template>