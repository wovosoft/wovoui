import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CardText",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "p"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["card-text"]
        }, slots.default ? slots.default() : null)
    }
})
