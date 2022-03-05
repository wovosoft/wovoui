import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CardImg",
    props: {
        src: {type: String as PropType<string>, default: null},
        alt: {type: String as PropType<string>, default: null},
        overlay: {type: Boolean as PropType<boolean>, default: false},
        bottom: {type: Boolean as PropType<boolean>, default: false},
        end: {type: Boolean as PropType<boolean>, default: false},
        left: {type: Boolean as PropType<boolean>, default: false},
        right: {type: Boolean as PropType<boolean>, default: false},
        start: {type: Boolean as PropType<boolean>, default: false},
        top: {type: Boolean as PropType<boolean>, default: false},
        height: {type: [Number, String] as PropType<number | string>, default: null},
        width: {type: [Number, String] as PropType<number | string>, default: null},
    },
    setup(props, context) {
        return () => h(
            "img",
            {
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