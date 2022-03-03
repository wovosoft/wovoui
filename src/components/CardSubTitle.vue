<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "CardSubTitle",
    props: {
        title: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<string>, default: "h6"},
        textVariant: {type: String as PropType<ColorVariants>, default: "muted"}
    },
    setup(props) {
        return {
            classes: computed(() => ([
                "card-subtitle",
                {
                    ["text-" + props.textVariant]: !!props.textVariant
                }
            ]))
        }
    }
})
</script>
