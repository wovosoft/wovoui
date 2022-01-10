<template>
    <teleport to="body">
        <component
            :is="tag"
            ref="theCanvas"
            @transitionend.self="transitionEnded"
            :class="classes"
            :tabindex="tabIndex"
            :aria-labelledby="id">
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

<script>
import {make, makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import {ref} from "vue";
import ButtonClose from "./ButtonClose.vue";
import OffCanvasHeader from "./OffCanvasHeader.vue";
import OffCanvasBody from "./OffCanvasBody.vue";

export default {
    name: "OffCanvas",
    components: {OffCanvasBody, OffCanvasHeader, ButtonClose},
    emits: ["update:modelValue", "beforeShow", "beforeHide", "shown", "hidden"],
    props: {
        tabIndex: makeNumber(-1),
        id: makeString(),
        modelValue: makeBoolean(false),
        placement: makeString("start"),
        header: makeString(),
        headerClass: make([Array, Object, String], null),
        headerStyle: make([Object, String], null),
        title: makeString(),
        tag: makeString("div"),
        backdrop: makeBoolean(true),
    },
    setup(props) {
        const shown = ref(false);
        const showBackdrop = ref(false);
        return {
            shown,
            showBackdrop
        }
    },
    computed: {
        classes() {
            let placement = null;
            if (this.placement === "left" || this.placement === "start") {
                placement = "start";
            } else if (this.placement === "right" || this.placement === "end") {
                placement = "end"
            } else {
                placement = this.placement;
            }
            return [
                "offcanvas",
                {
                    "show": this.shown,
                    ["offcanvas-" + placement]: !!placement

                }
            ]
        }
    },
    watch: {
        modelValue(value) {
            this.shown = value;
        },
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
}
</script>
