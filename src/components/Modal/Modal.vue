<template>
    <teleport to="body">
        <div ref="modal"
             v-if="shouldMount"
             @keyup.esc="onEsc"
             :id="id"
             :class="classes"
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
                            <Button v-if="!noCloseButton"
                                    v-bind="closeButtonOptions"
                                    :size="shrink ? 'sm' : buttonSize"
                                    @click="onClose">
                                {{ closeTitle }}
                            </Button>
                            <Button v-if="!noOkButton"
                                    v-bind="okButtonOptions"
                                    :size="shrink ? 'sm' : buttonSize"
                                    @click="onOk">
                                {{ okTitle }}
                            </Button>
                        </slot>
                        <slot name="append_buttons"/>
                    </ModalFooter>
                </div>
            </ModalDialog>
        </div>
        <div v-if="!noBackdrop && showBackdrop"
             ref="backdrop"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts" setup>
import {computed, ref, watch, nextTick, PropType, onBeforeUnmount, onBeforeMount} from "vue";
import {
    ModalHeader, ModalBody, ModalTitle, ModalFooter, ButtonClose, Button,
    ModalDialog
} from "../../index";
import {modalCount} from "../../composables/useHelpers";
import type {modalFullScreen, ButtonSizes, modalSizes, ColorVariants} from "../../types";
import vOnClickOutside from "../../directives/vOnClickOutside";
import {EVENT_TRIGGER_HIDE_NAME, EVENT_TRIGGER_SHOW_NAME} from "../../composables/useModal";


const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
    (e: "close", value: boolean): void;
    (e: "ok", value: boolean): void;
    (e: "showing", value: boolean): void;
    (e: "hiding", value: boolean): void;
    (e: "shown", value: boolean): void;
    (e: "hidden", value: boolean): void;
    (e: "stateChanged", value: boolean): void;
}>();

const props = defineProps({
    id: {type: String as PropType<string>, default: null},
    animation: {type: String as PropType<string>, default: "fade"},
    shrink: {type: Boolean as PropType<boolean>, default: false},
    //null refers to initial value
    modelValue: {type: Boolean as PropType<boolean>, default: null},
    noClose: {type: Boolean as PropType<boolean>, default: false},
    closeBtnWhite: {type: Boolean as PropType<boolean>, default: false},
    noBody: {type: Boolean as PropType<boolean>, default: false},
    lazy: {type: Boolean as PropType<boolean>, default: false},
    bodyClass: {type: [Array, String, Object] as PropType<any>, default: null},
    bodyVariant: {
        type: String as PropType<ColorVariants>,
        default: null
    },
    contentClass: {type: [Array, String, Object] as PropType<any>, default: null},

    title: {type: String as PropType<string>, default: null},
    titleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h5"},
    titleClass: {type: [Array, String, Object] as PropType<string | object | any[]>, default: null},
    titleAttrs: {type: Object as PropType<object>, default: null},

    //header props
    noHeader: {type: Boolean as PropType<boolean>, default: false},
    header: {type: String as PropType<string>, default: null},
    headerTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    headerClass: {type: [Array, String, Object] as PropType<any>, default: null},
    headerAttrs: {type: Object as PropType<object>, default: null},
    headerVariant: {
        type: String as PropType<ColorVariants>,
        default: null
    },


    noFooter: {type: Boolean as PropType<boolean>, default: false},
    footerClass: {type: [Array, String, Object] as PropType<any>, default: null},
    footerVariant: {
        type: String as PropType<ColorVariants>,
        default: null
    },

    //buttons
    okTitle: {type: String as PropType<string>, default: "Ok"},
    closeTitle: {type: String as PropType<string>, default: "Close"},
    okButtonOptions: {
        type: Object as PropType<object>,
        default: () => ({
            variant: 'primary'
        })
    },
    closeButtonOptions: {
        type: Object as PropType<object>,
        default: () => ({
            variant: 'secondary'
        })
    },
    noOkButton: {type: Boolean as PropType<boolean>, default: false},
    noCloseButton: {type: Boolean as PropType<boolean>, default: false},
    noCloseOnBackdrop: {type: Boolean as PropType<boolean>, default: false},
    noCloseOnEsc: {type: Boolean as PropType<boolean>, default: false},

    static: {type: Boolean as PropType<boolean>, default: false},
    noBackdrop: {type: Boolean as PropType<boolean>, default: false},
    buttonSize: {type: String as PropType<ButtonSizes>, default: null},

    //modal dialog props
    scrollable: {type: Boolean as PropType<boolean>, default: false},
    centered: {type: Boolean as PropType<boolean>, default: false},
    size: {type: String as PropType<modalSizes>, default: null},
    fullscreen: {type: [Boolean, String] as PropType<modalFullScreen>, default: false}
});

