<template>
    <component :is="theTag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "ListGroup",
    props: {
        tag: {type: String as PropType<string>, default: "ul"},
        flush: {type: Boolean as PropType<boolean>, default: false},
        numbered: {type: Boolean as PropType<boolean>, default: false},
        horizontal: {
            type: [Boolean, String] as PropType<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
            default: false
        },
    },
    setup(props) {
        return {
            theTag: computed(() => props.numbered ? "ol" : props.tag),
            classes: computed(() => ([
                "list-group",
                {
                    "list-group-flush": props.flush,
                    "list-group-numbered": props.numbered,
                    ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal,
                }
            ]))
        };
    }
})
</script>