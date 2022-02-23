<template>
    <div :class="classes" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "Spinner",
    props: {
        grow: {type: Boolean as PropType<true | false>, default: false},
        size: {type: String as PropType<null | 'sm' | 'lg'>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null}
    },
    setup(props, context) {

        return {
            classes: computed(() => [
                "spinner-" + (props.grow ? 'grow' : 'border'),
                {
                    ["spinner-" + (props.grow ? 'grow' : 'border') + "-" + props.size]: props.size,
                    ["text-" + props.variant]: props.variant
                }
            ])
        }
    }
})
</script>