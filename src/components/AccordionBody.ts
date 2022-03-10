import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "AccordionBody",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {class: ['accordion-body']},
            slots.default ? slots.default() : null
        )
    }
})
