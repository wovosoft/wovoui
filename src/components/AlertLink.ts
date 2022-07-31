import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "AlertLink",
    props: {
        href: {type: String as PropType<string>, default: "#"}
    },
    setup(props, {slots}) {
        return () => h("a",
            {class: ["alert-link"], href: props.href},
            slots.default?.()
        )
    }
});