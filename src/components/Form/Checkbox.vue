<template>
    <div class="form-check" :class="wrapperClasses">
        <input class="form-check-input"
               type="checkbox"
               :false-value="uncheckedValue"
               :true-value="value"
               :value="value"
               :role="$props.switch?'switch':null"
               @change="onChange"
               v-model="model"
               :id="theId">
        <label class="form-check-label" :for="theId" v-if="$slots.default">
            <slot/>
        </label>
    </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {uid} from "../../composables/useHelpers";
import {makeBoolean, makeProp, makeString} from "../../composables/useProps";

const props = defineProps({
    switch: makeBoolean(false),
    // button: makeBoolean(false),//implement later
    inline: makeBoolean(false),
    reverse: makeBoolean(false),
    disabled: makeBoolean(false),
    modelValue: {
        default: null
    },
    value: {default: true},
    uncheckedValue: {default: false},
    id: makeString(),
    //sometimes checking might be done by object keys. in that case this function can be used
    checkBy: makeProp<(value, model) => boolean>(null, Function)
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: unknown)
}>();

const theId = computed(() => props.id || "wbv-" + uid());
const model = ref<unknown>(props.modelValue);

function onChange(e) {
    emit("update:modelValue", model.value);
}

watch(() => props.modelValue, value => {
    model.value = value;
});

const wrapperClasses = computed(() => [{
    'form-switch': props.switch,
    'form-check-inline': props.inline,
    'form-check-reverse': props.reverse,
}]);
</script>