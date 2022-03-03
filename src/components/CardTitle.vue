<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";

export default defineComponent({
    name: "CardTitle",
    props: {
        title: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<string>, default: "h4"}
    },
    setup(props) {
        return {
            classes: computed(() => ([
                "card-title"
            ]))
        }
    }
})
</script>
