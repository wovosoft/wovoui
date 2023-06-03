import {defineComponent, h} from "vue";
import {makeTag} from "@/composables";

export default defineComponent({
    name: "CarouselInner",
    props: {
        tag: makeTag("div")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["carousel-inner"]
        }, slots?.default?.())
    }
})