<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType, watch} from "vue";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "ul"},
    dark: {type: Boolean as PropType<boolean>, default: false},
    show: {type: Boolean as PropType<boolean>, default: false}
});

const classes = computed(() => ([
    "dropdown-menu",
    {
        'dropdown-menu-dark': props.dark,
        'show': props.show,
    }
]));

const emit = defineEmits<{
    (e: 'opened', value: boolean): void
    (e: 'closed', value: boolean): void
}>();

watch(() => props.show, value => {
    if (value) {
        emit("opened", true);
    } else {
        emit("closed", true);
    }
});
</script>
