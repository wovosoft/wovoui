import {defineComponent, h, PropType} from "vue";
import type {FeedbackTypes} from "@/types";
import {makeString, makeTag} from "@/composables/useProps";

export default defineComponent({
    props: {
        tag: makeTag("div"),
        type: {type: String as PropType<FeedbackTypes>, default: 'valid'},
        message: makeString(),
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {[props.type + '-feedback']: props.type}
        }, slots?.default?.() || props.message)
    }
})