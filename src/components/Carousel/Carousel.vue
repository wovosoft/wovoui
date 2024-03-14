<script setup lang="ts">
import CarouselInner from "./CarouselInner.vue";
import CarouselControl from "./CarouselControl.vue";

import {computed, onMounted, provide, Ref, ref, useModel} from "vue";
import CarouselIndicatorButton from "./CarouselIndicatorButton.vue";
import {CarouselProps, registerCarouselItem} from "./index";
import CarouselIndicators from "./CarouselIndicators.vue";

type DirectionType = 'start' | 'end';

const props = withDefaults(defineProps<CarouselProps>(), {
	tag: 'div',
	slide: true,
	indicators: true,
	controls: true
});

/**
 * @description States of the items
 */

const slideStates = ref<Ref<boolean>[]>([]);

/**
 * Register an item
 * Returns index of the item in an item array
 * @param item
 */

provide(registerCarouselItem, (item: Ref<boolean>): number => slideStates.value.push(item));

const activeItem = useModel(props, "modelValue");
const setActiveItem = (index: number) => {
	const item = slideStates.value[index];
	item.value = true;
	activeItem.value = index;
};

//if no active item is set, set the first item as active
onMounted(() => {
	const findActiveItem = slideStates.value.find((item, index) => item.value);
	if (!findActiveItem) {
		setActiveItem(0);
	} else {
		setActiveItem(slideStates.value.indexOf(findActiveItem));
	}
});

const direction = ref<DirectionType>("start");

provide('direction', direction);

const isSliding = ref<boolean>(false);
provide('isSliding', isSliding);

const showItem = (item: number | Ref<boolean>, dir?: DirectionType) => {
	if (isSliding.value) {
		return;
	}
	
	let nextItem: Ref<boolean>;
	const prevItem = slideStates.value[activeItem.value];
	
	if (typeof item === 'number') {
		if (item < 0 || item >= slideStates.value.length) {
			throw new Error("Invalid Index");
		}
		
		nextItem = slideStates.value[item];
	} else {
		nextItem = item;
	}
	
	if (activeItem.value === slideStates.value.indexOf(nextItem)) {
		return;
	}
	
	if (dir) {
		direction.value = dir;
	} else {
		const prevIndex = slideStates.value.indexOf(prevItem);
		const nextIndex = slideStates.value.indexOf(nextItem);
		
		direction.value = nextIndex > prevIndex ? "end" : "start";
	}
	
	prevItem.value = false;
	setActiveItem(slideStates.value.indexOf(nextItem));
};


const nextClicked = () => {
	const index = (activeItem.value === slideStates.value.length - 1) ? 0 : activeItem.value + 1;
	showItem(index, 'end');
};

const prevClicked = () => {
	const index = activeItem.value === 0 ? slideStates.value.length - 1 : activeItem.value - 1;
	
	showItem(index, 'start');
};

const classes = computed(() => [
	"carousel",
	{
		slide: props.slide,
		"carousel-fade": props.fade,
		"carousel-dark": props.dark,
	}
]);
</script>

<template>
	<component :is="tag" :class="classes">
		<CarouselIndicators v-if="indicators">
			<CarouselIndicatorButton
				v-for="(item, index) in slideStates"
				:key="index"
				:index="index"
				:aria-label="'Slide ' + (index + 1)"
				:active="index === activeItem"
				@click="showItem(index)"
			/>
		</CarouselIndicators>
		<CarouselInner>
			<slot/>
		</CarouselInner>
		<template v-if="controls">
			<CarouselControl @click="prevClicked" type="prev"/>
			<CarouselControl @click="nextClicked" type="next"/>
		</template>
	</component>
</template>