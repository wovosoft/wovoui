import {defineComponent} from "vue";
import {tableCommonProps, generateTableChild} from "@/shared";

export default defineComponent({
    name: "TBody",
    props: tableCommonProps,
    setup(props, {slots}) {
        return () => generateTableChild("tbody", props, slots);
    }
});