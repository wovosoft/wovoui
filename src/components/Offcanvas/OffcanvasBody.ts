import {defineComponent, h, PropType} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "OffCanvasBody",
    props: {
        tag: makeTag("div")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: "offcanvas-body"
        }, slots.default?.())
    }
});