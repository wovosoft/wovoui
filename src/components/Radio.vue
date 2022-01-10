<template>
    <div class="form-check">
        <input
            class="form-check-input"
            type="radio"
            :name="name"
            :id="identifier"
            :value="value"
            :checked="isChecked"
            @change="$emit('update:modelValue',value)"
        />
        <label class="form-check-label" :for="identifier">
            <slot></slot>
        </label>
    </div>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {computed, ref} from "vue";

export default {
    name: "Radio",
    props: {
        name: makeString(null),
        id: makeString(null),
        modelValue: {
            default: null
        },
        value: {
            default: null
        }
    },
    setup(props, context) {
        const identifier = ref(null);
        if (props.id) {
            identifier.value = props.id;
        } else {
            identifier.value = "radio_id" + (Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));
        }
        const isChecked = computed(() => props.modelValue === props.value);
        return {
            identifier,
            isChecked
        }
    }
}
</script>
