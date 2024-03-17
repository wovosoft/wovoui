<script lang="ts" setup>
import {InputProps} from "./index";

withDefaults(defineProps<InputProps>(), {
    //some actions vary based on type so considering at as a prop
    type: 'text',
    state: null
});
const [model, modifiers] = defineModel<string | number>({
    set(value) {
        if (modifiers.trim) {
            return value.toString().trim()
        }

        if (modifiers.number) {
            return Number(value)
        }

        // otherwise, return the value as-is
        return value
    }
});
</script>

<template>
    <input
        v-model="model"
        :type="type"
        :aria-invalid="state===false?true:null"
        :class="{
            ['form-control' + (plain ? '-plaintext' : '')]: type !== 'range',
            'form-range': type === 'range',
            'is-valid': state === true,
            'is-invalid': state === false,
            ['form-control-' + size]: !!size,
            'form-control-color': type === 'color'
        }"
    />
</template>