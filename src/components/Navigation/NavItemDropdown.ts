import Dropdown from "../Dropdown/Dropdown.vue";
import dropdownProps from "../../shared/dropdownProps";
import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "NavItemDropdown",
    components: {Dropdown},
    props: {
        ...dropdownProps,
        isNav: {type: Boolean as PropType<boolean>, default: true},
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"}
    },
    setup(props, {slots}) {
        return () => h(Dropdown, {
            class: "nav-item",
            ...props
        }, () => slots.default?.())
    }
});