import {defineComponent, h} from "vue";
import type {ResponsiveSizes} from "@/types";
import {makeBoolean, makeSize, makeTag} from "@/composables";

export default defineComponent({
    name: "Container",
    props: {
        tag: makeTag("div"),
        fluid: makeBoolean(false),
        size: makeSize<ResponsiveSizes>(null)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {
                "container": !(props.fluid || props.size),
                "container-fluid": props.fluid && !props.size,
                ["container-" + props.size]: props.size && !props.fluid
            }
        }, slots.default?.())
    }
});
