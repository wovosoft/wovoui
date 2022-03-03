<template>
    <component :is="tag" :class="classes" :role="role">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {Binary} from "../types/Binary";

export default defineComponent({
    name: "ButtonToolbar",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        role: {type: String as PropType<string>, default: "toolbar"},
        justified: {type: Boolean as PropType<Binary>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => [
                "btn-toolbar",
                {
                    "justify-content-between": props.justified
                }
            ])
        }
    }
})
</script>