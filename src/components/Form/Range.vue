<template>
    <input v-model="model" class="form-range" type="range"/>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{ modelValue?: number }>(), {
    modelValue: 0
});

const model = defineModel({
    set(v: string | number) {
        return Number(v);
    },
});
</script>