<template>
    <teleport to="body">
        <component
            :is="tag"
            ref="theCanvas"
            @transitionend.self="transitionEnded"
            :class="classes"
            :tabindex="tabIndex"
            :aria-labelledby="ariaLabelledby">
            <OffCanvasHeader
                :style="headerStyle"
                :class="headerClass"
                v-model="shown"
                v-if="$slots.header||header"
                :title="title">
                <slot name="header">
                    {{ header }}
                </slot>
            </OffCanvasHeader>
            <OffCanvasBody>
                <slot></slot>
            </OffCanvasBody>
        </component>
        <div v-if="showBackdrop && backdrop"
             @click="shown=false"
             ref="backdrop"
             class="offcanvas-backdrop fade"
        />
    </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from "vue";
import ButtonClose from "./ButtonClose";
import OffCanvasHeader from "./OffCanvasHeader.vue";
import OffCanvasBody from "./OffCanvasBody.vue";
import {ColorVariants} from "../types";

export default defineComponent({
    name: "OffCanvas",
    components: {OffCanvasBody, OffCanvasHeader, ButtonClose},
    emits: ["update:modelValue", "beforeShow", "beforeHide", "shown", "hidden"],
    props: {
        tabIndex: {type: Number as PropType<number>, default: -1},
        id: {type: String as PropType<string>, default: null},
        ariaLabelledby: {type: String as PropType<string>, default: null},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        placement: {type: String as PropType<'start' | 'left' | 'end' | 'right' | 'top' | 'bottom'>, default: 'start'},
        header: {type: String as PropType<string>, default: null},
        headerClass: {type: [Array, Object, String] as PropType<any>, default: null},
        headerStyle: {type: [Object, String] as PropType<object | string>, default: null},
        title: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        backdrop: {type: Boolean as PropType<boolean>, default: true},
        enableBodyScroll: {type: Boolean as PropType<boolean>, default: true},
        bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
        textVariant: {type: String as PropType<ColorVariants>, default: 'dark'},
    },
    setup(props) {
        const shown = ref(false);
        const showBackdrop = ref(false);
        watch(shown, value => {
            if (value && !props.enableBodyScroll) {
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = "17px";
            } else {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }
        });
        watch(() => props.modelValue, value => shown.value = value);
        return {
            shown,
            showBackdrop,
            classes: computed(() => {
                let placement = null;
                if (props.placement === "left" || props.placement === "start") {
                    placement = "start";
                } else if (props.placement === "right" || props.placement === "end") {
                    placement = "end"
                } else {
                    placement = props.placement;
                }

                return [
                    "offcanvas",
                    {
                        "show": shown.value,
                        ["offcanvas-" + placement]: !!placement,
                        ["bg-" + props.bgVariant]: props.bgVariant,
                        ["text-" + props.textVariant]: props.textVariant,
                    }
                ]
            })
        }
    },
    watch: {
        shown(value) {
            this.$emit('update:modelValue', value);
            if (value) {
                this.showBackdrop = true;
                this.$nextTick(function () {
                    this.$emit("beforeShow", value);
                    this.$refs.backdrop?.classList.add("show");
                    this.$refs.theCanvas.style.visibility = "visible";
                    // this.$refs.theCanvas.classList.add("show");
                })

            } else {
                // this.$refs.theCanvas.classList.remove("show");
                this.$refs.backdrop?.classList.remove("show");
                this.$emit("beforeHide", value);
            }
        }
    },
    methods: {
        transitionEnded() {
            if (!this.shown) {
                this.$refs.theCanvas.style.visibility = "hidden";
                this.showBackdrop = false;
                this.$emit("hidden", this.shown);
            } else {
                this.$emit("shown", this.shown);
            }
        },
        globalEventListener(e) {
            if (e.detail === this.id && this.id) {
                this.shown = !this.shown;
            }
        },
        //for parental access, eg by $refs
        show() {
            this.shown = true;
        },
        hide() {
            this.shown = false;
        },
        toggle() {
            this.shown = !this.shown;
        }
    },
    mounted() {
        this.transitionEnded();
        window.addEventListener("toggleOffCanvas", this.globalEventListener);
    },
    beforeUnmount() {
        window.removeEventListener("toggleOffCanvas", this.globalEventListener);
    }
})
</script>
