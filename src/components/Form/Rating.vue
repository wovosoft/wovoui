<template>
    <div class="form-rating">
        <component
            :is="value>=i?StarFill:Star"
            v-for="i in items"
            @click="value=i"
            :variant="variant"
            class="me-1 wu-rating"
        />
    </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {StarFill, Star} from "@wovosoft/wovoui-icons";
import {makeNumber, makeVariant} from "../../composables/useProps";

const props = defineProps({
    min: makeNumber(1),
    max: makeNumber(5),
    modelValue: makeNumber(1),
    variant: makeVariant(null)
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>();

const value = ref<number>(props.modelValue);
watch(value, v => emit('update:modelValue', v));
watch(() => props.modelValue, v => value.value = v);

const items = computed(() => [...Array(props.max)].map((_, i) => i + 1));
</script>

<style>
.wu-rating:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>
