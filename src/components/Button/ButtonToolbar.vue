<script lang="ts" setup>
import {computed} from "vue";
import {ButtonToolbarProps} from "@/components";

const props = withDefaults(defineProps<ButtonToolbarProps>(), {
    tag: "div",
    role: "toolbar",
});

const attrs = computed(() => ({
    role: props.role,
    class: [
        "btn-toolbar",
        {
            "justify-content-between": props.justified
        }
    ]
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot/>
    </component>
</template>