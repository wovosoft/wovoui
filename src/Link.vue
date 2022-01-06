<template>
    <a :href="href" :target="target">
        <slot></slot>
    </a>
</template>

<script>
import {makeString} from "./shared/properties.js";

export default {
    name: "Link",
    props: {
        href: makeString('#'),
        target: makeString("_self")
    }
}
</script>