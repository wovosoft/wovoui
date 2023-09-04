<template>
    <component :is="tag" class="accordion-header">
        <component
            @click="()=>model=!model"
            :is="toggleTag"
            class="accordion-button"
            :type="toggleTag==='button'?'button':null"
            :class="{'collapsed':!modelValue}"
            :aria-expanded="modelValue">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts" setup>
import {useModel} from "vue";
import {makeBoolean, makeTag} from "@/composables";

const props = defineProps({
    tag: makeTag("h2"),
    toggleTag: makeTag("button"),
    modelValue: makeBoolean(false)
});

const model = useModel(props, 'modelValue');
</script>