<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Stack",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        vertical: {type: Boolean as PropType<boolean>, default: false},
        gap: {type: [Number, String] as PropType<number | string>, default: 0}
    },
    setup(props) {
        return {
            classes: computed(() => [
                {
                    "vstack": props.vertical,
                    "hstack": !props.vertical,
                    ["gap-" + props.gap]: props.gap
                }
            ])
        }
    }
})
</script>