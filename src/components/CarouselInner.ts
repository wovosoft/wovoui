import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CarouselInner",
    props: {
        tag: {type: String as PropType<string>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["carousel-inner"]
        }, slots.default ? slots.default() : null)
    }
})