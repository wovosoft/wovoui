import {defineComponent, h, Teleport} from "vue";
import {PropType} from "vue";
import {RendererElement} from "@vue/runtime-core";

/**
 * This component is used to eliminate
 */
export default defineComponent({
    props: {
        to: {
            type: [String, Object] as PropType<string | RendererElement | null | undefined>,
            default: null
        },
        disabled: {
            type: Boolean as PropType<boolean | null>,
        }
    },
    setup(props, {slots}) {
        return () => {
            if (props.to) {
                return h(Teleport, {
                    to: props.to,
                    disabled: props.disabled
                }, slots?.default())
            }
            return slots?.default();
        }
    }
});
