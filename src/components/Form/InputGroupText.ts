import {defineComponent, h} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "InputGroupText",
    props: {
        tag: makeTag("span")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: 'input-group-text'
        }, slots.default?.())
    }
});