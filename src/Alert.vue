<template>
    <component :is="tag" v-if="visible" :class="classes" role="alert">
        <slot></slot>
        <ButtonClose :aria-label="dismissLabel" @click="visible=false" v-if="dismissible"/>
    </component>
</template>

<script>
import {computed, ref, watch} from "vue";
import {makeBoolean, makeNumber, makeString} from "./shared/properties.js";
import ButtonClose from "./ButtonClose.vue";

export default {
    emits: ["update:modelValue", "dismissed", "countdown"],
    components: {ButtonClose},
    props: {
        tag: makeString("div"),
        dismissLabel: makeString(null),
        variant: makeString("primary"),
        dismissible: makeBoolean(false),
        fade: makeBoolean(false),
        modelValue: makeBoolean(false),
        show: makeBoolean(null),
        countdown: makeNumber(null)
    },
    setup(props, context) {
        const visible = ref(false);
        const dismissHandler = ref(null);
        const countdownHandler = ref(null);
        const timoutNow = ref(0);
        //need to work on fade later
        // const shouldFade = ref(false);
        watch(visible, value => {
            context.emit('update:modelValue', value);
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
                timoutNow.value = props.countdown - 1;
                countdownHandler.value = setInterval(() => {
                    context.emit('countdown', timoutNow.value--);
                }, 1000);
                // shouldFade.value = false;
            } else if (dismissHandler.value && !value) {
                // shouldFade.value = true;
                clearTimeout(dismissHandler.value);
                clearInterval(countdownHandler.value);
            }
        });
        watch(() => props.modelValue, value => visible.value = value);
        watch(() => props.show, value => visible.value = value);

        //https://stackoverflow.com/questions/51400329/check-if-a-value-is-supplied-to-a-prop-in-vue-js/51400460
        if (props.show !== null) {
            visible.value = props.show;
        } else {
            visible.value = props.modelValue;
        }

        return {
            classes: computed(() => [
                "alert",
                {
                    ["alert-" + props.variant]: !!props.variant,
                    "alert-dismissible": props.dismissible,
                    // "fade": shouldFade.value
                }
            ]),
            visible
        }
    }
}
</script>
