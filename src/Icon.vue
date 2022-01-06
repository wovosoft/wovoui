<template>
    <i class="bi"
       :class="{['bi-'+theIcon]:theIcon,['text-'+variant]:variant}"
    />
</template>

<script>
import {makeString} from "./shared/properties.js";
import {computed} from "vue";

export default {
    name: "Icon",
    props: {
        icon: makeString(null),
        variant: makeString(null)
    },
    setup(props, {slots}) {
        return {
            theIcon: computed(() => (props.icon || slots.default.toString().trim()))
        }
    }
}
</script>