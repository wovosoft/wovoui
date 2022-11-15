import {defineComponent} from "vue";
import tableCommonProps from "../../shared/tableCommonProps";
import generateTableChild from "../../shared/generateTableChild";

export default defineComponent({
    name: "Th",
    props: tableCommonProps,
    setup(props, {slots}) {
        return () => generateTableChild("th", props, slots);
    }
});