<template>
    <i class="bi"
       :class="{['bi-'+theIcon]:theIcon,['text-'+variant]:variant}"
    />
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, defineComponent} from "vue";

export default defineComponent({
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
})
</script>