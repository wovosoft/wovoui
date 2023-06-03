<template>
    <div class="form-rating">
        <component
            :is="model>=i?StarFill:Star"
            v-for="i in items"
            @click="model=i"
            :variant="variant"
            class="me-1 wu-rating"
        />
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {Star, StarFill} from "@wovosoft/wovoui-icons";
import {makeNumber, makeVariant} from "@/composables/useProps";
import {useStateModel} from "@/composables/useHelpers";

const props = defineProps({
    min: makeNumber(1),
    max: makeNumber(5),
    modelValue: makeNumber(1),
    variant: makeVariant()
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>();

const model = useStateModel(props, 'modelValue');
const items = computed(() => [...Array(props.max)].map((_, i) => i + 1));
</script>

<style>
.wu-rating:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>
