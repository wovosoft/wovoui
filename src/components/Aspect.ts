import {computed, defineComponent, h, PropType} from "vue";
import type {aspectRatios} from "../types/aspectRatios";

export default defineComponent({
    name: "Aspect",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        ratio: {type: [String, Number] as PropType<aspectRatios>, default: "16x9"}
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
            slots.default ? slots.default() : null
        )
    }
});