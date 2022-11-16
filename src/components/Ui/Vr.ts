import {defineComponent, h} from "vue";

/**
 * Generates Vertical Rule
 */
export default defineComponent({
    name: "Vr",
    setup() {
        return () => h("div", {class: ["vr"]})
    }
});