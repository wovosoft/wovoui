<script setup lang="ts">
import {getCurrentInstance, inject, onMounted, Ref, useModel, watch} from "vue";
import {getTransitionDurationFromElement, reflow, useTimeout} from "@/composables/useHelpers";
import {CarouselItemProps, registerCarouselItem} from "./index";

const props = withDefaults(defineProps<CarouselItemProps>(), {
	tag: 'div',
	active: false,
	start: false,
	end: false
});

const isActive = useModel(props, "active");
const isSliding = inject<Ref<boolean>>("isSliding");

const registerItem = inject(registerCarouselItem)
registerItem(isActive);

const direction = inject<Ref<'start' | 'end'>>("direction");
const isNext = () => direction.value === 'end';

const instanceVNode = getCurrentInstance().vnode;

onMounted(() => {
	if (isActive.value) {
		instanceVNode.el.classList.add('active');
	}
});

const timers = useTimeout();
let activeTimer = null;

/**
 * Story:
 * 1. Set order classes (carousel-item-next,carousel-item-prev) based on direction
 */
watch(isActive, (value: boolean) => {
	isSliding.value = true;
	
	const directionalClassName = isNext() ? 'carousel-item-start' : 'carousel-item-end';
	const orderClassName = isNext() ? 'carousel-item-next' : 'carousel-item-prev';
	
	//for next element
	if (value) {
		instanceVNode?.el?.classList.add(orderClassName);
		reflow(instanceVNode?.el as HTMLElement);
	}
	
	instanceVNode?.el?.classList.add(directionalClassName);
	
	if (activeTimer) {
		clearTimeout(activeTimer);
	}
	
	activeTimer = timers.run(() => {
		instanceVNode.el.classList.remove(directionalClassName, orderClassName);
		instanceVNode.el.classList.toggle('active');
		isSliding.value = false;
	}, getTransitionDurationFromElement(instanceVNode?.el as HTMLElement));
});
</script>

<template>
	<component :is="tag" class="carousel-item">
		<slot></slot>
	</component>
</template>