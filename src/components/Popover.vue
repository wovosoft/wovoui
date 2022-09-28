<template>
    <teleport to="body">
        <div ref="popover" :class="classes" role="tooltip" v-if="shown">
            <div data-popper-arrow class="popover-arrow"></div>
            <div class="popover-header" v-if="$slots.header || header">
                <slot name="header">
                    {{ header }}
                </slot>
            </div>
            <div class="popover-body">
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import {computed, ref, watch, defineComponent, PropType} from "vue";
import {createPopper} from "@popperjs/core";

export default defineComponent({
    name: "Popover",
    props: {
        //specific id
        target: {type: String as PropType<string>, required: true},
        header: {type: String as PropType<string>, default: null},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        //https://popper.js.org/docs/v2/constructors/#options
        placement: {type: String as PropType<string>, default: "top"},
        triggers: {type: String as PropType<keyof HTMLElementEventMap>, default: "click"}
    },
    setup(props) {
        const shown = ref(false);
        watch(() => props.modelValue, value => shown.value = value);
        const bsDir = (placement) => {
            if (['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end'].includes(placement)) {
                return "top";
            } else if (['bottom', 'bottom-start', 'bottom-end'].includes(placement)) {
                return "bottom";
            } else if (['right', 'right-start', 'right-end'].includes(placement)) {
                return "end";
            } else if (['left', 'left-start', 'left-end'].includes(placement)) {
                return "start";
            }
            return "top";
        }
        const dir = ref("top");
        dir.value = bsDir(props.placement);
        const classes = computed(() => {
            return [
                "popover",
                "fade",
                {
                    show: shown.value,
                    ["bs-popover-" + dir.value]: !!dir.value
                }
            ]
        });
        const events = computed(() => {
            return typeof props.triggers === "string" ? [props.triggers] : props.triggers;
        });
        const topLogger = {
            name: 'topLogger',
            enabled: true,
            phase: 'main',
            fn({state}) {
                // console.log(state.placement)
                dir.value = bsDir(state.placement)
                // if (state.placement === 'top') {
                //     console.log('Popper is on the top');
                // }
            },
        };
        const popperOptions = computed(() => ({
            placement: ['auto', 'auto-start', 'auto-end'].includes(props.placement) ? 'top' : props.placement,
            modifiers: [
                topLogger,
                {
                    name: 'offset',
                    enabled: true,
                    options: {
                        offset: (d) => {
                            // console.log(d)
                            return [0, 10]
                        },
                    },
                },
            ],
        }));

        return {
            shown,
            classes,
            events,
            popper: ref(null),
            popperOptions
        }
    },
    watch: {
        shown(value) {
            this.$emit('update:modelValue', value);
            this.$nextTick(() => {
                if (value) {
                    this.initPopper();
                    let the = this;
                    setTimeout(() => document.addEventListener("click", the.clickOutside), 0);
                } else {
                    this.destroyPopper();
                }
            });
        }
    },
    mounted() {
        let target = document.getElementById(this.target);
        let the = this;
        target.addEventListener(this.triggers, () => the.shown = !the.shown);
    },
    beforeUnmount() {
        this.destroyPopper();
    },
    methods: {
        destroyPopper() {
            this.popper.destroy();
        },
        initPopper() {
            let target = document.getElementById(this.target);

            this.popper = createPopper(
                target,
                this.$refs.popover,
                this.popperOptions
            );
        },
        clickOutside(e) {
            let isTarget = document.getElementById(this.target).isSameNode(e.target);
            let isFromPopover = this.$refs.popover && (this.$refs.popover.isSameNode(e.target) || this.$refs.popover.contains(e.target));
            if (this.shown && !isTarget && !isFromPopover) {
                this.shown = false;
                document.removeEventListener("click", this.clickOutside);
            }
        }
    }
})
</script>