// <template>
//     <div :class="classes" role="status">
//         <span class="visually-hidden">Loading...</span>
//     </div>
// </template>

import {defineComponent, h, PropType} from "vue";
import type {ColorVariants, ButtonSizes} from "../../types";


export default defineComponent({
    props: {
        grow: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<ButtonSizes>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null}
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