const TRANSITION_TIME = 150;
const showBackdrop = ref<boolean>(false);
const shown = ref<boolean>(props.modelValue);
const classes = computed(() => ["modal", {
    "fade": props.animation === "fade" || !props.animation,
}]);


const modal = ref<HTMLElement>(null)
const backdrop = ref<HTMLElement>(null);

const isMountable = ref<boolean>(false);
const shouldMount = computed<boolean>(() => !props.lazy || isMountable.value);

const show = () => setState(true);
const hide = () => setState(false);
const toggle = () => setState(!shown.value);

watch(() => props.modelValue, setState);
watch(shown, startAnimation);

defineExpose({
    show,
    hide,
    toggle,
});

function onClose(e) {
    emit('close', true);
    if (!e.defaultPrevented) {
        hide();
    }
}

function onOk(e) {
    emit('ok', e);
    if (!e.defaultPrevented) {
        hide();
    }
}


function onEsc(e) {
    if (!props.noCloseOnEsc && !e.defaultPrevented) {
        hide();
    }
}


function clickOutside(e) {
    if (shown.value && modal.value.isSameNode(e.target)) {
        if (props.static) {
            modal.value.classList.add("modal-static");
            modal.value.style.overflowY = "hidden";
            setTimeout(() => {
                if (modal.value.classList.contains("modal-static")) {
                    modal.value.classList.remove("modal-static");
                    modal.value.style.overflowY = "";
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
    } else if (props.modelValue !== isShowing) {
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


function startAnimation(isShown: boolean) {
    if (isShown) {
        isMountable.value = true;

        let count = modalCount(true);
        if (count > 1) {
            modal.value.style.zIndex = (1155 * count).toString();
            setTimeout(() => backdrop.value.style.zIndex = (1155 * count - 105).toString(), 0);
        }

        showBackdrop.value = true;

        setTimeout(() => {
            document.body.classList.add("modal-open");
            document.body.style.paddingRight = "17px";
            document.body.style.overflow = "hidden";
            backdrop.value.classList.add('show');
            modal.value.style.display = "block";
        }, 0);

        setTimeout(afterModalIsShown, TRANSITION_TIME);
    } else {
        // document.removeEventListener("click", clickOutside);
        modal.value.style.zIndex = "";
        backdrop.value.style.zIndex = "";

        let count = modalCount(false);
        if (count < 1) {
            document.body.classList.remove("modal-open");
            document.body.style.paddingRight = "";
            document.body.style.overflow = "";
        }
        //add show class to modal first, this will add hiding transition
        modal.value.classList.remove("show");

        setTimeout(afterModalIsHidden, TRANSITION_TIME);
    }
}


function afterModalIsShown() {
    //without focusing the main modal element, esc event doesn't work.
    //so when it is shown, lets focus the element
    if (shown.value) {
        modal.value?.focus();
    }


    modal.value.classList.add("show");
    emit("shown", true);
    emit('update:modelValue', true);
}

function afterModalIsHidden() {
    //MODAL HIDDEN: after transition completed, hide the modal which takes TRANSITION_TIME ms.
    modal.value.style.display = "none";
    //add hiding transition to backdrop
    backdrop.value.classList.remove('show');

    //after backdrop hiding transition, it can be removed
    setTimeout(() => {
        //Backdrop Hidden:
        showBackdrop.value = false;
        emit("hidden", true);
        emit('update:modelValue', false);
        isMountable.value = false;
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
    document.addEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    document.addEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});

onBeforeUnmount(() => {
    document.removeEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    document.removeEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});
</script>
