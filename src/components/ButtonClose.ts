import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    props: {
        white: {type: Boolean as PropType<boolean>, default: () => false},
        ariaLabel: {type: String as PropType<string>, default: "Close"},
        disabled: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return () => h(
            "button",
            {
                type: "button",
                disabled: props.disabled,
                ariaLabel: props.ariaLabel,
                class: ["btn-close", {'btn-close-white': props.white}]
            }
        )
    }
})