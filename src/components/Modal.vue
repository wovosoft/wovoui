<template>
    <teleport to="body">
        <div ref="modal"
             @click.self="clickedOutside"
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
                        <ButtonClose v-if="!noClose" @click="close"/>
                    </ModalHeader>
                    <ModalBody v-if="!noBody">
                        <slot></slot>
                    </ModalBody>
                    <template v-else>
                        <slot></slot>
                    </template>
                    <ModalFooter v-if="!noFooter">
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
                    </ModalFooter>
                </div>
            </div>
        </div>
        <div v-if="!noBackdrop && shouldShowBackdrop"
             ref="backdrop"
             @click="hide"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts">
import {make, makeString} from "../shared/properties.js";
import {computed, ref, watch, nextTick, defineComponent, PropType} from "vue";
import ButtonClose from "./ButtonClose.vue";
import ModalBody from "./ModalBody.vue";
import ModalHeader from "./ModalHeader.vue";
import ModalTitle from "./ModalTitle.vue";
import ModalFooter from "./ModalFooter.vue";
import Button from "./Button.vue";
import {modalFullScreen} from "../types/modalFullScreen";

export default defineComponent({
    name: "Modal",
    components: {Button, ModalFooter, ModalTitle, ModalHeader, ModalBody, ButtonClose},
    emits: ["update:modelValue", "close", "ok", "showing", "hiding", "shown", "hidden", "stateChanged"],
    props: {
        animation: makeString("fade"),
        modelValue: {type: Boolean as PropType<true | false>, default: false},
        noClose: {type: Boolean as PropType<true | false>, default: false},
        noBody: {type: Boolean as PropType<true | false>, default: false},

        title: makeString(),
        titleTag: makeString("h5"),
        titleClass: make([Array, String, Object], null),
        titleAttrs: make(Object, null),

        noHeader: {type: Boolean as PropType<true | false>, default: false},
        header: makeString(),
        headerTag: makeString("div"),
        headerClass: make([Array, String, Object], null),
        headerAttrs: make(Object, null),

        noFooter: {type: Boolean as PropType<true | false>, default: false},

        //buttons
        okTitle: makeString('Ok'),
        closeTitle: makeString("Close"),
        okButtonOptions: make(Object, null),
        closeButtonOptions: make(Object, null),
        noOkButton: {type: Boolean as PropType<true | false>, default: false},
        noCloseButton: {type: Boolean as PropType<true | false>, default: false},

        static: {type: Boolean as PropType<true | false>, default: false},
        noBackdrop: {type: Boolean as PropType<true | false>, default: false},
        buttonSize: makeString(),

        scrollable: {type: Boolean as PropType<true | false>, default: false},
        centered: {type: Boolean as PropType<true | false>, default: false},
        size: makeString(),
        fullscreen: {type: [Boolean, String] as PropType<modalFullScreen>, default: false}
    },
    setup(props, context) {
        const shouldShowBackdrop = ref(false);
        const shown = ref(props.modelValue);
        const classes = computed(() => {
            return [
                "modal",
                {
                    "fade": props.animation === "fade" || !props.animation,
                }
            ]
        });

        const dialogClass = computed(() => {
            return [
                "modal-dialog",
                {
                    ["modal-" + props.size]: !!props.size,
                    ["modal-fullscreen" + (typeof props.fullscreen === 'string' ? ("-" + props.fullscreen) : "")]: !!props.fullscreen,
                    "modal-dialog-scrollable": props.scrollable,
                    "modal-dialog-centered": props.centered
                }
            ];
        });
        watch(() => props.modelValue, (value) => shown.value = value);
        watch(shown, value => context.emit('update:modelValue', value));
        const toggleState = (value = null) => {
            if (typeof value === "boolean") {
                if (value) {
                    context.emit("showing", true);
                } else {
                    context.emit("hiding", true);
                }
                shown.value = value;
                if (value) {
                    context.emit("shown", true);
                } else {
                    context.emit("hidden", true);
                }
                context.emit('stateChanged', value);
            }
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
                context.emit('close', true);
                //then hides modal
                nextTick(() => toggleState(false));
            },
            ok() {
                //emits before closing
                context.emit('ok', true);
                //then hides modal
                nextTick(() => toggleState(false));
            }
        }
    },
    methods: {
        clickedOutside() {
            if (this.static && this.shown) {
                let modal = this.$refs.modal;
                modal.classList.add("modal-static");
                modal.style.display = "block";
                modal.style.overflowY = "hidden";
                setTimeout(() => {
                    modal.style.overflowY = "";
                    modal.classList.remove("modal-static");
                }, 300);
            } else if (!this.shown) {
                this.hide();
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
            } else {
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