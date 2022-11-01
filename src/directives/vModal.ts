//custom events: assigned to body

import {EVENT_TRIGGER_SHOW_NAME} from "../composables/useModal";

let showHandler = null;

export default {
    mounted(el, binding, vNode) {
        showHandler = () => {
            if (typeof binding.value === "string") {
                document.dispatchEvent(new CustomEvent(EVENT_TRIGGER_SHOW_NAME, {
                    bubbles: true,
                    detail: binding.value
                }));
            }
        };
        el.addEventListener("click", showHandler, false);
    },
    beforeUnmount(el) {
        el.removeEventListener("click", showHandler);
    }
}