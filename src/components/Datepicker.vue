<template>

</template>

<script lang="ts">
import {ref, defineComponent} from "vue";

export default defineComponent({
    name: "Datepicker",
    props: {
        modelValue: {
            type: String,
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