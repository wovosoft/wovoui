import {defineComponent, h} from "vue";
import {makeString, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "CardTitle",
    props: {
        content: makeString(),
        tag: makeTag("h4")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["card-title"]
        }, slots.default?.() || (() => props.content))
    }
});