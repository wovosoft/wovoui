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
import {computed, defineComponent, onMounted, onBeforeUnmount, PropType, ref, watch} from "vue";
import {createPopper, Instance, Modifier} from "@popperjs/core";
import {makeBoolean, makeString} from "@/composables";

export default defineComponent({
    name: "Popover",
    props: {
        target: {type: String as PropType<string>, required: true},
        header: makeString(),
        modelValue: makeBoolean(false),
        placement: {type: String as PropType<string>, default: "top"},
        triggers: {type: String as PropType<string>, default: "click"},
    },
    setup(props, {emit}) {
        const shown = ref<boolean>(false);
        const popper = ref<Instance | null>(null);
        const popover = ref<HTMLElement | null>(null);
        const dir = ref<string>("top");

        watch(
            () => props.modelValue,
            (value) => {
                shown.value = value;
            }
        );

        watch(shown, (value) => {
            emit("update:modelValue", value);
            if (value) {
                initPopper();
                setTimeout(() => document.addEventListener("click", clickOutside), 0);
            } else {
                destroyPopper();
            }
        });

        const bsDir = (placement: string): string => {
            return placement.startsWith("auto") || placement.startsWith("top")
                ? "top"
                : placement.startsWith("bottom")
                    ? "bottom"
                    : placement.startsWith("right")
                        ? "end"
                        : placement.startsWith("left")
                            ? "start"
                            : placement;
        };

        const classes = computed(() => [
            "popover",
            "fade",
            {
                show: shown.value,
                ["bs-popover-" + dir.value]: !!dir.value,
            },
        ]);

        const popperOptions = computed(() => ({
            placement: ["auto", "auto-start", "auto-end"].includes(props.placement)
                ? "top"
                : props.placement,
            modifiers: <Modifier<any, any>[]>[
                {
                    name: "topLogger",
                    enabled: true,
                    phase: "main",
                    fn({state}) {
                        dir.value = bsDir(state.placement);
                    },
                },
                {
                    name: "offset",
                    enabled: true,
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        }));

        const initPopper = () => {
            const target = document.getElementById(props.target);
            if (target && popover.value) {
                //@ts-ignore
                popper.value = createPopper(target, popover.value, popperOptions.value);
            }
        };

        const destroyPopper = () => {
            popper.value?.destroy();
            popper.value = null;
        };

        const clickOutside = (e: MouseEvent) => {
            const targetElement = document.getElementById(props.target);
            const popoverElement = popover.value;

            if (!targetElement || !popoverElement) return;

            const isTarget = targetElement.isSameNode(e.target as Node);
            const isFromPopover =
                popoverElement.isSameNode(e.target as Node) || popoverElement.contains(e.target as Node);

            if (shown.value && !isTarget && !isFromPopover) {
                shown.value = false;
                document.removeEventListener("click", clickOutside);
            }
        };

        onMounted(() => {
            const target = document.getElementById(props.target);
            if (target) {
                target.addEventListener(props.triggers, () => {
                    shown.value = !shown.value;
                });
            }
        });

        onBeforeUnmount(() => {
            destroyPopper();
        });

        return {
            shown,
            popper,
            popover,
            classes,
            popperOptions,
        };
    },
});
</script>
