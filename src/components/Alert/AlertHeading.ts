import {defineComponent, h} from "vue";
import {makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "AlertHeading",
    props: {
        tag: makeTag("h4")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
                class: ["alert-heading"]
            },
            [slots.default?.()]
        )
    }
})