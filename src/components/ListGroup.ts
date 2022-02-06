import {makeString} from "../shared/properties.js";
import {computed, defineComponent, h, PropType} from "vue";
import {Binary, BinaryString} from "../types";

export default defineComponent({
    name: "ListGroup",
    props: {
        tag: makeString("ul"),
        flush: {type: Boolean as PropType<Binary>, default: () => false},
        numbered: {type: Boolean as PropType<Binary>, default: () => false},
        horizontal: {type: [Boolean, String] as PropType<BinaryString>, default: false},
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
        };
    },
    render() {
        return h(
            this.tag,
            {class: this.classes},
            this.$slots
        )
    }
})