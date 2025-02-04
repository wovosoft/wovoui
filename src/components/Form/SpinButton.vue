<template>
    <!--    tabindex="0"-->
    <!--    ref="theElement"-->
    <InputGroup
        class="spin-button"
        :class="{inline: inline}"
        @keyup.self.up="updateValue('increment');"
        @keyup.self.down="updateValue('decrement');">
        <template #prepend>
            <Button @click="updateValue('decrement')"
                    :variant="buttonVariant"
                    :size="size"
                    @mousedown.prevent="(e)=>handleMouseDown(e,'decrement')"
                    @mouseup.prevent="handleMouseUp"
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
            <Button @click.prevent="updateValue('increment')"
                    :variant="buttonVariant"
                    :size="size"
                    @mousedown.prevent="(e)=>handleMouseDown(e,'increment')"
                    @mouseup.prevent="handleMouseUp"
                    aria-label="Increment">
                <Plus/>
            </Button>
        </template>
    </InputGroup>
</template>

<script lang="ts" setup>
import {Button, InputGroup, SpinButtonProps} from "@/components";
//@ts-ignore
import {Dash, Plus} from "@wovosoft/wovoui-icons";
import {ref} from "vue";

const props = withDefaults(defineProps<SpinButtonProps>(), {
    step: 1,
    min: 0,
    max: 100,
    buttonVariant: 'secondary',
    formatter: (value: any) => value,
    longPressInterval: 100,
    longPressTrigger: 500,
});

const model = defineModel<number>('modelValue', {
    default: 0,
    get(v) {
        return Number(v);
    },
    set(v: number | string) {
        v = Number(v);

        if (v < props.min) {
            return props.min;
        } else if (v > props.max) {
            return props.max;
        }

        return v;
    },
});

const updateValue = (type: 'increment' | 'decrement', step: number = props.step) => {
    step = step ?? props.step;
    if (type === "increment" && (model.value + step) <= props.max) {
        model.value += step;
    } else if (type === "decrement" && (model.value - step) >= props.min) {
        model.value -= step;
    }
};

const timer = ref<number>();
const handleMouseDown = (e: MouseEvent, type: 'increment' | 'decrement') => {
    timer.value = setTimeout(() => {
        if (e.buttons === 1) {
            updateValue(type);
            timer.value = setInterval(() => {
                if (e.buttons === 1) {
                    updateValue(type);
                } else {
                    clearTimer();
                }
            }, props.longPressInterval);
        }
    }, props.longPressTrigger);
};

const handleMouseUp = () => {
    clearTimer();
};
const clearTimer = () => {
    if (timer) {
        clearTimeout(timer.value);
    }
};
//
// const theElement = ref<InstanceType<typeof InputGroup> | null>(null);
//
// function focusContainer(e) {
//     e.preventDefault();
//     theElement.value?.$el?.focus();
// }

defineExpose({
    increment: (step: number = props.step) => updateValue('increment', step),
    decrement: (step: number = props.step) => updateValue('decrement', step),
});
</script>
