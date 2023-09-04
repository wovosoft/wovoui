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
            :aria-valuetext="model.toString()"
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
import {computed, PropType} from "vue";
import {Button, InputGroup} from "@/components";
import {Dash, Plus} from "@wovosoft/wovoui-icons";
import type {ButtonSizes} from "@/index";
import {makeBoolean, makeNumber, makeSize, makeVariant, useStateModel} from "@/composables";

const props = defineProps({
    modelValue: makeNumber(0),
    step: makeNumber(1),
    min: makeNumber(0),
    max: makeNumber(100),
    buttonVariant: makeVariant("secondary"),
    size: makeSize<ButtonSizes>(null),
    formatter: {type: Function as PropType<Function>, default: v => v},
    inline: makeBoolean(false),
    vertical: makeBoolean(false),
});

const model = useStateModel(props, 'modelValue');

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
