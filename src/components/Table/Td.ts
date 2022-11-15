import {defineComponent} from "vue";
import tableCommonProps from "../../shared/tableCommonProps";
import generateTableChild from "../../shared/generateTableChild";

export default defineComponent({
    name: "Td",
    props: tableCommonProps,
    setup(props, {slots}) {
        return () => generateTableChild("td", props, slots);
    }
});