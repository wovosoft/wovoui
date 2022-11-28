import {defineComponent, h, PropType} from "vue";
import type {ModalSizes, ModalFullScreen} from "../../types";

export default defineComponent({
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        scrollable: {type: Boolean as PropType<boolean>, default: false},
        centered: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<ModalSizes>, default: null},
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
        }, slots?.default())
    }
})