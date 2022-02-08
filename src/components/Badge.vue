<template>
    <component :is="href?'a':tag" v-bind="attributes" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, reactive, defineComponent, PropType} from "vue";
import ColorVariants from "../props/ColorVariants";
import BoolPill from "../props/BoolPill";
import {badgePositions} from "../types/badgePositions";


export default defineComponent({
    props: {
        tag: makeString('span'),
        variant: ColorVariants("secondary"),
        pill: BoolPill(false),
        href: makeString(null),
        position: {type: String as PropType<badgePositions>}
    },
    setup(props, context) {
        const attributes = reactive({
            href: null,
            target: null
        });
        if (props.href) {
            attributes.href = props.href;
            attributes.target = "_self";
        }
        return {
            attributes,
            classes: computed(() => [
                "badge",
                {
                    ["bg-" + props.variant]: !!props.variant,
                    "rounded-pill": props.pill,
                    "text-decoration-none": props.href,
                    "position-absolute translate-middle": props.position,
                    "start-100 top-0": props.position === "top-right",
                    "start-0 top-0": props.position === "top-left",
                    "start-0 top-100": props.position === "bottom-left",
                    "start-100 top-100": props.position === "bottom-right",
                }
            ])
        }
    }
});
</script>
