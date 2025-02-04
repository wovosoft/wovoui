<template>
    <div class="form-rating">
        <component
            :is="model>=i?StarFill:Star"
            v-for="i in items"
            @click="model = i"
            :variant="variant"
            class="me-1 wu-rating"
        />
    </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
//@ts-ignore
import {Star, StarFill} from "@wovosoft/wovoui-icons";
import {useStateModel} from "@/composables/useHelpers";
import {RatingProps} from "@/components";

const props = withDefaults(defineProps<RatingProps>(), {
    min: 1,
    max: 5,
    modelValue: 1
});

defineEmits<{
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
