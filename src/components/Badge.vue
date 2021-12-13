<template>
    <component :is="href?'a':tag" v-bind="attributes" :class="classes">
        <slot></slot>
    </component>
</template>

<script setup>
import {makeBoolean, makeString} from "../shared/properties";
import {computed} from "vue";

const props = defineProps({
    tag: makeString('span'),
    variant: makeString("secondary"),
    pill: makeBoolean(false),
    href: makeString(null)
});

const classes = computed(() => [
    "badge",
    {
        ["bg-" + props.variant]: !!props.variant,
        "rounded-pill": props.pill,
        "text-decoration-none": props.href
    }
]);

let attributes = {};
if (props.href) {
    attributes.href = props.href;
    attributes.target = "_self";
}
</script>
