<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, watch} from "vue";
import {makeBoolean, makeTag} from "@/composables/useProps";

const props = defineProps({
    tag: makeTag("ul"),
    dark: makeBoolean(false),
    show: makeBoolean(false)
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
