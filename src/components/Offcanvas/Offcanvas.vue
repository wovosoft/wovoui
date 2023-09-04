<template>
    <teleport to="body">
        <component
            :is="tag"
            @keyup.esc.self="onEsc"
            ref="theElement"
            role="dialog"
            :ariaModal="shown"
            :class="classes"
            :tabindex="shown?-1:null"
            v-bind="$attrs">
            <OffcanvasHeader
                :style="headerStyle"
                :class="headerClass"
                v-model="shown"
                v-if="$slots.header||header"
                :btn-close-white="btnCloseWhite"
                :title="title">
                <slot name="header">
                    {{ header }}
                </slot>
            </OffcanvasHeader>
            <OffcanvasBody :style="bodyStyle" :class="bodyClass">
                <slot></slot>
            </OffcanvasBody>
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
import type {ColorVariants, TooltipPlacement} from "@/index";
import {makeBoolean, makeString} from "@/composables";
//constants
import {getTransitionDurationFromElement} from "@/composables";
import {computed, PropType, ref, watch} from "vue";
import {OffcanvasBody, OffcanvasHeader} from "@/components";


const isShowing = ref<boolean>(false);  //for 'showing' class
const isHiding = ref<boolean>(false);   //for 'hiding' class
const isShown = ref<boolean>(false);    //for 'show' class

const props = defineProps({
    modelValue: makeBoolean(false),
    placement: {type: String as PropType<TooltipPlacement>, default: 'start'},
    header: makeString(),
    headerClass: {type: [Array, Object, String] as PropType<any>, default: null},
    bodyClass: {type: [Array, Object, String] as PropType<any>, default: null},
    backdropClass: {type: [Array, Object, String] as PropType<any>, default: null},
    headerStyle: {type: [Object, String] as PropType<object | string>, default: null},
    bodyStyle: {type: [Object, String] as PropType<object | string>, default: null},
    backdropStyle: {type: [Object, String] as PropType<object | string>, default: null},
    title: makeString(),
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "aside"},
    backdrop: makeBoolean(true),
    enableBodyScroll: makeBoolean(false),
    bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
    textVariant: {type: String as PropType<ColorVariants>, default: 'dark'},
    btnCloseWhite: makeBoolean(false),
    scrollbarPadding: {type: String as PropType<string>, default: "17px"},
    noCloseOnEsc: makeBoolean(false)
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

const theElement = ref<HTMLElement>();
//May Be Triggering Element of the Offcanvas element
const mayBeTriEl = ref<Element | HTMLElement>();
const show = () => {
    mayBeTriEl.value = document.activeElement;
    
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
        //try focusing the main element
        //in order to focus the div element, it needs to have tabindex property set
        //it is set at template
        theElement.value?.focus();
    }, getTransitionDurationFromElement(theElement.value));
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
        //@ts-ignore
        //focus back to the last active element
        //technically this is the triggering element of the offcanvas component
        mayBeTriEl.value?.focus();
        //release the memory
        mayBeTriEl.value = null;
    }, getTransitionDurationFromElement(theElement.value));
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
    //converts start/left ==> start, right/end == end wrt. bootstrap >=5.5.2
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

function onEsc(e) {
    if (!props.noCloseOnEsc && !e.defaultPrevented) {
        hide();
    }
}
</script>
