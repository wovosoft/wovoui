import {defineComponent, h} from "vue";
import {makeString} from "../composables/useProps";

export default defineComponent({
    name: "AlertLink",
    props: {
        href: makeString('#')
    },
    setup(props, {slots}) {
        return () => h("a",
            {class: ["alert-link"], href: props.href},
            slots.default?.()
        )
    }
});