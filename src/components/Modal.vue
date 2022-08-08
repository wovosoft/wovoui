<template>
    <teleport to="body">
        <div ref="modal"
             @transitionend="transitionEnded"
             :class="classes"
             tabindex="-1"
             :aria-hidden="shown"
             :role="shown?'dialog':null">
            <div :class="dialogClass">
                <div class="modal-content">
                    <ModalHeader
                        v-if="!noHeader && ($slots.header || header || title)"
                        :tag="headerTag"
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
                        <ButtonClose :white="closeBtnWhite" v-if="!noClose" @click="close"/>
                    </ModalHeader>
                    <ModalBody v-if="!noBody" :class="bodyClass">
                        <slot></slot>
                    </ModalBody>
                    <template v-else>
                        <slot></slot>
                    </template>
                    <ModalFooter v-if="!noFooter" :class="footerClass">
                        <slot name="prepend_buttons"></slot>
                        <slot name="footer">
                            <Button v-if="!noCloseButton"
                                    variant="secondary"
                                    v-bind="closeButtonOptions"
                                    :size="buttonSize"
                                    @click="close">
                                {{ closeTitle }}
                            </Button>
                            <Button v-if="!noOkButton"
                                    variant="primary"
                                    v-bind="okButtonOptions"
                                    :size="buttonSize"
                                    @click="ok">
                                {{ okTitle }}
                            </Button>
                        </slot>
                        <slot name="append_buttons"></slot>
                    </ModalFooter>
                </div>
            </div>
        </div>
        <div v-if="!noBackdrop && shouldShowBackdrop"
             ref="backdrop"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts">
