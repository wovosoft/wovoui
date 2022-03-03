<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "DropdownMenu",
    props: {
        tag: {type: String as PropType<string>, default: "ul"},
        dark: {type: Boolean as PropType<boolean>, default: false},
        show: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => ([
                "dropdown-menu",
                {
                    'dropdown-menu-dark': props.dark,
                    'show': props.show,
                }
            ]))
        }
    }
})
</script>
