<template>
    <a :href="href" class="card-link">
        <slot></slot>
    </a>
</template>
<script>
import {makeString} from "./shared/properties.js";

export default {
    name: "CardLink",
    props: {
        href: makeString("#")
    }
}
</script>
