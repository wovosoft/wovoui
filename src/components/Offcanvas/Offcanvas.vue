<template>
    <teleport to="body">
        <component
            :is="tag"
            role="dialog"
            :ariaModal="shown"
            :class="classes"
            v-bind="$attrs">
            <OffCanvasHeader
                :style="headerStyle"
                :class="headerClass"
                v-model="shown"
                v-if="$slots.header||header"
                :btn-close-white="btnCloseWhite"
                :title="title">
                <slot name="header">
                    {{ header }}
                </slot>
            </OffCanvasHeader>
            <OffCanvasBody :style="bodyStyle" :class="bodyClass">
                <slot></slot>
            </OffCanvasBody>
        </component>
        <div v-if="activeBackdrop && backdrop"
             @click="hide()"
             :style="backdropStyle"
             class="offcanvas-backdrop fade"
             :class="{show : showBackdrop, ...backdropClass}"
        />
    </teleport>
</template>


<script lang="ts" setup>

const isShowing = ref<boolean>(false);  //for 'showing' class
const isHiding = ref<boolean>(false);   //for 'hiding' class
const isShown = ref<boolean>(false);    //for 'show' class
//constants
import {OFFCANVAS_TRANSITION_DURATION} from "../../composables/useTransition";
import {computed, PropType, ref, watch} from "vue";
import OffCanvasHeader from "./OffcanvasHeader.vue";
import OffCanvasBody from "./OffcanvasBody";

import type {ColorVariants, TooltipPlacement} from "../../types";


const props = defineProps({
    modelValue: {type: Boolean as PropType<boolean>, default: false},
    placement: {type: String as PropType<TooltipPlacement>, default: 'start'},
    header: {type: String as PropType<string>, default: null},
    headerClass: {type: [Array, Object, String] as PropType<any>, default: null},
    bodyClass: {type: [Array, Object, String] as PropType<any>, default: null},
    backdropClass: {type: [Array, Object, String] as PropType<any>, default: null},
    headerStyle: {type: [Object, String] as PropType<object | string>, default: null},
    bodyStyle: {type: [Object, String] as PropType<object | string>, default: null},
    backdropStyle: {type: [Object, String] as PropType<object | string>, default: null},
    title: {type: String as PropType<string>, default: null},
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "aside"},
    backdrop: {type: Boolean as PropType<boolean>, default: true},
    enableBodyScroll: {type: Boolean as PropType<boolean>, default: false},
    bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
    textVariant: {type: String as PropType<ColorVariants>, default: 'dark'},
    btnCloseWhite: {type: Boolean as PropType<boolean>, default: false},
    scrollbarPadding: {type: String as PropType<string>, default: "17px"}
});

const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
    (e: "showing", value: boolean): void;
    (e: "hiding", value: boolean): void;
    (e: "shown", value: boolean): void;
    (e: "hidden", value: boolean): void;
}>();


//data refs
const shown = ref<boolean>(false);              //inner state
const activeBackdrop = ref<boolean>(false);     //should backdrop be generated
const showBackdrop = ref<boolean>(false);       //for 'show' class of backdrop element

//watchers
watch(() => props.modelValue, value => shown.value = value);

//watcher for transition
watch(shown, value => value ? show() : hide());

const show = () => {
    activeBackdrop.value = true;
    showBackdrop.value = true;
    isShowing.value = true;

    if (!props.enableBodyScroll) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = props.scrollbarPadding;
    }

    emit("update:modelValue", true);
    emit("showing", true);

    setTimeout(() => {
        isShowing.value = false;
        isShown.value = true;
        emit("shown", true);
    }, OFFCANVAS_TRANSITION_DURATION);
};

const hide = () => {
    if (!props.enableBodyScroll) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }

    isHiding.value = true;
    showBackdrop.value = false;

    emit("update:modelValue", false);
    emit("hiding", true);


    setTimeout(() => {
        activeBackdrop.value = false;
        isHiding.value = false;
        isShown.value = false;
        emit("hidden", true);
    }, OFFCANVAS_TRANSITION_DURATION)
};

//main job is done by watcher
const toggle = () => shown.value = !shown.value;

//expose show, hide, toggle methods to be used in refs
//direct access to show/hide/toggle methods will trigger animation twitch, so changing shown object
//and watch the transition
defineExpose({
    show: () => shown.value = true,
    hide: () => shown.value = false,
    toggle
});

//computed
const classes = computed(() => {
    //converts start/left ==> start, right/end == end wrt. bootstrap >=5.5.5
    let placement = ['start', 'left'].includes(props.placement) ? "start"
        : ["right", "end"].includes(props.placement) ? "end" : props.placement;

    return [
        "offcanvas",
        {
            showing: isShowing.value,
            hiding: isHiding.value,
            show: isShown.value,
            ["offcanvas-" + placement]: !!placement,
            ["bg-" + props.bgVariant]: props.bgVariant,
            ["text-" + props.textVariant]: props.textVariant,
        }
    ]
});

</script>
