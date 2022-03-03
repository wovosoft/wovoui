<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CardGroup",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        deck: {type: Boolean as PropType<boolean>, default: false},
        columns: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => [
                {
                    "card-group": !props.deck && !props.columns,
                    "card-deck": props.deck,
                    "card-columns": props.columns,
                }
            ])
        }
    }
})
</script>
