import {computed, defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "AlertLink",
    props: {
        href: {type: String as PropType<string>, default: "#"}
    },
    setup(props, {slots}) {
        const classes = computed(() => ["alert-link"]);
        return () => h("a",
            {class: classes.value, href: props.href},
            slots.default?.()
        )
    }
});