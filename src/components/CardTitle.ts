import {defineComponent, PropType, h} from "vue";

export default defineComponent({
    name: "CardTitle",
    props: {
        content: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h4"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["card-title"]
        }, slots.default?.())
    }
});