<template>
    <div class="form-check" v-bind="wrapperAttrs">
        <input
            v-bind="$attrs"
            class="form-check-input"
            type="radio"
            :name="name"
            :id="identifier"
            :value="value"
            :checked="isChecked"
            @change="$emit('update:modelValue',value)"
        />
        <label v-bind="labelAttrs" class="form-check-label" :for="identifier">
            <slot></slot>
        </label>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script lang="ts" setup>
//https://gist.github.com/Jonarod/8553d88b1b0d1e1898ff1b5c951b00cc
import {computed, PropType} from "vue";
import {uid} from "../../composables/useHelpers";

const props = defineProps({
    name: {type: String as PropType<string>, default: null},
    id: {type: String as PropType<string>, default: null},
    modelValue: {default: null},
    value: {default: null},
    wrapperAttrs: {default: null},
    labelAttrs: {default: null},
});

const identifier = computed(() => props.id ?? "wbv-radio-" + uid());
const isChecked = computed(() => props.modelValue === props.value);
</script>
