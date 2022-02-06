import {makeString} from "../shared/properties.js";
import {computed, h, reactive, defineComponent} from "vue";
import ColorVariants from "../props/ColorVariants";
import BoolPill from "../props/BoolPill";

export default defineComponent({
    props: {
        tag: makeString('span'),
        variant: ColorVariants("secondary"),
        pill: BoolPill(false),
        href: makeString(null)
    },
    setup(props, context) {
        const attributes = reactive({
            href: null,
            target: null
        });
        if (props.href) {
            attributes.href = props.href;
            attributes.target = "_self";
        }
        return {
            attributes,
            classes: computed(() => [
                "badge",
                {
                    ["bg-" + props.variant]: !!props.variant,
                    "rounded-pill": props.pill,
                    "text-decoration-none": props.href
                }
            ])
        }
    },
    render() {
        return h(
            this.href ? 'a' : this.tag,
            {class: this.classes, ...this.attributes},
            this.$slots.default
        );
    }
});