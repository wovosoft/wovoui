/**
 * Multiple routers should be support
 * e.g. vue-router, inertia router, nuxt router etc
 */
import {defineComponent, h, PropType} from "vue";
import {makeString} from "../../composables/useProps";

export default defineComponent({
    name: "Link",
    props: {
        href: makeString("#"),
        target: {type: String as PropType<string>, default: "_self"}
    },
    setup(props, {slots}) {
        return () => h("a", {
            href: props.href,
            target: props.target
        }, slots.default ? slots.default() : null)
    }
})