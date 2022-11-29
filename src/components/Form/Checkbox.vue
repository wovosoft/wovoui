<template>
    <div class="form-check" :class="wrapperClasses">
        <input class="form-check-input"
               type="checkbox"
               :value="value"
               ref="check"
               :id="theId"
               :disabled="disabled"
               @input="onChanged"
        />
        <label class="form-check-label" :for="theId">
            <slot/>
        </label>
    </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, PropType, ref, watch} from "vue";
import {uid} from "../../composables/useHelpers";
import {makeBoolean, makeProp, makeString} from "../../composables/useProps";

const props = defineProps({
    switch: makeBoolean(false),
    inline: makeBoolean(false),
    reverse: makeBoolean(false),
    disabled: makeBoolean(false),
    modelValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<unknown>,
        default: null
    },
    value: makeProp<unknown>(true, [String, Number, Boolean, Object, Array]),
    //not implemented yet
    // indeterminateValue: {
    //     default: null
    // },
    uncheckedValue: makeProp<unknown>(false, [String, Number, Boolean, Object, Array]),
    id: makeString(),
    //sometimes checking might be done by object keys. in that case this function can be used
    checkBy: makeProp<(value, model) => boolean>(null, Function)
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: unknown)
}>();


const check = ref<HTMLInputElement>(null);
const theId = computed(() => props.id || 'wovoui-bootstrap-vue-check-' + uid());
const isChecked = computed(() => {
    if (props.checkBy !== null) {
        return props.checkBy(props.value, props.modelValue);
    }

    if (Array.isArray(props.modelValue)) {
        return props.modelValue.includes(props.value);
    }
    return props.value === props.modelValue;
});


onMounted(() => {
    // if(![props.uncheckedValue,props.value].includes(props.modelValue)){
    //     check.value.indeterminate=true;
    // }else {
    //     check.value.checked = isChecked.value;
    // }

    check.value.checked = isChecked.value;
});

watch(() => props.modelValue, value => {
    check.value.checked = isChecked.value;
}, {deep: true});

const wrapperClasses = computed(() => [{
    'form-switch': props.switch,
    'form-check-inline': props.inline,
    'form-check-reverse': props.reverse,
}]);

function onChanged(e) {
    if (Array.isArray(props.modelValue)) {
        if (e.target.checked) {
            //same model instance can be handled by multiple components.
            //so we need to first check if it is exists in model before inserting
            let index = props.modelValue.findIndex(i => i === props.value);
            if (index < 0) {
                props.modelValue.push(props.value);
                emit("update:modelValue", props.modelValue);
            }
        } else {
            //let's check if it is already removed
            let index = props.modelValue.findIndex(i => i === props.modelValue);
            if (props.modelValue.includes(props.value)) {
                props.modelValue.splice(index, 1);
                emit("update:modelValue", props.modelValue);
            }
        }
    } else {
        emit("update:modelValue", e.target.checked ? props.value : props.uncheckedValue);
    }
}
</script>