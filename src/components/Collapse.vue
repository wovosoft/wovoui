<template>
    <Button
        v-if="$slots.toggleText || toggleText"
        ref="toggle"
        :variant="toggleVariant"
        :aria-expanded="shown"
        @click="updateState(!shown)">
        <slot name="toggleText">
            {{ toggleText }}
        </slot>
    </Button>
    <div :class="classes" ref="collapse"
         :id="id"
         @transitionend.self="collapseTransitionEnd($event,shown,'height')">
        <slot></slot>
    </div>
</template>

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import Button from "./Button.vue";
import {computed, ref} from "vue";
import {toggleCollapse, collapseTransitionEnd} from "../shared/utilities.js";

export default {
    name: "Collapse",
    components: {Button},
    props: {
        toggleText: {
            default: null
        },
        toggleClass: make([Array, String], null),
        toggleVariant: makeString("secondary"),
        modelValue: makeBoolean(false),
        visible: makeBoolean(false),
        class: make([Array, String], null),
        id: makeString(),
        isNav: makeBoolean(false)
        // lazy: makeBoolean(false)
    },
    watch: {
        modelValue(value) {
            this.shown = value;
        },
        //model value might not be defined, so watching separate one
        shown(value) {
            this.$refs.collapse.classList.remove("collapse", "show");
            this.toggleCollapse(this.$refs.collapse, value, 'height',/*this.shouldRenderHandler*/);
        }
    },
    setup(props, context) {
        const shouldRender = ref(true);
        const shown = ref(props.modelValue);
        if (props.visible) {
            context.emit('update:modelValue', true);
        }
        // const shouldRenderHandler = (value) => {
        //     shouldRender.value = value;
        // }
        const classes = computed(() => {
            return [
                "collapse",
                props.class,
                {
                    "navbar-collapse": props.isNav
                }
            ]
        });
        return {
            classes,
            shown,
            shouldRender,
            // shouldRenderHandler,
            toggleCollapse,
            collapseTransitionEnd,
            updateState: (value) => {
                shown.value = value;
                context.emit('update:modelValue', value);
            },
        }
    },
    methods: {
        listener(e) {
            if (e.detail === this.id && this.id) {
                let value = !this.shown
                this.shown = value;
                this.$emit("update:modelValue", value);
            }
        }
    },
    mounted() {
        //listening for global event
        document.addEventListener("toggleCollapse", this.listener);
    },
    unmounted() {
        document.removeEventListener("toggleCollapse", this.listener);
    }
}
</script>