import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "AlertHeading",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h4"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
                class: ["alert-heading"]
            },
            [slots.default?.()]
        )
    }
})