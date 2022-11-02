import {defineComponent, ref, h, onMounted, watch} from "vue";
import ButtonClose from "./ButtonClose";
import Icon from "./Icon";
import {makeBoolean, makeNumber, makeString, makeTag, makeVariant} from "../composables/useProps";

export default defineComponent({
    name: "Alert",
    emits: ["update:modelValue", "update:show"],
    props: {
        tag: makeTag("div"),
        variant: makeVariant("primary"),
        dismissible: makeBoolean(false),
        countdown: makeNumber(3),
        modelValue: makeBoolean(null),
        show: makeBoolean(false),
        fade: makeBoolean(false),
        closeBtnWhite: makeBoolean(false),
        icon: makeString()
    },
    setup(props, {slots, expose, emit}) {
        const visible = ref<boolean>(false);
        watch(visible, value => {
            emit("update:modelValue", value);
            emit("update:show", value);
        });
        const autoHideTimer = ref(null);
        const setAutoHideTimer = () => {
            if (visible.value && props.dismissible) {
                autoHideTimer.value = setTimeout(() => applyVisibility(false), props.countdown * 1000);
            } else {
                if (autoHideTimer.value) {
                    clearTimeout(autoHideTimer.value);
                    autoHideTimer.value = null;
                }
            }
        }
        const addClassShow = ref<boolean>(false);
        const applyVisibility = (isVisible: boolean = false) => {
            if (isVisible && props.fade) {
                visible.value = true;
                setTimeout(() => {
                    addClassShow.value = true;
                    setAutoHideTimer();
                }, 0);
            } else if (!isVisible && props.fade) {
                addClassShow.value = false;
                setTimeout(() => visible.value = false, 150)
            } else {
                visible.value = isVisible;
                setAutoHideTimer();
            }
        }

        //can be implemented for dynamic transition time. But currently it isn't needed.
        //it can be used to get the animation time by logging the event
        // function transitionEnded(e) {
        //     console.log(e)
        // }

        onMounted(() => {
            //when modelValue is not set and visibility is controlled by the prop 'show'
            //modelValue has higher priority
            if (props.modelValue === null && props.show) {
                applyVisibility(props.show);
            }
        });

        watch(() => props.show, applyVisibility);
        watch(() => props.modelValue, applyVisibility);


        expose({
            show: () => applyVisibility(true),
            hide: () => applyVisibility(false),
            toggle: () => applyVisibility(!visible.value)
        });

        function getContent() {
            if (props.icon) {
                return h('div',
                    {class: ["flex-shrimp-0"]},
                    [slots.default?.()]
                );
            }
            return slots.default?.();
        }

        return () => {
            if (visible.value) {
                return h(
                    props.tag,
                    {
                        // onTransitionend: transitionEnded,
                        role: "alert",
                        class: [
                            "alert",
                            {
                                "d-flex": props.dismissible || props.icon,
                                ["alert-" + props.variant]: props.variant,
                                "alert-dismissible": props.dismissible,
                                "fade": props.fade,
                                show: addClassShow.value
                            }
                        ]
                    },
                    [
                        props.icon ? h(Icon, {icon: props.icon}) : null,
                        getContent(),
                        props.dismissible ? h(ButtonClose, {
                            onClick: () => applyVisibility(false),
                            white: props.closeBtnWhite
                        }) : null
                    ]
                );
            }
        }
    }
})