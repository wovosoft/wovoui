<template>

</template>

<script>
import {ref} from "vue";

export default {
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
}
</script>