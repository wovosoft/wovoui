<template>
    <teleport to="body">
        <div ref="modal"
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
             :style="classStates.backdropStyle"
             :class="{show:classStates.backdropShow}"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts" setup>
import {computed, ref, watch, nextTick, PropType, onBeforeUnmount, onBeforeMount, reactive} from "vue";
import {
    ModalHeader, ModalBody, ModalTitle, ModalFooter, ButtonClose, Button, ModalDialog
} from "../../";
import {modalCount} from "../../composables/useHelpers";
import type {ModalFullScreen, ButtonSizes, ModalSizes, ColorVariants} from "../../types";
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
    size: {type: String as PropType<ModalSizes>, default: null},
    fullscreen: {type: [Boolean, String] as PropType<ModalFullScreen>, default: false}
});

const TRANSITION_TIME = 150;
const showBackdrop = ref<boolean>(false);
const shown = ref<boolean>(props.modelValue);
//May be triggering element
const mayBeTriEl = ref<Element | HTMLElement>(null);

const classStates = reactive({
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

const modal = ref<HTMLElement>(null);

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
            classStates.modalStatic = true;
            classStates.modalStyle['overflowY'] = "hidden";

            setTimeout(function () {
                if (classStates.modalStatic) {
                    classStates.modalStatic = false;
                    classStates.modalStyle['overflowY'] = "";
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
    //so when it is shown, lets focus the element
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
    document.addEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    document.addEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});

onBeforeUnmount(() => {
    document.removeEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
    document.removeEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
});
</script>
