<template>
    <InputGroup>
        <template #prepend>
            <Button @click="updateValue('decrement')"
                    :variant="buttonVariant"
                    :size="size"
                    aria-label="Decrement">
                <Icon icon="dash"/>
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
                <Icon icon="plus"/>
            </Button>
        </template>
    </InputGroup>
</template>

<script>
import InputGroup from "./InputGroup.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import {make, makeNumber, makeString} from "./shared/properties.js";
import {ref, watch} from "vue";

export default {
    name: "SpinButton",
    components: {Icon, Button, InputGroup},
    props: {
        modelValue: makeNumber(0),
        step: makeNumber(1),
        min: makeNumber(1),
        max: makeNumber(100),
        buttonVariant: makeString("secondary"),
        size: makeString(null),
        formatter: {
            type: Function,
            default: v => v
        }
    },
    setup(props, context) {
        const model = ref(props.modelValue);
        watch(model, v => context.emit('update:modelValue', v));
        watch(() => props.modelValue, v => model.value = v);

        return {
            model,
            updateValue: (type) => {
                if (type === "increment" && (model.value + props.step) <= props.max) {
                    model.value += props.step;
                } else if (type === "decrement" && (model.value - props.step) >= props.min) {
                    model.value -= props.step;
                }
            }
        }
    }
}
</script>