<template>
    <input
        :type="type"
        :value="modelValue"
        @input="e=>$emit('update:modelValue',type==='number'?Number(e.target.value):e.target.value)"
        :class="classes"
        v-bind="attributes"
    />
</template>

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {computed, ref} from "vue";

export default {
    emits: ["update:modelValue"],
    props: {
        type: makeString("text"),
        size: makeString(),
        plain: makeBoolean(false),
        state: makeBoolean(null),
        modelValue: make([Number, String], null)
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
}
</script>