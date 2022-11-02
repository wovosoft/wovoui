import {computed, defineComponent, h} from "vue";
import {makeProp, makeTag} from "../composables/useProps";

export default defineComponent({
    name: "Aspect",
    props: {
        tag: makeTag("div"),
        ratio: makeProp<string | number>("16x9", [String, Number])
    },
    setup(props, {slots}) {
        const classes = computed(() => [
            "ratio",
            {
                //when not numeric
                // @ts-ignore
                ["ratio-" + props.ratio]: (isNaN(props.ratio) && props.ratio.toString().indexOf("x") > -1)
            }
        ]);
        const styles = computed(() => {
            // @ts-ignore
            if (typeof props.ratio === "number" || !isNaN(props.ratio)) {
                return {
                    "--bs-aspect-ratio": props.ratio + "%"
                }
            }
            return null;
        });

        return () => h(
            props.tag,
            {class: classes.value, style: styles.value},
            slots.default?.()
        )
    }
});