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
import {ButtonClose, ModalHeader} from "@/components"
import {makeBoolean} from "@/composables";

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

const show = () => theDialog.value?.showModal();

const hide = () => theDialog.value?.close();

defineExpose({
    show, hide
})
</script>
