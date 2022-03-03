<template>
    <thead :class="classes">
    <slot></slot>
    </thead>
</template>

<script lang="ts">
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed, defineComponent, PropType} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "THead",
    props: {
        variant: {type: String as PropType<ColorVariants>, default: null},
        active: makeBoolean(false),
        align: makeString(null)
    },
    setup(props) {
        return {
            classes: computed(() => ([
                {
                    ["table-" + props.variant]: props.variant,
                    "table-active": props.active,
                    ["align-" + props.align]: !!props.align
                }
            ]))
        }
    }
})
</script>