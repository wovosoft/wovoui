<template>
    <teleport :to="container" v-if="container">
        <div
            v-bind="$attrs"
            :class="classes"
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div class="toast-header" v-if="$slots.header || header">
                <slot name="header">
                    <strong class="me-auto">{{ header }}</strong>
                </slot>
                <ButtonClose v-if="!noCloseButton" @click="visible = false"/>
            </div>
            <ToastBody :class="bodyClass" v-if="!noBody">
                <slot></slot>
            </ToastBody>
            <slot v-else></slot>
        </div>
    </teleport>
    <div
        v-bind="$attrs"
        :class="classes"
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div class="toast-header" v-if="$slots.header || header">
            <slot name="header">
                <strong class="me-auto">{{ header }}</strong>
            </slot>
            <ButtonClose v-if="!noCloseButton" @click="visible = false"/>
        </div>
        <ToastBody :class="bodyClass" v-if="!noBody">
            <slot></slot>
        </ToastBody>
        <slot v-else></slot>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from "vue";
import ButtonClose from "../Button/ButtonClose";
import ToastBody from "./ToastBody";
import type {ColorVariants} from "../../types";

export default defineComponent({
    name: "Toast",
    components: {ToastBody, ButtonClose},
    emits: ["update:show", "update:modelValue"],
    props: {
        show: {type: Boolean as PropType<boolean>, default: false},
        fade: {type: Boolean as PropType<boolean>, default: true},
        modelValue: {type: Boolean as PropType<boolean>, default: null},
        header: {type: String as PropType<string>, default: null},
        noBody: {type: Boolean as PropType<boolean>, default: false},
        noCloseButton: {type: Boolean as PropType<boolean>, default: false},
        bodyClass: {
            type: [Array, String, Object] as PropType<string | object>,
            default: null,
        },
        variant: {type: String as PropType<ColorVariants>, default: null},
        container: {type: String as PropType<string>, default: null},
        //in seconds
        timeout: {type: Number as PropType<number>, default: 3},
    },
    setup(props, {emit, expose}) {
        const visible = ref(false);
        visible.value = props.show;

        watch(
            () => props.show,
            (value) => (visible.value = value)
        );

        let timer = null;

        watch(visible, (value) => {
            emit("update:show", value);
            emit("update:modelValue", value);

            if (value && props.timeout) {
                timer = setTimeout(() => (visible.value = false), props.timeout);
            } else {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
            }
        });

        expose({
            show: () => (visible.value = true),
            hide: () => (visible.value = false),
            toggle: () => (visible.value = !visible.value),
        });

        return {
            visible,
            classes: computed(() => [
                "toast",
                {
                    show: visible.value,
                    fade: props.fade,
                    ["bg-" + props.variant]: props.variant,
                },
            ]),
        };
    },
});
</script>