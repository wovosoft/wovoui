<template>
    <teleport to="body" v-if="shouldShow">
        <div :class="classes" ref="tooltip" role="tooltip">
            <div data-popper-arrow class="tooltip-arrow"></div>
            <div class="tooltip-inner" ref="inner">
                <slot>{{ content }}</slot>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import {createPopper} from '@popperjs/core';
import type {tooltipPlacement} from "../types/tooltipPlacement";

let popper = null;
export default defineComponent({
    name: "Tooltip",
    props: {
        target: {type: String as PropType<string>, default: null, required: true},  //should be id
        content: {type: String as PropType<string>, default: null},
        placement: {type: String as PropType<tooltipPlacement>, default: 'top'},
        opensOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'focusin'},
        ClosesOn: {type: String as PropType<keyof GlobalEventHandlersEventMap>, default: 'focusout'},
    },
    setup(props, context) {
        const shouldShow = ref(false);
        const dir = ref("top");
        const bsDir = (dir) => {
            if (dir === 'right' || dir === 'end') {
                return 'end';
            } else if (dir === 'left' || dir === 'start') {
                return 'start';
            }
            return dir;
        }
        const popperOptions = computed(() => ({
            placement: props.placement,
            modifiers: [
                {
                    name: 'topLogger',
                    enabled: true,
                    phase: 'main',
                    fn({state}) {
                        dir.value = bsDir(state.placement);
                    },
                }
            ],
        }));

        const show = () => shouldShow.value = true;
        const hide = () => shouldShow.value = false;
        const toggle = () => shouldShow.value = !shouldShow.value;
        context.expose({show, hide, toggle});

        return {
            shouldShow,
            popperOptions,
            classes: computed(() => [
                "tooltip",
                "fade",
                {
                    "show": shouldShow.value
                },
                "bs-tooltip-" + dir.value
            ]),
            show,
            hide,
            toggle
        }
    },
    computed: {
        targetElement() {
            return document?.getElementById(this.target);
        }
    },
    watch: {
        shouldShow(v) {
            if (!v && popper) {
                popper.destroy();
                popper = null;
            } else if (this.targetElement) {
                this.$nextTick(() => {
                    popper = createPopper(
                        this.targetElement,
                        this.$refs.tooltip,
                        this.popperOptions
                    );
                });
            }
        }
    },
    mounted() {
        if (this.targetElement) {
            this.targetElement.addEventListener("focusin", this.show);
            this.targetElement.addEventListener("focusout", this.hide);
        }
    },
    beforeUnmount() {
        if (this.targetElement) {
            this.targetElement.removeEventListener("focusin", this.show);
            this.targetElement.removeEventListener("focusout", this.hide);
        }
        if (popper) {
            popper.destroy();
            popper = null;
        }
    }
})
</script>