<template>
    <teleport to="body" v-if="shouldShow">
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
 * e.g. <component v-tooltip="This is tooltip / vNode"></component>
 */

import {computed, nextTick, onBeforeUnmount, onBeforeUpdate, onMounted, PropType, ref} from "vue";
import type {TooltipPlacement, VariationPlacement} from "@/index";
import {createPopper} from "@popperjs/core";
import {makeString} from "@/composables";

const props = defineProps({
    target: {type: String as PropType<string>, default: null, required: true},  //should be id
    content: makeString(),
    placement: {type: String as PropType<VariationPlacement>, default: 'top'},
    opensOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'mouseenter'},
    closesOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'mouseleave'},
});

const element = ref<HTMLElement>();
const shouldShow = ref<boolean>(false);
/**
 * Popperjs Integration
 * do not use usePopper composable
 */
const popper = ref(null);
const tooltipDir = ref<TooltipPlacement>();

/**
 * Runs on nextTick, because this should run after both elements are available.
 * Probability: Re-consideration should be made about keeping popper js alive
 * after it is unmounted
 * eg; if(popper.value){popper.value.update()} else createPopper(...)
 * But point to be noted, this approach will consume memory for the popper instance.
 * @param isShowing
 */
function initializePopper(isShowing) {
    const target = targetElement();
    if (isShowing && target && element.value) {
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

}

const classes = computed(() => {
    /**
     * This returns Bad Performance.
     * loops infinitely.
     */
    // let placement=popper.value?.state.placement.startsWith('right')
    //     ? 'end'
    //     : popper.value?.state.placement.startsWith('left')
    //         ? 'start'
    //         : popper.value?.state.placement.split('-')[0]

    return [
        "tooltip", "fade", "bs-tooltip-" + tooltipDir.value, {
            "show": shouldShow.value,
        }
    ]
});

function targetElement() {
    return document?.getElementById(props.target);
}

function destroyPopper() {
    popper.value?.destroy();
    popper.value = null;
}

//hooks
onMounted(() => {
    const target = targetElement();
    if (target) {
        target.addEventListener(props.opensOn, show);
        target.addEventListener(props.closesOn, hide);
    }
});

/**
 * As the main components is mounted or unmounted based on the value of shouldShow,
 * the watcher can be replaced with onBeforeUpdate hook.
 * NOTE: DO NOT REMOVE, should be kept for logical reference.
 * Decision : I am not sure which one is better
 */
// watch(shouldShow, (value) => {
//     nextTick(() => initializePopper(value))
// });

onBeforeUpdate(() => {
    if (shouldShow.value) {
        nextTick(() => initializePopper(true))
    }
});

onBeforeUnmount(() => {
    const target = targetElement();
    if (target) {
        target.removeEventListener(props.opensOn, show);
        target.removeEventListener(props.closesOn, hide);
    }
    destroyPopper();
});

const show = () => shouldShow.value = true;
const hide = () => shouldShow.value = false;
const toggle = () => shouldShow.value = !shouldShow.value;

defineExpose({show, hide, toggle});
</script>