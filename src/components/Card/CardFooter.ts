import {defineComponent, h} from "vue";
import {makeString, makeTag, makeTextVariant, makeVariant} from "../../composables/useProps";
import {getBinaryClasses} from "../../composables/useClasses";

export default defineComponent({
    name: "CardFooter",
    props: {
        tag: makeTag("div"),
        content: makeString(),
        variant: makeVariant(null),
        borderVariant: makeVariant(null),
        textVariant: makeTextVariant(null)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: [
                "card-footer",
                getBinaryClasses({
                    bg: props.variant,
                    text: props.textVariant,
                    border: props.borderVariant
                })
            ]
        }, slots?.default?.());
    }
})