import {defineComponent, h} from "vue";
import {makeString, makeTag, makeTextVariant, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "CardHeader",
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
                "card-header",
                {
                    ["bg-" + props.variant]: !!props.variant,
                    ["text-" + props.textVariant]: !!props.textVariant,
                    ["border-" + props.borderVariant]: !!props.borderVariant,
                }
            ]
        }, slots?.default?.());
    }
})