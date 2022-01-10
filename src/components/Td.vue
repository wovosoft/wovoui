<template>
    <td :class="classes">
        <slot></slot>
    </td>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed} from "vue";

export default {
    name: "Td",
    props: {
        variant: makeString(null),
        active: makeBoolean(false),
        align: makeString(null)
    },
    setup(props) {
        const classes = computed(() => {
            return [
                {
                    ["table-" + props.variant]: props.variant,
                    "table-active": props.active,
                    ["align-" + props.align]: !!props.align
                }
            ];
        });
        return {
            classes
        }
    }
}
</script>