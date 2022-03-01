<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {defineComponent, ref} from "vue";

export default defineComponent({
    name: "CardFooter",
    props: {
        content: makeString(),
        variant: makeString(),
        borderVariant: makeString(),
        tag: makeString("div"),
        textVariant: makeString()
    },
    setup(props, context) {
        let classes = ref([]);
        classes.value = [
            "card-footer",
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
