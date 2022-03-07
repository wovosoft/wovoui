import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CarouselCaption",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["carousel-caption"]
        }, slots.default?.())
    }
})