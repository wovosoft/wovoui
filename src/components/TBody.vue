<template>
    <tbody :class="classes">
    <slot></slot>
    </tbody>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "TBody",
    props: {
        variant: {type: String as PropType<ColorVariants>, default: null},
        active: {type: Boolean as PropType<boolean>, default: false},
        align: {type: String as PropType<string>, default: null}
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