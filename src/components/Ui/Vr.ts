import {defineComponent, h} from "vue";

export default defineComponent({
    name: "Vr",
    setup(props) {
        return () => h("div", {class: ["vr"]})
    }
});