import {defineComponent, h} from "vue";
import {makeTag} from "@/composables";

export default defineComponent({
    name: "CardText",
    props: {
        tag: makeTag("p")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["card-text"]
        }, slots?.default?.())
    }
})
