import {defineComponent, h} from "vue";
import {makeString} from "../../composables/useProps";

export default defineComponent({
    name: "CardLink",
    props: {
        href: makeString("#"),
    },
    setup(props, {slots}) {
        return () => h("a", {
                href: props.href,
                class: ["card-link"]
            }, slots.default?.()
        )
    }
})