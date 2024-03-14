<template>
    <component :is="tag" class="offcanvas-header">
        <OffcanvasTitle v-if="$slots.title || title">
            <slot name="title">
                {{ title }}
            </slot>
        </OffcanvasTitle>
        <slot></slot>
        <ButtonClose
            v-if="showClose"
            :white="btnCloseWhite"
            @click="$emit('update:modelValue',false)"
        />
    </component>
</template>

<script lang="ts" setup>
import {ButtonClose, OffcanvasHeaderProps, OffcanvasTitle} from "@/components";

withDefaults(defineProps<OffcanvasHeaderProps>(), {
    tag: 'header',
    showClose: true,
});

defineEmits<{
    (e: "update:modelValue", value: boolean): void
}>();
</script>