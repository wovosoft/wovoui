import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "InputGroupText",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "span"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: 'input-group-text'
        }, slots.default?.())
    }
});