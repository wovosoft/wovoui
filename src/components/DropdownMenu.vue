<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {defineComponent} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";

export default defineComponent({
    name: "DropdownMenu",
    props: {
        tag: makeString("ul"),
        dark: makeBoolean(false),
        show: makeBoolean(false)
    },
    computed: {
        classes() {
            return [
                "dropdown-menu",
                {
                    'dropdown-menu-dark': this.dark,
                    'show': this.show,
                }
            ]
        }
    }
})
</script>
