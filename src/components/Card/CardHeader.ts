import {defineComponent, h} from "vue";
import {getBinaryClasses, makeString, makeTag, makeTextVariant, makeVariant} from "@/composables";

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
                getBinaryClasses({
                    bg: props.variant,
                    text: props.textVariant,
                    border: props.borderVariant
                })
            ]
        }, slots?.default?.());
    }
})