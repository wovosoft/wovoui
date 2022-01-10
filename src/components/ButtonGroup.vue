<template>
    <div :class="classes" :role="role" :aria-label="ariaLabel">
        <slot></slot>
    </div>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed} from "vue";

export default {
    props: {
        ariaLabel: makeString("Button Group"),
        size: makeString(null),
        vertical: makeBoolean(false),
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
}
</script>
