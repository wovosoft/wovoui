<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CardText",
    props: {
        tag: {type: String as PropType<string>, default: "p"}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "card-text"
            ])
        }
    }
})
</script>