import {defineComponent, h} from "vue";
import {makeBoolean, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "CardGroup",
    props: {
        tag: makeTag("div"),
        deck: makeBoolean(false),
        columns: makeBoolean(false)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: [
                {
                    "card-group": !props.deck && !props.columns,
                    "card-deck": props.deck,
                    "card-columns": props.columns,
                }
            ]
        }, slots?.default?.());
    }
});