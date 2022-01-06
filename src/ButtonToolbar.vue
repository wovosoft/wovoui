<template>
    <component :is="tag" :class="classes" :role="role">
        <slot></slot>
    </component>
</template>

<script>
import {computed} from "vue";
import {makeBoolean, makeString} from "./shared/properties.js";

export default {
    name: "ButtonToolbar",
    props: {
        tag: makeString("div"),
        role: makeString("toolbar"),
        justified: makeBoolean(false)
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
}
</script>