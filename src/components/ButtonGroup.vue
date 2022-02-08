<template>
    <component :is="tag" :class="classes" :role="role" :aria-label="ariaLabel">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, defineComponent, PropType} from "vue";
import {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    props: {
        tag: makeString("div"),
        ariaLabel: makeString("Button Group"),
        size: {type: String as PropType<buttonSizes>, default: () => null},
        vertical: {type: Boolean as PropType<true | false>},
        role: makeString("group")
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                {
                    "btn-group": !props.vertical,
                    "btn-group-vertical": props.vertical,
                    ["btn-group-" + props.size]: props.size
                }
            ])
        }
    }
})
</script>
