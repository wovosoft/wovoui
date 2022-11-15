import {defineComponent, h} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "AccordionBody",
    props: {
        tag: makeTag("div")
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {class: ['accordion-body']},
            slots.default ? slots.default() : null
        )
    }
})
