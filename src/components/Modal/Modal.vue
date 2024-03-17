<template>
    <teleport to="body">
        <component
            :is="tag"
            ref="modal"
            v-if="shouldMount"
            @keyup.esc="onEsc"
            :id="id"
            :class="classes"
            :style="classStates.modalStyle"
            tabindex="-1"
            :aria-hidden="!shown"
            :aria-modal="shown"
            :role="shown?'dialog':null">
            <ModalDialog :size="size" :centered="centered" :scrollable="scrollable" :fullscreen="fullscreen">
                <div class="modal-content"
                     v-on-click-outside="clickOutside"
                     :class="contentClass" ref="modalContent">
                    <ModalHeader
                        :variant="headerVariant"
                        v-if="!noHeader && ($slots.header || header || title)"
                        :tag="headerTag"
                        :shrink="shrink"
                        :class="headerClass"
                        v-bind="headerAttrs">
                        <slot name="header" v-if="$slots.header || title">
                            <ModalTitle
                                v-if="$slots.title||title"
                                :tag="titleTag"
                                v-bind="titleAttrs"
                                :class="titleClass">
                                <slot name="title">
                                    {{ title }}
                                </slot>
                            </ModalTitle>
                        </slot>
                        <template v-else>
                            {{ header }}
                        </template>
                        <ButtonClose :white="closeBtnWhite" v-if="!noClose" @click="onClose"/>
                    </ModalHeader>
                    <ModalBody :variant="bodyVariant" v-if="!noBody" :class="bodyClass">
                        <slot/>
                    </ModalBody>
                    <template v-else>
                        <slot/>
                    </template>
                    <ModalFooter v-if="!noFooter"
                                 :shrink="shrink"
                                 :variant="footerVariant"
                                 :class="footerClass">
                        <slot name="prepend_buttons"/>
                        <slot name="footer">
                            <Button v-if="!noCloseButton" @click="onClose"
                                    v-bind="{...closeButtonOptions,disabled:loading, size:shrink ? 'sm' : buttonSize}">
                                {{ closeTitle }}
                            </Button>
                            <Button v-if="!noOkButton" @click="onOk"
                                    v-bind="{...okButtonOptions,disabled:loading, size:shrink ? 'sm' : buttonSize}">
                                <Spinner :size="shrink ? 'sm' : buttonSize" v-if="loading"/>
                                {{ okTitle }}
                            </Button>
                        </slot>
                        <slot name="append_buttons"/>
                    </ModalFooter>
                </div>
            </ModalDialog>
        </component>
        <div v-if="!noBackdrop && showBackdrop"
             :style="classStates.backdropStyle"
             :class="{show:classStates.backdropShow}"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts" setup>
import {
    computed,
    CSSProperties,
    nextTick,
    onBeforeMount,
    onBeforeUnmount,
    reactive,
    ref,
    watch
} from "vue";
import {
    Button,
    ButtonClose,
    ModalBody,
    ModalDialog,
    ModalFooter,
    ModalHeader,
    ModalProps,
    ModalTitle
} from "@/components";
import {
    EVENT_TRIGGER_HIDE_NAME,
    EVENT_TRIGGER_SHOW_NAME,
    modalCount
} from "@/composables";

import vOnClickOutside from "@/directives/vOnClickOutside";
import {Spinner} from "@/components/Indicators";
import {ColorVariants} from "@/index";

const emit = defineEmits<{
    "update:modelValue": [value: any]
    "close": [value: any]
    "ok": [value: any]
    "showing": [value: any]
    "hiding": [value: any]
    "shown": [value: any]
    "hidden": [value: any]
    "stateChanged": [value: any]
}>();

const props = withDefaults(defineProps<ModalProps>(), {
    tag: 'div',
    animation: 'fade',
    titleTag: 'h5',
    headerTag: 'div',
    okTitle: 'Ok',
    closeTitle: 'Close',
    okButtonOptions: () => ({
        variant: 'primary' as ColorVariants
    }),
    closeButtonOptions: () => ({
        variant: 'secondary' as ColorVariants
    })
});

const TRANSITION_TIME = 150;
const showBackdrop = ref<boolean>(false);
const shown = ref<boolean>(props.modelValue);
//May be triggering element
const mayBeTriEl = ref<Element | HTMLElement | null>(null);

const classStates = reactive<{
    modalStatic: boolean,
    modalShow: boolean,
    backdropShow: boolean,
    modalStyle: CSSProperties,
    backdropStyle: CSSProperties,
}>({
    modalStatic: false,
    modalShow: false,
    backdropShow: false,
    modalStyle: {},
    backdropStyle: {},
});

const classes = computed(() => ["modal", {
    "fade": props.animation === "fade" || !props.animation,
    "modal-static": classStates.modalStatic,
    "show": classStates.modalShow
}]);

const modal = ref<HTMLElement | null>(null);

const isMountable = ref<boolean>(false);
const shouldMount = computed<boolean>(() => !props.lazy || isMountable.value);

