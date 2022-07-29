import {computed, defineComponent, h, onMounted, PropType, ref, watch} from "vue";
import {ColorVariants} from "../types/colorVariants";
import ButtonClose from "./ButtonClose";

const visible = ref<boolean>(false);


export default defineComponent({
    name: "Alert",
    emits: ["update:modelValue", "update:show", "dismissed", "countdown"],
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        dismissLabel: {type: String as PropType<string>, default: "Alert"},
        variant: {type: String as PropType<ColorVariants>, default: "primary"},
        dismissible: {type: Boolean as PropType<boolean>, default: false},
        fade: {type: Boolean as PropType<boolean>, default: false},
        modelValue: {type: Boolean as PropType<boolean | null>, default: null},
        show: {type: Boolean as PropType<boolean>, default: false},
        countdown: {type: Number as PropType<number | null>, default: null},
        countdownStep: {type: Number as PropType<number>, default: 1} //in seconds
    },
    setup(props, {slots, emit, expose}) {
        onMounted(() => {
            if (props.show && props.modelValue !== null) {
                visible.value = true;
            }
        });
        //synchronize data
        watch(visible, value => {
            emit("update:modelValue", value);
            emit("update:show", value);
        });
        watch(() => props.modelValue, value => visible.value = value);
        watch(() => props.show, value => visible.value = value);

        const show = () => visible.value = true;
        const hide = () => visible.value = false;
        const toggle = () => visible.value = !visible.value;

        /**
         * Exposed for parent components to be used by refs
         */
        expose({
            show,
            hide,
            toggle
        });

        const classes = computed(() => [
            "alert",
            {
                ["alert-" + props.variant]: !!props.variant,
                "alert-dismissible": props.dismissible,
                // "fade": shouldFade.value
            }
        ]);
        return () => h(props.tag, {
            role: "alert",
            class: classes.value
        },[
            slots?.default({
                show, hide, toggle
            }),
            h(ButtonClose)
        ])
    }
})