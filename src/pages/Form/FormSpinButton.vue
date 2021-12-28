<template>
    <h1>Form Spin Button</h1>
    <p>
        Spin buttons are a wovoui's custom numerical range form control. Spin buttons allow for incrementing or
        decrementing a numerical value within a range of a minimum and maximum number, with optional step value.
    </p>
    <SpinButton :max="10" v-model="example1"/>
    <div class="p-2">{{ example1 }}</div>
</template>

<script>
import SpinButton from "../../components/SpinButton.vue";
import {ref} from "vue";

export default {
    name: "FormSpinButton",
    components: {SpinButton},
    setup(props) {
        return {
            example1: ref(5)
        }
    }
}
</script>
