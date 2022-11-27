<template>
    <InputGroup tabindex="-1"
                :class="classes"
                @keyup.self.up="updateValue('increment');"
                @keyup.self.down="updateValue('decrement');">
        <template #prepend>
            <Button @click="updateValue('decrement')"
                    :variant="buttonVariant"
                    :size="size"
                    aria-label="Decrement">
                <Dash/>
            </Button>
        </template>
        <output
            role="spinbutton"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="model"
            :aria-valuetext="model"
            :class="{['form-control-'+size]:size}"
            class="form-control text-center">
            {{ formatter(model) }}
        </output>
        <template #append>
            <Button @click="updateValue('increment')"
                    :variant="buttonVariant"
                    :size="size"
                    aria-label="Increment">
                <Plus/>
            </Button>
        </template>
    </InputGroup>
</template>

<script lang="ts" setup>
import {computed, ref, watch, PropType} from "vue";
import {InputGroup, Button} from "../..";
import {Dash, Plus} from "@wovosoft/wovoui-icons";
import type {ColorVariants, ButtonSizes} from "../../types";

const props = defineProps({
    modelValue: {type: Number as PropType<number>, default: 0},
    step: {type: Number as PropType<number>, default: 1},
    min: {type: Number as PropType<number>, default: 0},
    max: {type: Number as PropType<number>, default: 100},
    buttonVariant: {type: String as PropType<ColorVariants>, default: "secondary"},
    size: {type: String as PropType<ButtonSizes>, default: null},
    formatter: {type: Function as PropType<Function>, default: v => v},
    inline: {type: Boolean as PropType<boolean>, default: false},
    vertical: {type: Boolean as PropType<boolean>, default: false},
});

const emit = defineEmits(["update:modelValue"]);

const model = ref<number>(props.modelValue);
watch(model, v => emit('update:modelValue', v));
watch(() => props.modelValue, v => model.value = v);


const updateValue = (type) => {
    if (type === "increment" && (model.value + props.step) <= props.max) {
        model.value += props.step;
    } else if (type === "decrement" && (model.value - props.step) >= props.min) {
        model.value -= props.step;
    }
};
const classes = computed(() => [
    "spin-button", {
        "inline": props.inline
    }
]);
</script>
