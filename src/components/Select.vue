<template>
    <select :class="classes" v-model="model" :multiple="multiple">
        <slot name="first"></slot>
        <slot></slot>
        <template v-for="(o,ok) in options" :key="ok">
            <optgroup :label="o[labelField]" v-if="o.hasOwnProperty('options')">
                <option v-for="(gi,gi_key) in o.options"
                        :key="gi_key"
                        :value="getEntity(gi,'valueField')"
                        :disabled="isDisabledOption(gi)">
                    <slot name="text">
                        {{ getEntity(gi, 'textField') }}
                    </slot>
                </option>
            </optgroup>
            <option v-else :value="getEntity(o,'valueField')" :disabled="isDisabledOption(o)">
                <slot name="text">
                    {{ getEntity(o, 'textField') }}
                </slot>
            </option>
        </template>
        <slot name="last"></slot>
    </select>
</template>

<script lang="ts">
import {computed, ref, watch, defineComponent, PropType} from "vue";
import type {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    emits: ['update:modelValue', 'change'],
    props: {
        multiple: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<buttonSizes>, default: null},
        options: {type: Array as PropType<any[]>, default: () => ([])},
        valueField: {type: [Function, String] as PropType<Function | string>, default: null},
        textField: {type: [Function, String] as PropType<Function | string>, default: null},
        disabledField: {type: String as PropType<string>, default: "disabled"},
        labelField: {type: String as PropType<string>, default: "label"},
        modelValue: {default: null}
    },
    setup(props, {emit}) {
        const model = ref<unknown>(null);
        watch(() => props.modelValue, value => model.value = value);
        watch(model, (val) => {
            emit('update:modelValue', val);
            emit('change', val);
        });
        if (props.modelValue !== null) {
            model.value = props.modelValue;
        }


        const getEntity = (o, k) => {
            if (typeof props[k] === "string" || props[k] === null) {
                if (!(typeof o === "object" && !Array.isArray(o))) {
                    return o;
                }
                return o[props[k] === null ? 'text' : props[k]];
            } else if (typeof props[k] === "function") {
                return props[k](o);
            }
            return o;
        };

        return {
            getEntity,
            isDisabledOption: o => o.hasOwnProperty(props.disabledField) ? o[props.disabledField] : false,
            model,
            classes: computed(() => [
                "form-select",
                {
                    ["form-select-" + props.size]: !!props.size
                }
            ])
        }
    }
})
</script>