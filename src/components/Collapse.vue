<template>
    <component :is="tag" :class="classes" ref="collapse"
               :id="id"
               @transitionend.self="collapseTransitionEnd($event,shown,'height')">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, ref, defineComponent, PropType, watch} from "vue";
import {toggleCollapse, collapseTransitionEnd} from "../shared/utilities.js";

export default defineComponent({
    name: "Collapse",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        visible: {type: Boolean as PropType<boolean>, default: false},
        class: {type: [Array, String, Object] as PropType<any>, default: null},
        id: {type: String as PropType<string>, default: null},
        isNav: {type: Boolean as PropType<boolean>, default: false},
        horizontal: {type: Boolean as PropType<boolean>, default: false}
        // lazy: makeBoolean(false)
    },
    watch: {
        modelValue(value) {
            this.shown = value;
        },
        //model value might not be defined, so watching separate one
        shown(value) {
            this.$refs.collapse.classList.remove("collapse", "show");
            this.toggleCollapse(this.$refs.collapse, value, this.horizontal ? 'width' : 'height',/*this.shouldRenderHandler*/);
        }
    },
    setup(props, context) {
        const shouldRender = ref(true);
        const shown = ref(props.modelValue);
        if (props.visible) {
            context.emit('update:modelValue', true);
        }
        watch(() => props.visible, value => shown.value = value);
        // const shouldRenderHandler = (value) => {
        //     shouldRender.value = value;
        // }
        return {
            shown,
            shouldRender,
            // shouldRenderHandler,
            toggleCollapse,
            collapseTransitionEnd,
            classes: computed(() => [
                "collapse",
                {
                    "navbar-collapse": props.isNav,
                    "collapse-horizontal": props.horizontal,
                }
            ]),
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
})
</script>