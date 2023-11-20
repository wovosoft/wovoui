<template>
	<component :is="tag" :role="role" :aria-label="ariaLabel" :class="classes">
		<slot/>
	</component>
</template>
<script lang="ts" setup>
import {computed, provide} from "vue";
import type {ButtonGroupProps} from "@/index";
import {ButtonGroupOutlinedInjection} from "@/index";

const props = withDefaults(defineProps<ButtonGroupProps>(), {
	tag: "div",
	ariaLabel: "Button Group",
	role: "group"
})

const classes = computed(() => ({
	"btn-group": !props.vertical,
	"btn-group-vertical": props.vertical,
	["btn-group-" + props.size]: props.size,
	"btn-group-justified": props.justified
}));

provide(ButtonGroupOutlinedInjection, !!props.outline);
</script>

<style lang="scss">
//https://stackoverflow.com/questions/34450586/justify-buttons-with-bootstrap-v4/39119031#39119031
.btn-group-justified {
	display: flex;
	width: 100%;
	
	.btn,
	.btn-group {
		flex: 1;
		
		.btn {
			width: 100%;
		}
		
		.dropdown-menu {
			left: auto;
		}
	}
}
</style>