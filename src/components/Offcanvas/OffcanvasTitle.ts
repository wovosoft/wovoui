import {defineComponent, h} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "OffcanvasTitle",
    props: {
        tag: makeTag("h5")
    },
    setup(props, {slots}) {
        return h(props.tag, {
            class: "offcanvas-title"
        }, slots.default?.())
    }
});