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

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {computed, ref} from "vue";
import {createPopper} from "@popperjs/core";

export default {
    name: "Popover",
    props: {
        //specific id
        target: {
            type: String,
            required: true
        },
        header: makeString(),
        modelValue: makeBoolean(false),
        //https://popper.js.org/docs/v2/constructors/#options
        placement: makeString("top"),
        triggers: make(String, "click")
    },
    setup(props) {
        const shown = ref(false);
        const classes = computed(() => {
            let dir = "top";

            if (['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end'].includes(props.placement)) {
                dir = "top";
            } else if (['bottom', 'bottom-start', 'bottom-end'].includes(props.placement)) {
                dir = "bottom";
            } else if (['right', 'right-start', 'right-end'].includes(props.placement)) {
                dir = "end";
            } else if (['left', 'left-start', 'left-end'].includes(props.placement)) {
                dir = "start";
            }
            return [
                "popover",
                "fade",
                {
                    show: shown.value,
                    ["bs-popover-" + dir]: !!dir
                }
            ]
        });
        const events = computed(() => {
            return typeof props.triggers === "string" ? [props.triggers] : props.triggers;
        });
        const popperOptions = computed(() => ({
            placement: ['auto', 'auto-start', 'auto-end'].includes(props.placement) ? 'top' : props.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
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
        modelValue(value) {
            this.shown = value;
        },
        shown(value) {
            this.$emit('update:modelValue', value);
            this.$nextTick(() => {
                if (value) {
                    this.initPopper();
                } else {
                    this.destroyPopper();
                }
            })
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
        }
    }
}
</script>