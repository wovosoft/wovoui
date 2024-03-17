<template>
	<SafeTeleport :to="to||container">
		<div
			v-if="shouldGenerate"
			ref="element"
			v-bind="$attrs"
			:class="classes"
			role="alert"
			aria-live="assertive"
			aria-atomic="true">
			<div class="toast-header" v-if="$slots.header || header">
				<slot name="header">
					<strong class="me-auto">{{ header }}</strong>
				</slot>
				<ButtonClose v-if="!noCloseButton" @click="visible = false"/>
			</div>
			<SafeComponent :component="ToastBody" :model-value="!noBody">
				<slot/>
			</SafeComponent>
		</div>
	</SafeTeleport>
</template>

<script lang="ts" setup>

import {computed, onBeforeUnmount, ref, watch} from "vue";
import {ButtonClose, ToastBody, ToastProps} from "@/components";
import {getTransitionDurationFromElement} from "@/composables/useHelpers";
import SafeTeleport from "../Internal/SafeTeleport";
import SafeComponent from "@/components/Internal/SafeComponent";

defineOptions({
	inheritAttrs: false
});

const props = withDefaults(defineProps<ToastProps>(),{
    fade: true,
    timeout: 3
});

const emit = defineEmits<{
	(e: "update:show", value: boolean): void
	(e: "update:modelValue", value: boolean): void
	
	(e: "shown", value: boolean): void
	(e: "hidden", value: boolean): void
	(e: "showing", value: boolean): void
	(e: "hiding", value: boolean): void
}>();

const visible = ref<boolean>(!!props.modelValue);
const showing = ref<boolean>(false);
const shouldGenerate = computed(() => !props.lazy || (visible.value && props.lazy));

//when show is defined
if (props.show != null) {
	visible.value = props.show;
}

watch(() => props.show, value => {
	if (value !== visible.value) {
		visible.value = value;
	}
});

watch(() => props.modelValue, value => {
	if (value !== visible.value) {
		visible.value = value;
	}
});

let timer: number | null = null;

function setTimer() {
	timer = setTimeout(() => {
		visible.value = false;
	}, props.timeout * 1000);
}

function clearTimer() {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	}
}

onBeforeUnmount(clearTimer);

const element = ref<HTMLElement>();

watch(visible, (value) => {
	if (!element?.value) {
		return;
	}
	
	if (value) {
		//when showing
		// shouldGenerate.value=!props.lazy || (visible.value && props.lazy);
		emit("showing", true);
		showing.value = true;
		setTimeout(() => {
			showing.value = false;
			emit("update:modelValue", true);
			emit("update:show", true);
			emit("shown", true);
			
			//when auto hide is disabled.
			if (props.timeout <= 0 || !props.timeout) {
				clearTimer();
			} else {
				setTimer();
			}
		}, getTransitionDurationFromElement(element.value));
	} else {
		emit("hiding", true);
		showing.value = true;
		setTimeout(() => {
			showing.value = false;
			emit("update:modelValue", false);
			emit("update:show", false);
			emit("hidden", true);
			clearTimer();
			//when hiding
			// shouldGenerate.value=!props.lazy || (visible.value && props.lazy);
		}, getTransitionDurationFromElement(element.value));
	}
});

defineExpose({
	show: () => (visible.value = true),
	hide: () => (visible.value = false),
	toggle: () => (visible.value = !visible.value),
});

const classes = computed(() => [
	"toast",
	{
		show: visible.value,
		hide: !visible.value,
		showing: showing.value,
		fade: props.fade,
		["bg-" + props.variant]: props.variant,
	},
]);
</script>
