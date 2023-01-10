import {defineComponent, h, PropType} from "vue";
import type {Icons} from "@wovosoft/wovoui-icons/dist/types";

/**
 * This component doesn't generate SVGs.
 * When this component is used, the bootstrap icnos css should be included.
 * More details at
 * @link https://icons.getbootstrap.com/#install
 */
export default defineComponent({
    name: "Icon",
    props: {
        /**
         * Icon Tag
         * Suggested : i, span
         * @default i
         */
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i'},

        /**
         * Name of the bootstrap icon
         * @link https://icons.getbootstrap.com/
         */
        icon: {type: String as PropType<Icons>, default: null}
    },
    setup(props) {
        return () => h(props.tag, {
            class: [
                "bi",
                {
                    ["bi-" + props.icon]: props.icon
                }
            ]
        });
    }
})