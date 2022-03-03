<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "CardHeader",
    props: {
        content: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null},
        borderVariant: {type: String as PropType<ColorVariants>, default: null},
        tag: {type: String as PropType<string>, default: "div"},
        textVariant: {type: String as PropType<ColorVariants>, default: null}
    },
    setup(props, context) {
        let classes = ref([]);
        classes.value = [
            "card-header",
            {
                ["bg-" + props.variant]: !!props.variant,
                ["text-" + props.textVariant]: !!props.textVariant,
                ["border-" + props.borderVariant]: !!props.borderVariant,
            }
        ];
        return {
            classes
        }
    }
})
</script>
