<script lang="ts" setup>
import type {ButtonCloseProps} from "@/index";
import {computed} from "vue";

const props = withDefaults(defineProps<ButtonCloseProps>(), {
    ariaLabel: "Close"
});

const attrs = computed(() => ({
    disabled: props.disabled,
    ariaLabel: props.ariaLabel,
    class: [
        'btn-close',
        {
            'btn-close-white': props.white,
            ['btn-' + props.size]: props.size
        }
    ]
}));
</script>

<template>
    <button type="button" v-bind="attrs"></button>
</template>