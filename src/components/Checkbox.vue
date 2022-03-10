<template>
    <template v-if="button">
        <input class="btn-check"
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
        <label v-if="$slots.default" :class="btnClass" :for="identifier">
            <slot></slot>
        </label>
    </template>
    <div :class="classes" v-else>
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

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "Checkbox",
    emits: ['update:modelValue', 'checked', 'unchecked'],
    props: {
        name: {type: String as PropType<string>, default: null},
        id: {type: String as PropType<string>, default: null},
        required: {type: Boolean as PropType<boolean>, default: false},
        readonly: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        inline: {type: Boolean as PropType<boolean>, default: false},
        modelValue: {default: null},
        value: {default: true},
        uncheckedValue: {default: false},
        switch: {type: Boolean as PropType<boolean>, default: false},

        //applies when it is button
        button: {type: Boolean as PropType<boolean>, default: false},
        variant: {type: String as PropType<ColorVariants>, default: "primary"},
        outline: {type: Boolean as PropType<boolean>, default: true},

        checked: {type: Boolean as PropType<boolean>, default: false},
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


        const btnClass = computed(() => [
            "btn",
            {
                ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: props.variant
            }
        ]);
        return {
            identifier,
            model,
            classes,
            btnClass,
            inputAttrs,
            valueChanged
        }
    },
    watch: {
        checked(value) {
            if (value) {
                this.$emit('update:modelValue', this.value);
                if (!this.$el.querySelector("input").checked) {
                    this.$el.querySelector("input").checked = true;
                }
            } else {
                this.$emit('update:modelValue', this.uncheckedValue);
                if (this.$el.querySelector("input").checked) {
                    this.$el.querySelector("input").checked = false;
                }
            }
        }
    }
})
</script>
