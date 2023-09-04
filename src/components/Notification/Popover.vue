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
import {computed, defineComponent, PropType, ref, watch} from "vue";
import {createPopper} from "@popperjs/core";
import {makeBoolean, makeString} from "@/composables";
import {Modifier} from "@popperjs/core/lib/types";

export default defineComponent({
    name: "Popover",
    props: {
        //specific id
        target: {type: String as PropType<string>, required: true},
        header: makeString(),
        modelValue: makeBoolean(false),
        //https://popper.js.org/docs/v2/constructors/#options
        placement: {type: String as PropType<string>, default: "top"},
        triggers: {type: String as PropType<keyof HTMLElementEventMap>, default: "click"}
    },
    setup(props) {
        const shown = ref(false);
        watch(() => props.modelValue, value => shown.value = value);
        const bsDir = (placement: string) => (placement.startsWith('auto') || placement.startsWith('top'))
            ? "top"
            : (placement.startsWith('bottom'))
                ? "bottom"
                : (placement.startsWith('right'))
                    ? "end"
                    : (placement.startsWith('left'))
                        ? "start"
                        : placement;

        const dir = ref("top");

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
            return [props.triggers];
        });


        const popperOptions = computed(() => ({
            placement: ['auto', 'auto-start', 'auto-end'].includes(props.placement) ? 'top' : props.placement,
            modifiers: <Modifier<any, any>[]>[
                {
                    name: 'topLogger',
                    enabled: true,
                    phase: 'main',
                    fn({state}) {
                        dir.value = bsDir(state.placement)
                    },
                },
                {
                    name: 'offset',
                    enabled: true,
                    options: {
                        offset: () => [0, 10],
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
        let target = document.getElementById(this.target) as HTMLElement;
        let the = this;
        target.addEventListener(this.triggers, () => the.shown = !the.shown);
    },
    beforeUnmount() {
        this.destroyPopper();
    },
    methods: {
        destroyPopper() {
            this.popper?.destroy();
        },
        initPopper() {
            let target = document.getElementById(this.target);

            this.popper = createPopper(
                target,
                this.$refs.popover,
                this.popperOptions
            );
        },
        clickOutside(e: Event & { target: HTMLElement }) {
            let isTarget = (document.getElementById(this.target) as HTMLElement).isSameNode(e.target);
            const popover = this.$refs.popover as HTMLElement;
            let isFromPopover = popover && (popover.isSameNode(e.target) || popover.contains(e.target));
            if (this.shown && !isTarget && !isFromPopover) {
                this.shown = false;
                document.removeEventListener("click", this.clickOutside);
            }
        }
    }
})
</script>