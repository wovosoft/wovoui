<template>
    <component :is="href?'a':tag" v-bind="attributes" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {makeBoolean, makeString} from "./shared/properties.js";
import {computed, reactive} from "vue";

export default {
    props: {
        tag: makeString('span'),
        variant: makeString("secondary"),
        pill: makeBoolean(false),
        href: makeString(null)
    },
    setup(props, context) {
        const attributes=reactive({});
        if (props.href) {
            attributes.href = props.href;
            attributes.target = "_self";
        }
        return {
            attributes,
            classes: computed(() => [
                "badge",
                {
                    ["bg-" + props.variant]: !!props.variant,
                    "rounded-pill": props.pill,
                    "text-decoration-none": props.href
                }
            ])
        }
    }
}
</script>
