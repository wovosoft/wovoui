<script lang="ts" setup>
import {computed, provide, reactive, ref} from "vue";
import {getBinaryClasses} from "@/composables/useClasses";

import {
    AccordionItemStateType,
    AccordionProps,
    RegisterAccordionItemInjectionKey,
    SetActiveAccordionItemInjectionKey
} from "@/index";

const props = withDefaults(defineProps<AccordionProps>(), {
    tag: 'div',
});

const emit = defineEmits<{
    'update:modelValue': [value: number]
}>();

const activeItem = ref<AccordionItemStateType>();
const items: AccordionItemStateType[] = reactive([]);

provide(RegisterAccordionItemInjectionKey, (item: AccordionItemStateType) => items.push(item));

provide(SetActiveAccordionItemInjectionKey, (item: AccordionItemStateType): void => {
    activeItem.value = item;
    emit('update:modelValue', items.indexOf(item));

    if (!props.alwaysOpen) {
        items.filter((i: AccordionItemStateType): boolean => i !== item)
            .forEach((i: AccordionItemStateType): boolean => i.value = false);
    }
});

defineExpose({
    toggleAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = !i.value),
    openAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = true),
    collapseAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = false)
});

const classes = computed(() => [
    'accordion', getBinaryClasses({
        accordionFlush: props.flush
    })
]);
</script>

<template>
    <component :is="props.tag" :class="classes">
        <slot/>
    </component>
</template>