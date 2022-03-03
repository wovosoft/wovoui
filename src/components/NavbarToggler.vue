<template>
    <button class="navbar-toggler" @click="toggleNavbar" type="button" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "NavbarToggler",
    emits: ['update:modelValue'],
    props: {
        modelValue: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, context) {
        return {
            toggleNavbar() {
                context.emit('update:modelValue', !props.modelValue);
            }
        }
    }
})
</script>