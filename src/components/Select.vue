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
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {computed, ref, watch, defineComponent} from "vue";
import {isObject} from "../shared/utilities.js";

export default defineComponent({
    props: {
        multiple: makeBoolean(false),
        size: makeString(),
        options: make(Array, []),
        valueField: make([Function, String], null),
        textField: make([Function, String], null),
        disabledField: makeString('disabled'),
        labelField: makeString("label"),
        modelValue: {
            default: null
        }
    },
    setup(props, context) {
        const model = ref(null);
        watch(model, (val) => context.emit('update:modelValue', val));
        watch(() => props.modelValue, value => model.value = value);

        const getEntity = (o, k) => {
            if (typeof props[k] === "string" || props[k] === null) {
                if (!isObject(o)) {
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