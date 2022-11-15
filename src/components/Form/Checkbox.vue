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

const props = defineProps({
    switch: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    inline: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    reverse: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    modelValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<unknown>,
        default: null
    },
    value: {
        type: [String, Number, Boolean, Object, Array] as PropType<unknown>,
        default: true
    },
    //not implemented yet
    // indeterminateValue: {
    //     default: null
    // },
    uncheckedValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<unknown>,
        default: false
    },
    id: {
        type: String as PropType<string>,
        default: null
    },
    //sometimes checking might be done by object keys. in that case this function can be used
    checkBy: {
        type: Function as PropType<(value, model) => boolean>,
        default: null
    }
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