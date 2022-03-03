<template>
    <i class="bi"
       :class="{['bi-'+theIcon]:theIcon,['text-'+variant]:variant}"
    />
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Icon",
    props: {
        icon: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<string>, default: null}
    },
    setup(props, {slots}) {
        return {
            theIcon: computed(() => (props.icon || slots.default.toString().trim()))
        }
    }
})
</script>