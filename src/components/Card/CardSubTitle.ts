import {defineComponent, h} from "vue";
import {makeString, makeTag, makeTextVariant} from "../../composables/useProps";

export default defineComponent({
    name: "CardSubTitle",
    props: {
        title: makeString(),
        tag: makeTag("h6"),
        textVariant: makeTextVariant("muted")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: [
                "card-subtitle",
                {
                    ["text-" + props.textVariant]: !!props.textVariant
                }
            ]
        }, slots?.default?.());
    }
})