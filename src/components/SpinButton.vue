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

<script>
import InputGroup from "./InputGroup.vue";
import Button from "./Button.vue";
import {makeNumber, makeString} from "../shared/properties.js";
import {computed, ref, watch} from "vue";
import {Dash, Plus} from "@wovosoft/wovoui-icons";
import {makeBoolean} from "../shared/properties";

export default {
    name: "SpinButton",
    components: {Dash, Plus, Button, InputGroup},
    props: {
        modelValue: makeNumber(0),
        step: makeNumber(1),
        min: makeNumber(0),
        max: makeNumber(100),
        buttonVariant: makeString("secondary"),
        size: makeString(null),
        formatter: {
            type: Function,
            default: v => v
        },
        inline: makeBoolean(false),
        vertical: makeBoolean(false),
    },
    setup(props, context) {
        const model = ref(props.modelValue);
        watch(model, v => context.emit('update:modelValue', v));
        watch(() => props.modelValue, v => model.value = v);
        const updateValue = (type) => {
            if (type === "increment" && (model.value + props.step) <= props.max) {
                model.value += props.step;
            } else if (type === "decrement" && (model.value - props.step) >= props.min) {
                model.value -= props.step;
            }
        }

        return {
            model,
            updateValue,
            classes: computed(() => [
                "spin-button", {
                    "inline": props.inline
                }
            ])
        }
    }
}
</script>
<style>
.spin-button:focus {
    box-shadow: 0 0 6px #007bff;
    border-radius: 4px;
}
.spin-button.inline{

}
</style>