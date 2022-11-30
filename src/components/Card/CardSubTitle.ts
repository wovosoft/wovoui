import {defineComponent, h} from "vue";
import {makeString, makeTag, makeTextVariant} from "../../composables/useProps";
import {getBinaryClasses} from "../../composables/useClasses";

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
                getBinaryClasses({
                    text: props.textVariant,
                })
            ]
        }, slots?.default?.());
    }
})