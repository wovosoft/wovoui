<template>
    <input
        :type="type"
        :value="modelValue"
        @input="e=>$emit('update:modelValue',type==='number'?Number(e.target.value):e.target.value)"
        :class="classes"
        v-bind="attributes"
    />
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";

export default defineComponent({
    emits: ["update:modelValue"],
    props: {
        type: {type: String as PropType<string>, default: "text"},
        size: {type: String as PropType<string>, default: null},
        plain: {type: Boolean as PropType<boolean>, default: false},
        state: {type: Boolean as PropType<boolean>, default: null},
        modelValue: {type: [Number, String] as PropType<number | string>, default: null}
    },
    setup(props, context) {
        const attributes = ref({});
        if (props.state !== null) {
            attributes.value = {
                "aria-invalid": props.state === false
            };
        }
        return {
            attributes,
            classes: computed(() => [
                {
                    ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
                    "form-range": props.type === "range",
                    "is-valid": props.state === true,
                    "is-invalid": props.state === false,
                    ["form-control-" + props.size]: !!props.size,
                    "form-control-color": props.type === "color"
                }
            ])
        }
    }
})
</script>