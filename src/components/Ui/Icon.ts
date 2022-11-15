import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "Icon",
    props: {
        tag: {type: String as PropType<'span' | 'i' | string>, default: 'i'},
        icon: {type: String as PropType<string>, default: null}
    },
    setup(props) {
        return () => h(props.tag, {
            class: [
                "bi",
                {
                    ["bi-" + props.icon]: props.icon
                }
            ]
        });
    }
})