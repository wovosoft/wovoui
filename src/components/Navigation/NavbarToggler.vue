<script lang="ts" setup>
withDefaults(defineProps<{
    modelValue?: boolean
}>(), {});

defineEmits<{
    'update:modelValue': [value: boolean]
}>();
</script>

<template>
    <button class="navbar-toggler" type="button" :aria-expanded="modelValue"
            @click="$emit('update:modelValue', !modelValue)">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>