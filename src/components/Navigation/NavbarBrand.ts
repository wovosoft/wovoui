import {defineComponent, h, PropType} from "vue";
import {makeString} from "../../composables/useProps";

export default defineComponent({
    name: "NavbarBrand",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: makeString("#"),
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["navbar-brand"],
            "href": props.tag === 'a' ? props.href : null
        }, slots.default?.())
    }
});