import {Component, defineComponent, h, isVNode, onMounted, PropType, reactive, ref, watch} from "vue";
import {makeBoolean, makeNumber, makeString, makeTag, makeVariant} from "../../composables/useProps";
import Icon from "../Ui/Icon";
import ButtonClose from "../Button/ButtonClose";
import {Icons} from "@wovosoft/wovoui-icons/src/types";

function getContent(props, slots) {
    if (props.icon) {
        return h('div',
            {class: ["flex-shrink-0"]},
            [
                slots?.heading?.() || props.heading,
                slots.default?.()
            ]
        );
    }
    return [
        slots?.heading?.() || props.heading,
        slots?.default?.()
    ];
}

function getIcon(props) {
    if (props.icon) {
        if (typeof props.icon === "string") {
            return h(() => Icon, {icon: props.icon});
        }
        return h(props.icon, {
            class: "me-2 flex-shrink-0"
        });
    }
    return null;
}

function getButton(props, state) {
    return props.dismissible ? h(ButtonClose, {
        onClick: () => state.value = false,
        white: props.closeBtnWhite
    }) : null
}

export default defineComponent({
    name: "Alert",
    emits: ["update:modelValue", "update:show"],
    props: {
        tag: makeTag("div"),
        variant: makeVariant("primary"),
        dismissible: makeBoolean(false),
        timeout: makeNumber(0),
        timeoutStep: makeNumber(1),
        modelValue: makeBoolean(null),
        show: makeBoolean(null),
        closeBtnWhite: makeBoolean(false),
        icon: {
            type: [String, Object] as PropType<Icons | Component>,
            default: null
        },
        heading: makeString(null)
    },
    setup(props, {slots, expose, emit}) {
        const state = ref<boolean>(!!(props.modelValue || props.show));
        const shouldGen = ref<boolean>(false);
        const classStates = reactive({
            show: false
        });

        //watch model value and update state
        watch(() => props.modelValue, isVisible => {
            if (isVisible !== state.value) {
                state.value = isVisible;
            }
        })
        //watch state and apply state
        watch(state, applyState);
        //{immediate:true} throws error for timeout so, doing it manually
        onMounted(() => {
            applyState(state.value)
        });

        const timeout = ref(null);

        /**
         * isVisible is updated state.
         * true => should show now
         * false => show hide now
         * @param isVisible
         */
        function applyState(isVisible: boolean) {
            if (isVisible) {
                classStates.show = true;
                shouldGen.value = true;
                emit("update:modelValue", isVisible);
                if (props.timeout) {
                    timeout.value = setTimeout(
                        () => state.value = false,
                        props.timeout * 1000 / props.timeoutStep
                    );
                }
            } else {
                classStates.show = false;
                if (timeout.value) {
                    clearTimeout(timeout.value);
                    timeout.value = null;
                }
                if (props.dismissible) {
                    //fade away animation takes 150ms, then emit value
                    setTimeout(() => {
                        emit("update:modelValue", isVisible);
                        shouldGen.value = false;
                    }, 150);
                } else {
                    //emit immediately
                    emit("update:modelValue", isVisible);
                    shouldGen.value = false;
                }
            }
        }

        function show() {
            state.value = true;
        }

        function hide() {
            state.value = false;
        }

        function toggle() {
            state.value ? hide() : show();
        }

        expose({show, hide, toggle});

        return () => shouldGen.value ? h(props.tag, {
            role: "alert",
            class: [
                "alert",
                {
                    "d-flex": props.dismissible || props.icon,
                    ["alert-" + props.variant]: props.variant,
                    "alert-dismissible": props.dismissible,
                    "fade": props.dismissible,
                    show: classStates.show && props.dismissible  //sync with dismissible, but at nextTick
                }
            ]
        }, [
            getIcon(props),
            getContent(props, slots),
            getButton(props, state)
        ]) : null
    }
});