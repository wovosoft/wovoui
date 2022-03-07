import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CardLink",
    props: {
        href: {type: String as PropType<string>, default: "#"},
    },
    setup(props, {slots}) {
        return () => h("a", {
            href: props.href,
            class: ["card-link"]
        }, slots.default ? slots.default() : null)
    }
})