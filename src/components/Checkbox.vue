<template>
    <div :class="classes">
        <input class="form-check-input"
               @change="valueChanged"
               :required="required"
               :readonly="readonly"
               :disabled="disabled"
               :name="name"
               type="checkbox"
               v-model="model"
               :value="value"
               v-bind="inputAttrs"
               :id="identifier"/>
        <label v-if="$slots.default" class="form-check-label" :for="identifier">
            <slot></slot>
        </label>
    </div>
</template>

<script>
import {computed, ref, watch} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";

export default {
    name: "Checkbox",
    emits: ['update:modelValue', 'checked', 'unchecked'],
    props: {
        name: makeString(null),
        id: makeString(null),
        required: makeBoolean(false),
        readonly: makeBoolean(false),
        disabled: makeBoolean(false),
        inline: makeBoolean(false),
        modelValue: {
            default: null
        },
        value: {
            default: true
        },
        uncheckedValue: {
            default: false
        },
        switch: makeBoolean(false),
        checked: makeBoolean(false)
    },
    setup(props, context) {
        const identifier = ref(null);
        if (props.id) {
            identifier.value = props.id;
        } else {
            identifier.value = "checkbox_id" + (Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));
        }
        const model = ref(props.modelValue);
        const classes = computed(() => [
            "form-check",
            {
                "form-switch": props.switch,
                "form-check-inline": props.inline,
            }
        ]);

        const inputAttrs = ref({
            role: props.switch ? 'switch' : null
        });

        const valueChanged = (e) => {
            if (e.target.checked) {
                context.emit('checked', {originalEvent: e, data: props.value, checked: true});
            } else {
                context.emit('unchecked', {originalEvent: e, data: props.uncheckedValue, checked: false});
            }
        };

        watch(() => props.modelValue, value => model.value = value);
        watch(model, value => context.emit('update:modelValue', value));
        watch(() => props.checked, value => {
            if (value) {
                context.emit('update:modelValue', props.value);
            } else {
                context.emit('update:modelValue', props.uncheckedValue);
            }
        });
        return {
            identifier,
            model,
            classes,
            inputAttrs,
            valueChanged
        }
    }
}
</script>
