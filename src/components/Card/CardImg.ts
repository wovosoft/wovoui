import {defineComponent, h} from "vue";
import {makeBoolean, makeString} from "@/composables";

export default defineComponent({
    name: "CardImg",
    props: {
        src: makeString(),
        alt: makeString(),
        overlay: makeBoolean(false),
        bottom: makeBoolean(false),
        end: makeBoolean(false),
        left: makeBoolean(false),
        right: makeBoolean(false),
        start: makeBoolean(false),
        top: makeBoolean(false)
    },
    setup(props) {
        return () => h("img", {
                src: props.src,
                alt: props.alt,
                class: {
                    "card-img": props.overlay,
                    "card-img-top": props.top,
                    "card-img-bottom": props.bottom,
                    "card-img-left": props.left || props.start,
                    "card-img-right": props.right || props.end,
                }
            }
        )
    }
})