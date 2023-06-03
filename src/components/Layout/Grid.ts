import {defineComponent, h} from "vue";
import {makeTag} from "@/composables";

export default defineComponent({
    name: "Grid",
    props: {
        tag: makeTag("div")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: "grid"
        }, slots.default?.())
    }
})