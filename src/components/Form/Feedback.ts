// <template>
//     <component :is="tag" :class="{[type + '-feedback']: type}">
//         <slot>
//             {{ message }}
//         </slot>
//     </component>
// </template>

import {defineComponent, h, PropType} from "vue";
import type {FeedbackTypes} from "../../types";

export default defineComponent({
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
        type: {type: String as PropType<FeedbackTypes>, default: 'valid'},
        message: {type: String as PropType<string>, default: null},
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {[props.type + '-feedback']: props.type}
        }, slots?.default?.() || props.message)
    }
})