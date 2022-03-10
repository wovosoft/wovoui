<template>
    <component :is="tag" v-if="visible" :class="classes" role="alert">
        <slot :countdown="countdown"
              :timeoutNow="timeoutNow"
              :show="show"
              :hide="hide"
              :toggle="toggle"></slot>
        <ButtonClose :aria-label="dismissLabel" @click="visible=false" v-if="dismissible"/>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, Ref, ref, watch} from "vue";
import ButtonClose from "./ButtonClose";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    emits: ["update:modelValue", "update:show", "dismissed", "countdown"],
    components: {ButtonClose},
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        dismissLabel: {type: String as PropType<string>, default: "Alert"},
        variant: {type: String as PropType<ColorVariants>, default: "primary"},
        dismissible: {type: Boolean as PropType<boolean>, default: false},
        fade: {type: Boolean as PropType<boolean>, default: false},
        modelValue: {type: Boolean as PropType<boolean>, default: null},
        show: {type: Boolean as PropType<boolean>, default: false},
        countdown: {type: Number as PropType<null>, default: null},
        countdownStep: {type: Number as PropType<number>, default: 1} //in seconds
    },
    setup(props, context) {
        //internal state
        const visible: Ref<boolean> = ref(false);
        const dismissHandler = ref(null);
        const countdownHandler = ref(null);
        const timeoutNow = ref(0);
        //need to work on fade later
        // const shouldFade = ref(false);

        watch(visible, value => {
            context.emit('update:modelValue', value);
            context.emit('update:show', value);
            if (!value) {
                context.emit("dismissed", true);
            }
            /**
             * Auto dismiss alert. When count property is set, it will be dismissed automatically.
             * countdown value should be in seconds.
             */
            if (value && props.countdown !== null) {
                dismissHandler.value = setTimeout(() => visible.value = false, props.countdown * 1000);
                context.emit('countdown', props.countdown);
                timeoutNow.value = props.countdown - 1;
                countdownHandler.value = setInterval(() => {
                    context.emit('countdown', timeoutNow.value--);
                }, props.countdownStep * 1000);
                // shouldFade.value = false;
            } else if (dismissHandler.value && !value) {
                // shouldFade.value = true;
                clearTimeout(dismissHandler.value);
                clearInterval(countdownHandler.value);
            }
        });
        watch(() => props.modelValue, value => visible.value = !!value);
        watch(() => props.show, value => visible.value = !!value);

        //initialize
        if (props.modelValue !== null) {
            visible.value = !!props.modelValue;
        }

        //https://stackoverflow.com/questions/51400329/check-if-a-value-is-supplied-to-a-prop-in-vue-js/51400460
        if (props.show !== null) {
            visible.value = !!props.show;
        } else {
            visible.value = !!props.modelValue;
        }

        const show = () => visible.value = true;
        const hide = () => visible.value = false;
        const toggle = () => visible.value = !visible.value;

        /**
         * Exposed for parent components to be used by refs
         */
        context.expose({
            show,
            hide,
            toggle
        });

        return {
            timeoutNow,
            classes: computed(() => [
                "alert",
                {
                    ["alert-" + props.variant]: !!props.variant,
                    "alert-dismissible": props.dismissible,
                    // "fade": shouldFade.value
                }
            ]),
            visible,
            show,
            hide,
            toggle
        }
    }
})
</script>
