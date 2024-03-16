import {DropdownPropsInterface} from "@/components";

export {default as Link} from "./Link";
export {default as Menu} from "./Menu.vue";
export {default as Nav} from "./Nav";
export {default as Navbar} from "./Navbar.vue";
export {default as NavbarBrand} from "./NavbarBrand";
export {default as NavbarNav} from "./NavbarNav.vue";
export {default as NavbarToggler} from "./NavbarToggler";
export {default as NavItem} from "./NavItem.vue";
export {default as NavItemDropdown} from "./NavItemDropdown.vue";
export {default as NavLink} from "./NavLink.vue";
export {default as PanelMenu} from "./PanelMenu.vue";
export {default as Pagination} from "./Pagination.vue";
export {default as PageItem} from "./PageItem.vue";
export {default as PageLink} from "./PageLink";

export interface NavItemDropdownPropsInterface extends DropdownPropsInterface {
    isNav?: boolean;
}