const show = () => setState(true);
const hide = () => setState(false);
const toggle = () => setState(!shown.value);
defineExpose({
    show,
    hide,
    toggle,
});

watch(() => props.modelValue, value => {
    if (value !== shown.value) {
        setState(value);
    }
});

watch(shown, startAnimation);


function onClose(e: Event) {
    emit('close', e);
    if (!e?.defaultPrevented) {
        hide();
    }
}

function onOk(e: Event) {
    emit('ok', e);
    if (!e?.defaultPrevented) {
        hide();
    }
}

function onEsc(e: Event) {
    if (!props.noCloseOnEsc && !e.defaultPrevented) {
        hide();
    }
}


function clickOutside(e: Event & { target: HTMLElement }) {
    if (shown.value && modal.value?.isSameNode(e.target)) {
        if (props.static) {
            classStates.modalStatic = true;
            classStates.modalStyle['overflowY'] = "hidden";

            setTimeout(function () {
                if (classStates.modalStatic) {
                    classStates.modalStatic = false;
                    classStates.modalStyle['overflowY'] = undefined;
                }
            }, TRANSITION_TIME * 2)
        } else if (!props.noCloseOnBackdrop) {
            hide();
        }
    }
}


function setState(isShowing: boolean) {
    /**
     * before updating visibility state, emit showing/hiding event
     */

    if (isShowing) {
        emit("showing", true);
        //keep last focus element
        mayBeTriEl.value = document.activeElement;
    } else {
        emit("hiding", true);
    }

    nextTick(() => {
        /**
         * Events emitted, now update state
         */
        shown.value = isShowing;
        emit('stateChanged', isShowing)
    });
}

function setBodyAttrs() {
    document.body.classList.add("modal-open");
    document.body.style.paddingRight = "17px";
    document.body.style.overflow = "hidden";
}

function resetBodyAttrs() {
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
}

function startAnimation(isShown: boolean) {
    if (isShown) {
        isMountable.value = true;

        let count = modalCount(true);
        if (count > 1) {
            classStates.modalStyle['zIndex'] = (1155 * count).toString();
            setTimeout(() => classStates.backdropStyle['zIndex'] = (1155 * count - 105).toString(), 0);
        }

        showBackdrop.value = true;
        setTimeout(() => {
            setBodyAttrs();
            classStates.backdropShow = true;
            classStates.modalStyle['display'] = "block";
        }, 0);

        setTimeout(afterModalIsShown, TRANSITION_TIME);
    } else {
        classStates.modalStyle['zIndex'] = "";
        classStates.backdropStyle["zIndex"] = "";

        let count = modalCount(false);
        if (count < 1) {
            resetBodyAttrs();
        }
        //add show class to modal first, this will add hiding transition
        classStates.modalShow = false;

        setTimeout(afterModalIsHidden, TRANSITION_TIME);
    }
}


function afterModalIsShown() {
    //without focusing the main modal element, esc event doesn't work.
    //so when it is shown, let's focus on the element
    if (shown.value) {
        modal.value?.focus();
    }

    classStates.modalShow = true;
    emit("shown", true);
    emit('update:modelValue', true);
}

function afterModalIsHidden() {
    //MODAL HIDDEN: after transition completed, hide the modal which takes TRANSITION_TIME ms.
    classStates.modalStyle["display"] = "none";
    //add hiding transition to backdrop
    classStates.backdropShow = false;

    //after backdrop hiding transition, it can be removed
    setTimeout(() => {
        //Backdrop Hidden:
        showBackdrop.value = false;
        emit("hidden", true);
        emit('update:modelValue', false);
        isMountable.value = false;
        //@ts-ignore
        mayBeTriEl.value?.focus();
        //release memory: last focused element is no longer needed to be tracked
        mayBeTriEl.value = null;
    }, TRANSITION_TIME);
}

function globalShowHandler(e: CustomEvent) {
    if (e.detail === props.id) {
        show();
    }
}

//for hide from global scope
/**
 * document.dispatchEvent(new CustomEvent('bv-modal::trigger-hide',{detail:'#modal_id'}))
 * @param e
 */
function globalHideHandler(e: CustomEvent) {
    if (e.detail === props.id) {
        hide();
    }
}

onBeforeMount(() => {
    //@ts-ignore
    document.addEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    //@ts-ignore
    document.addEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});

onBeforeUnmount(() => {
    //@ts-ignore
    document.removeEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    //@ts-ignore
    document.removeEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});

/**
 * In some cases, when a page is refreshed and modal is used in that page,
 * the style="padding-right: 17px; overflow: hidden;" on body tag is not removed.
 * So, this needs to be removed manually in that case.
 */
// onUnmounted(() => {
// 	const count = modalCount(null);
//
// 	console.log(count)
// 	if (count < 1) {
// 		console.log("Modal Count is 0, so reset body attrs");
// 		resetBodyAttrs();
// 	}
// });
</script>
