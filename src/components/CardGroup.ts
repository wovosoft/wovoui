import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "CardGroup",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        deck: {type: Boolean as PropType<boolean>, default: false},
        columns: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {
                class: [
                    {
                        "card-group": !props.deck && !props.columns,
                        "card-deck": props.deck,
                        "card-columns": props.columns,
                    }
                ]
            },
            [
                slots.default?.()
            ]
        )
    }
});