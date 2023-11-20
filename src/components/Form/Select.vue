<template>
    <Dropdown v-if="multiple"
              class="form-control p-0 border-0"
              :toggle-props="{outline:true}"
              :text="model.length ? model.join(', ') : placeholder"
              :menu-props="{style:{'max-height':scrollHeight,overflow:'auto'},class:'w-100'}">
        <li v-for="o in options" role="presentation">
            <div class="dropdown-item">
                <Checkbox v-model="model"
                          :value="getEntity(o,'valueField')"
                          :disabled="isDisabledOption(o)">
                    <slot name="text">
                        {{getEntity(o, 'textField')}}
                    </slot>
                </Checkbox>
            </div>
        </li>
    </Dropdown>
    <select :class="classes" v-model="model" v-else>
        <slot name="first"></slot>
        <slot></slot>
        <template v-for="(o) in options">
            <optgroup :label="o[labelField]" v-if="o.hasOwnProperty('options')">
                <option v-for="(gi,gi_key) in o.options"
                        :key="gi_key"
                        :value="getEntity(gi,'valueField')"
                        :disabled="isDisabledOption(gi)">
                    <slot name="text">
                        {{getEntity(gi, 'textField')}}
                    </slot>
                </option>
            </optgroup>
            <option v-else :value="getEntity(o,'valueField')" :disabled="isDisabledOption(o)">
                <slot name="text">
                    {{getEntity(o, 'textField')}}
                </slot>
            </option>
        </template>
        <slot name="last"></slot>
    </select>
</template>

<script lang="ts" setup>
import {computed, useModel} from "vue";
import type {SelectProps} from "@/index";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import Checkbox from "@/components/Form/Checkbox.vue";

const props = withDefaults(defineProps<SelectProps>(), {
    options: [],
    disabledField: "disabled",
    labelField: "label",
    modelValue: null,
    placeholder: 'Not Selected',
    scrollHeight: '250px',
});

const model = useModel(props, 'modelValue');

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

const isDisabledOption = o => o.hasOwnProperty(props.disabledField) ? o[props.disabledField] : false

const classes = computed(() => [
    "form-select",
    {
        ["form-select-" + props.size]: !!props.size
    }
]);
</script>