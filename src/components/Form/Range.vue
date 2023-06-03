<template>
    <input v-model="model" class="form-range" type="range"/>
</template>
<script lang="ts" setup>
import {makeNumber} from "@/composables";
import {useModel} from "vue";

const props = defineProps({
    modelValue: makeNumber(0)
});

const model = useModel(props, 'modelValue');
</script>