import {computed, ref, watch, nextTick, defineComponent, PropType} from "vue";
import ButtonClose from "./ButtonClose";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import ModalFooter from "./ModalFooter";
import Button from "./Button";
import type {modalFullScreen} from "../types/modalFullScreen";
import type {buttonSizes} from "../types/buttonSizes";
import {modalSizes} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "Modal",
    components: {Button, ModalFooter, ModalTitle, ModalHeader, ModalBody, ButtonClose},
    emits: ["update:modelValue", "close", "ok", "showing", "hiding", "shown", "hidden", "stateChanged"],
    props: {
        animation: {type: String as PropType<string>, default: "fade"},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        noClose: {type: Boolean as PropType<boolean>, default: false},
        closeBtnWhite: {type: Boolean as PropType<boolean>, default: false},
        noBody: {type: Boolean as PropType<boolean>, default: false},
        bodyClass: {type: [Array, String, Object] as PropType<any>, default: null},

        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h5"},
        titleClass: {type: [Array, String, Object] as PropType<string | object | any[]>, default: null},
        titleAttrs: {type: Object as PropType<object>, default: null},

        noHeader: {type: Boolean as PropType<boolean>, default: false},
        header: {type: String as PropType<string>, default: null},
        headerTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        headerClass: {type: [Array, String, Object] as PropType<any>, default: null},
        headerAttrs: {type: Object as PropType<object>, default: null},

        noFooter: {type: Boolean as PropType<boolean>, default: false},
        footerClass: {type: [Array, String, Object] as PropType<any>, default: null},

        //buttons
        okTitle: {type: String as PropType<string>, default: "Ok"},
        closeTitle: {type: String as PropType<string>, default: "Close"},
        okButtonOptions: {type: Object as PropType<object>, default: null},
        closeButtonOptions: {type: Object as PropType<object>, default: null},
        noOkButton: {type: Boolean as PropType<boolean>, default: false},
        noCloseButton: {type: Boolean as PropType<boolean>, default: false},

        static: {type: Boolean as PropType<boolean>, default: false},
        noBackdrop: {type: Boolean as PropType<boolean>, default: false},
        buttonSize: {type: String as PropType<buttonSizes>, default: null},

        scrollable: {type: Boolean as PropType<boolean>, default: false},
        centered: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<modalSizes>, default: null},
        fullscreen: {type: [Boolean, String] as PropType<modalFullScreen>, default: false}
    },
    setup(props, {emit}) {
        const shouldShowBackdrop = ref<boolean>(false);
        const shown = ref<boolean>(props.modelValue);
        const classes = computed(() => ["modal", {
            "fade": props.animation === "fade" || !props.animation,
        }]);

        const dialogClass = computed(() => ["modal-dialog", {
            ["modal-" + props.size]: props.size,
            ["modal-fullscreen" + (typeof props.fullscreen === 'string' ? ("-" + props.fullscreen) : "")]: !!props.fullscreen,
            "modal-dialog-scrollable": props.scrollable,
            "modal-dialog-centered": props.centered
        }]);
        watch(() => props.modelValue, (value) => shown.value = value);
        watch(shown, value => emit('update:modelValue', value));
        const toggleState = (value?: boolean) => {
            if (value) {
                emit("showing", true);
            } else {
                emit("hiding", true);
            }

            shown.value = value;
            if (value) {
                emit("shown", true);
            } else {
                emit("hidden", true);
            }
            emit('stateChanged', value);
        }
        const show = () => toggleState(true);
        const hide = () => toggleState(false);
        const toggle = () => toggleState(!shown.value);

        return {
            classes,
            dialogClass,
            shouldShowBackdrop,
            shown,
            toggle,
            toggleState,
            show,
            hide,
            close() {
                //emits before closing
                emit('close', true);
                //then hides modal
                nextTick(() => toggleState(false));
            },
            ok(e) {
                //emits before closing
                emit('ok', e);
                //then hides modal
                if (!e.defaultPrevented) {
                    nextTick(() => toggleState(false));
                }
            }
        }
    },
    methods: {
        transitionEnded(e) {
            if (this.$refs.modal.classList.contains("modal-static")) {
                this.$refs.modal.classList.remove("modal-static");
                this.$refs.modal.style.overflowY = "";
            }
        },
        clickOutside(e) {
            if (e.target === this.$refs.modal) {
                if (this.static) {
                    this.$refs.modal.classList.add("modal-static");
                    this.$refs.modal.style.overflowY = "hidden";
                } else {
                    this.hide();
                }
            }

        }
    },

    watch: {
        shown(shown) {
            let modal = this.$refs.modal;
            if (shown) {
                /**
                 * In case there are multiple modals are open,
                 * when
                 */
                if (!document.body.hasAttribute("data-count-modal")) {
                    document.body.setAttribute("data-count-modal", "1");
                } else {
                    document.body.setAttribute(
                        "data-count-modal",
                        (Number(document.body.getAttribute("data-count-modal")) + 1).toString()
                    );
                }
                let count = Number(document.body.getAttribute("data-count-modal"));
                /**
                 * When there are multiple modals, each modal should be on top along with backdrop than the
                 * previous one
                 * default, backdrop zIndex=1050
                 * default, modal zIndex=1155
                 * so next, backdrop and modal's zIndex should be greater than 1155
                 * backdrop zIndex = count * 1155
                 */
                if (count > 1) {
                    modal.style.zIndex = (1155 * count).toString();
                    setTimeout(() => this.$refs.backdrop.style.zIndex = (1155 * count - 105).toString(), 0);
                }

                this.shouldShowBackdrop = true;
                document.body.classList.add("modal-open");
                document.body.style.paddingRight = "17px";
                document.body.style.overflow = "hidden";
                setTimeout(() => this.$refs.backdrop.classList.add('show'), 0);
                modal.style.display = "block"
                setTimeout(() => modal.classList.add("show"), 150);
                setTimeout(() => document.addEventListener("click", this.clickOutside), 0)
            } else {
                document.removeEventListener("click", this.clickOutside);
                /**
                 * In case there are multiple modals are open,
                 * when
                 */
                if (document.body.hasAttribute("data-count-modal")) {
                    if (Number(document.body.getAttribute("data-count-modal")) > 1) {
                        document.body.setAttribute(
                            "data-count-modal",
                            (Number(document.body.getAttribute("data-count-modal")) - 1).toString()
                        );
                    } else {
                        document.body.removeAttribute("data-count-modal");
                    }
                }
                modal.style.zIndex = "";
                this.$refs.backdrop.style.zIndex = "";

                let count = Number(document.body.getAttribute("data-count-modal"));
                if (count < 1) {
                    document.body.classList.remove("modal-open");
                    document.body.style.paddingRight = "";
                    document.body.style.overflow = "";
                }
                modal.classList.remove("show")
                setTimeout(() => modal.style.display = "none", 150);
                setTimeout(() => {
                    this.$refs.backdrop.classList.remove('show');
                    setTimeout(() => this.shouldShowBackdrop = false, 150);
                }, 150);
            }
        }
    }
})
</script>