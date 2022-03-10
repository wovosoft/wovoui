import {defineComponent, h, PropType} from "vue";
import {Binary} from "../types/Binary";

export default defineComponent({
    name: "ButtonToolbar",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        role: {type: String as PropType<string>, default: "toolbar"},
        justified: {type: Boolean as PropType<Binary>, default: false}
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