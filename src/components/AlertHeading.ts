import {computed, defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "AlertHeading",
    props: {
        tag: {type: String as PropType<string>, default: "h4"}
    },
    setup(props, {slots}) {
        const classes = computed(() => [
            "alert-heading"
        ])
        return () => h(
            props.tag,
            {class: classes.value},
            [slots.default()]
        )
    }
})