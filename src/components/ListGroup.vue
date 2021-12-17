<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties";
import {ref} from "vue";

export default {
    name: "ListGroup",
    props: {
        tag: makeString("ul"),
        flush: makeBoolean(false),
        numbered: makeBoolean(false),
        horizontal: {
            type: [Boolean, String],
            default: false
        },
    },
    setup(props) {
        let classes = ref([]);
        classes.value = [
            "list-group",
            {
                "list-group-flush": props.flush,
                "list-group-numbered": props.numbered,
                ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal,
            }
        ];
        return {
            classes
        };
    }
}
</script>