<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "AlertHeading",
    props: {
        tag: {type: String as PropType<string>, default: "h4"}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "alert-heading"
            ])
        }
    }
})
</script>