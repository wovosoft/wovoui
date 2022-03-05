import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "Grid",
    props: {
        tag: {type: String as PropType<string>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: "grid"
        }, slots.default())
    }
})