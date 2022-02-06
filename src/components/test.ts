import {computed, defineComponent, h} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";

export default defineComponent({
    props: {
        tag: makeString("ul"),
        flush: makeBoolean(false),
        numbered: makeBoolean(false),
        horizontal: {
            type: [Boolean, String],
            default: false
        },
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "list-group",
                {
                    "list-group-flush": props.flush,
                    "list-group-numbered": props.numbered,
                    ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal,
                }
            ])
        }
    },
    render() {
        return h(
            this.tag,
            {class: this.classes},
            this.$slots
        )
    }
})