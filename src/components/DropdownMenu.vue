<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";

export default {
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
}
</script>
