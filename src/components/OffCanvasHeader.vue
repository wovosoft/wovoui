<template>
    <component :is="tag" :class="classes">
        <OffCanvasTitle v-if="$slots.title || title">
            <slot name="title">
                {{ title }}
            </slot>
        </OffCanvasTitle>
        <slot></slot>
        <ButtonClose
            v-if="showClose"
            @click="$emit('update:modelValue',false)"
        />
    </component>
</template>

<script lang="ts">
import ButtonClose from "./ButtonClose.vue";
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed,defineComponent} from "vue";
import OffCanvasTitle from "./OffCanvasTitle.vue";

export default defineComponent({
    name: "OffCanvasHeader",
    emits: ["update:modelValue"],
    components: {
        OffCanvasTitle,
        ButtonClose
    },
    props: {
        modelValue: makeBoolean(false),
        tag: makeString("div"),
        title: makeString(),
        showClose: makeBoolean(true)
    },
    setup(props) {
        const classes = computed(() => {
            return [
                "offcanvas-header"
            ]
        });
        return {
            classes
        }
    }
})
</script>