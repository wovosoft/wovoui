import {defineComponent, h} from "vue";
import {makeBoolean, makeString, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "ButtonToolbar",
    props: {
        tag: makeTag("div"),
        role: makeString("toolbar"),
        justified: makeBoolean(false)
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
            slots?.default?.()
        )
    }
})