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
            :white="btnCloseWhite"
            @click="$emit('update:modelValue',false)"
        />
    </component>
</template>

<script lang="ts">
import ButtonClose from "./ButtonClose";
import {computed, defineComponent, PropType} from "vue";
import OffCanvasTitle from "./OffCanvasTitle.vue";

export default defineComponent({
    name: "OffCanvasHeader",
    emits: ["update:modelValue"],
    components: {
        OffCanvasTitle,
        ButtonClose
    },
    props: {
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        tag: {type: String as PropType<string>, default: "div"},
        title: {type: String as PropType<string>, default: null},
        showClose: {type: Boolean as PropType<boolean>, default: true},
        btnCloseWhite: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => (["offcanvas-header"]))
        }
    }
})
</script>