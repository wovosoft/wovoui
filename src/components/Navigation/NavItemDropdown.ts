import {Dropdown} from "../../";
import dropdownProps from "../../shared/dropdownProps";
import {defineComponent, h} from "vue";
import {makeBoolean, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "NavItemDropdown",
    props: {
        ...dropdownProps,
        isNav: makeBoolean(true),
        tag: makeTag("li")
    },
    setup(props, {slots}) {
        return () => h(Dropdown, {
            class: ["nav-item"],
            ...props
        }, () => slots.default?.())
    }
});