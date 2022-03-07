import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "Link",
    props: {
        href: {type: String as PropType<string>, default: "#"},
        target: {type: String as PropType<string>, default: "_self"}
    },
    setup(props, {slots}) {
        return () => h("a", {
            href: props.href,
            target: props.target
        }, slots.default ? slots.default() : null)
    }
})