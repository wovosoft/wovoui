<template>
    <component :is="tag" :class="classes" :role="role">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "ButtonToolbar",
    props: {
        tag: makeString("div"),
        role: makeString("toolbar"),
        justified: {type: Boolean as PropType<true | false>, default: () => false}
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