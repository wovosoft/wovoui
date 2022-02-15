<template>
    <component :is="theTag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "ListGroup",
    props: {
        tag: makeString("ul"),
        flush: {type: Boolean as PropType<true | false>, default: false},
        numbered: {type: Boolean as PropType<true | false>, default: false},
        horizontal: {
            type: [Boolean, String] as PropType<true | false | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
            default: false
        },
    },
    setup(props) {
        const theTag = computed(() => {
            if (props.numbered) {
                return "ol";
            }
            return props.tag;
        });
        return {
            theTag,
            classes: computed(() => [
                "list-group",
                {
                    "list-group-flush": props.flush,
                    "list-group-numbered": props.numbered,
                    ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal,
                }
            ])
        };
    }
})
</script>