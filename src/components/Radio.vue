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

<script lang="ts">
import {computed, ref, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Radio",
    props: {
        name: {type: String as PropType<string>, default: null},
        id: {type: String as PropType<string>, default: null},
        modelValue: {default: null},
        value: {default: null}
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
})
</script>
