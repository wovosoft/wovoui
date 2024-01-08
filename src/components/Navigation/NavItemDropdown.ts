import {Dropdown} from "@/components/Dropdown";
import dropdownProps from "@/shared/dropdownProps";
import {defineComponent, h} from "vue";
import {makeBoolean, makeTag} from "@/composables";

export default defineComponent({
    name: "NavItemDropdown",
    props: {
        ...dropdownProps,
        isNav: makeBoolean(true),
        tag: makeTag("li")
    },
    setup(props, {slots}) {
        return () => h(Dropdown, {
            class: ["nav-item", props.menuClass],
            ...props
        }, () => slots.default?.())
    }
});