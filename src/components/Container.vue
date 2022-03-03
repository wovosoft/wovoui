<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";

export default defineComponent({
    name: "Container",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        fluid: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => ({
                "container": !props.fluid,
                "container-fluid": props.fluid,
            }))
        }
    }
})
</script>