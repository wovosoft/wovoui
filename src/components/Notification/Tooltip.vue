<template>
    <teleport to="body">
        <div :class="classes" ref="element" role="tooltip">
            <div data-popper-arrow class="tooltip-arrow"></div>
            <div class="tooltip-inner" ref="inner">
                <slot>{{ content }}</slot>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts" setup>
/**
 * TODO: Directive support should be added
 */

import {computed, onBeforeUnmount, onMounted, PropType, ref, watch} from "vue";
import type {TooltipPlacement, VariationPlacement} from "../../types";
import {createPopper} from "@popperjs/core";

const props = defineProps({
    target: {type: String as PropType<string>, default: null, required: true},  //should be id
    content: {type: String as PropType<string>, default: null},
    placement: {type: String as PropType<VariationPlacement>, default: 'top'},
    opensOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'focusin'},
    closesOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'focusout'},
});

const show = () => shouldShow.value = true;
const hide = () => shouldShow.value = false;
const toggle = () => shouldShow.value = !shouldShow.value;

defineExpose({show, hide, toggle});

const element = ref<HTMLElement>();
const shouldShow = ref<boolean>(false);

/**
 * Popperjs Integration
 * do not use usePopper composable
 */
const popper = ref(null);
const tooltipDir = ref<TooltipPlacement>();
watch(shouldShow, value => {
    const target = targetElement();
     if (value && target && element.value) {
        popper.value = createPopper(
            target,
            element.value,
            {
                placement: props.placement,
                modifiers: [
                    {
                        name: 'topLogger',
                        enabled: true,
                        phase: 'main',
                        fn({state}) {
                            //@ts-ignore
                            tooltipDir.value = state.placement.startsWith('right')
                                ? 'end'
                                : state.placement.startsWith('left')
                                    ? 'start'
                                    : state.placement.split('-')[0];
                        },
                    }
                ],
            }
        );
    }
})

const classes = computed(() => [
    "tooltip", "fade", "bs-tooltip-" + tooltipDir.value, {
        "show": shouldShow.value,
        "d-none": !shouldShow.value
    }
]);

function targetElement() {
    return document?.getElementById(props.target);
}


//hooks
onMounted(() => {
    const target = targetElement();
    if (target) {
        target.addEventListener(props.opensOn, show);
        target.addEventListener(props.closesOn, hide);
    }
});

onBeforeUnmount(() => {
    const target = targetElement();
    if (target) {
        target.removeEventListener(props.opensOn, show);
        target.removeEventListener(props.closesOn, hide);
    }
    popper.value?.destroy();
});

</script>