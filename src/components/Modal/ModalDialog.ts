import {defineComponent, h, PropType} from "vue";
import type {ModalFullScreen, ModalSizes} from "@/index";
import {makeBoolean, makeSize, makeTag} from "@/composables";

export default defineComponent({
    props: {
        tag: makeTag("div"),
        scrollable: makeBoolean(false),
        centered: makeBoolean(false),
        size: makeSize<ModalSizes>(null),
        fullscreen: {type: [Boolean, String] as PropType<ModalFullScreen>, default: false}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-dialog", {
                ["modal-" + props.size]: props.size,
                ["modal-fullscreen" + (typeof props.fullscreen === 'string' ? ("-" + props.fullscreen) : "")]: !!props.fullscreen,
                "modal-dialog-scrollable": props.scrollable,
                "modal-dialog-centered": props.centered
            }],
        }, slots?.default?.())
    }
})