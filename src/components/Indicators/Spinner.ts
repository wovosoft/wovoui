// <template>
//     <div :class="classes" role="status">
//         <span class="visually-hidden">Loading...</span>
//     </div>
// </template>

import {defineComponent, h} from "vue";
import type {ButtonSizes} from "../../types";
import {makeBoolean, makeSize, makeVariant} from "../../composables/useProps";


export default defineComponent({
    props: {
        grow: makeBoolean(false),
        size: makeSize<ButtonSizes>(null),
        variant: makeVariant(null)
    },
    setup(props) {
        return () => h("div", {
            role: "status",
            class: [
                "spinner-" + (props.grow ? 'grow' : 'border'),
                {
                    ["spinner-" + (props.grow ? 'grow' : 'border') + "-" + props.size]: props.size,
                    ["text-" + props.variant]: props.variant
                }
            ]
        }, h("span", {class: "visually-hidden"}, "Loading..."))
    }
})