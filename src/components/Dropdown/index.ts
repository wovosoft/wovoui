export {default as Dropdown} from "./Dropdown.vue";
export {default as DropdownButton} from "./DropdownButton.vue";
export {default as DropdownDivider} from "./DropdownDivider.vue";
export {default as DropdownGroup} from "./DropdownGroup.vue";
export {default as DropdownHeader} from "./DropdownHeader.vue";
export {default as DropdownItem} from "./DropdownItem.vue";
export {default as DropdownMenu} from "./DropdownMenu.vue";

export interface DropdownMenuProps {
    tag?: keyof HTMLElementTagNameMap,
    dark?: boolean
    show?: boolean
    block?: boolean
}