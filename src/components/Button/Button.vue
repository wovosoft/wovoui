<script lang="ts" setup>
import {computed, inject, useModel} from "vue";
import type {ButtonPropsInterface} from "@/index";
import {ButtonGroupOutlinedInjection} from "@/index";

const props = withDefaults(defineProps<ButtonPropsInterface>(), {
	tag: "button",
	variant: "secondary",
	type: "button",
	activeClass: "active"
});

//data comes from ButtonGroup
const isGroupOutlined = inject(ButtonGroupOutlinedInjection, false);

/**
 * Active state model
 */
const isActive = useModel(props, 'active',{local: true});

const type = () => {
	if (getTag() !== 'button') {
		return null;
	}
	if (props.type) {
		return props.type;
	}
	if (getTag() === "button" && !props.type) {
		return "button";
	}
	
	return props.type;
};

function getTag() {
	return props.href ? 'a' : props.tag;
}

const attrs = computed(() => ({
	/**
	 * disabled attribute is not required for links rather than buttons
	 */
	disabled: props.disabled && props.tag !== 'a',
	ariaPressed: props.pressed,
	autocomplete: props.pressed ? "off" : null,
	/**
	 * for anchor links (a) when it is disabled aria-disabled attribute should be set to true
	 * @link https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state
	 */
	ariaDisabled: props.disabled && props.tag == "a" ? 'true' : null,
	
	/**
	 * Disabled buttons using <a> should not include the href attribute.
	 * @link https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state
	 */
	href: props.tag === "a" && !props.disabled ? props.href : null,
	type: type(),
	onClick: () => {
		if (props.manageActiveState) {
			isActive.value = !isActive.value;
		}
	},
	class: !props.noStyle ? [
		"btn",
		{
			/**
			 * disabled links needs disabled class to work properly
			 * @link https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state
			 */
			disabled: props.disabled && props.tag === "a",
			["btn-" + ((props.outline || isGroupOutlined) ? "outline-" : "") + props.variant]: !!props.variant,
			["btn-" + props.size]: !!props.size,
			"w-100": props.block,
			"rounded-pill": props.pill,
			"rounded-0": props.squared,
			[props.activeClass]: props.pressed || isActive.value,
			"text-nowrap": props.noWrap,
		},
	] : [],
	role: props.tag === "a" ? "button" : null,
}))


</script>
<template>
	<component :is="getTag()" v-bind="attrs">
		<slot></slot>
	</component>
</template>