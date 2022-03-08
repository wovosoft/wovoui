import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "NavbarBrand",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: {type: String as PropType<string>, default: "#"},
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["navbar-brand"],
            "href": props.tag === 'a' ? props.href : null
        }, slots.default?.())
    }
})