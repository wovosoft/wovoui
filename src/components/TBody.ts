import {defineComponent} from "vue";
import tableCommonProps from "../shared/tableCommonProps";
import generateTableChild from "../shared/generateTableChild";

export default defineComponent({
    name: "TBody",
    props: tableCommonProps,
    setup(props, {slots}) {
        return () => generateTableChild("tbody", props, slots);
    }
});