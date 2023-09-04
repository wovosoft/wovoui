//custom events: assigned to body

import {EVENT_TRIGGER_SHOW_NAME} from "@/composables";

let showHandler: () => void;

export default {
    mounted(el: HTMLElement, binding: any) {
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
    beforeUnmount(el: HTMLElement) {
        el.removeEventListener("click", showHandler);
    }
}