<template>
    <th :class="classes" scope="col">
        <slot></slot>
    </th>
</template>

<script lang="ts">
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed,defineComponent} from "vue";

export default defineComponent({
    name: "Th",
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
})
</script>