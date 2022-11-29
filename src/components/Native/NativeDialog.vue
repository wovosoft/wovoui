<template>
    <dialog ref="theDialog">
        <ModalHeader>
            <slot name="header">{{ header }}</slot>
            <ButtonClose @click="open=false"/>
        </ModalHeader>
        <main>
            {{ open }}
            <slot></slot>
        </main>
    </dialog>
</template>

<script lang="ts" setup>
import {PropType, ref, watch} from "vue";
import ModalHeader from "../Modal/ModalHeader";
import ButtonClose from "../Button/ButtonClose";
import {makeBoolean} from "../../composables/useProps";

const props = defineProps({
    header: String as PropType<string>,
    modelValue: makeBoolean(false)
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

const open = ref<boolean>(props.modelValue);
watch(() => props.modelValue, value => {
    if (value !== open.value) {
        open.value = value;
    }
});

watch(open, value => {
    value ? show() : hide();
    emit("update:modelValue", value);
})

const theDialog = ref<HTMLDialogElement>();

function show() {
    theDialog.value?.showModal();
}

function hide() {
    theDialog.value?.close();
}

defineExpose({
    show, hide
})
</script>
