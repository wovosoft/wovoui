import {defineComponent, h} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "CarouselIndicators",
    props: {
        tag: makeTag("div")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["carousel-indicators"]
        }, slots.default?.())
    }
})