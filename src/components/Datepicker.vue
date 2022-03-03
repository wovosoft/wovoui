<template>

</template>

<script lang="ts">
import {ref, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Datepicker",
    props: {
        modelValue: {
            type: String as PropType<string>,
            default: null
        }
    },
    setup(props, context) {
        const model = ref(null);
        return {
            model
        }
    }
})
</script>