import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "ButtonToolbar",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        role: {type: String as PropType<string>, default: "toolbar"},
        justified: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {
                role: props.role,
                class: [
                    "btn-toolbar",
                    {
                        "justify-content-between": props.justified
                    }
                ]
            },
            slots.default?.()
        )
    }
})