<template>
    <h2>Navbar</h2>
    <Navbar type="dark" variant="dark" toggleable="lg" toggler="navbarSupportedContent">
        <template #brand>
            Navbar Brand
        </template>
        <Collapse id="navbarSupportedContent" is-nav>
            <NavbarNav class="me-auto mb-2 mb-lg-0">
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    Link
                </NavItem>
                <NavItemDropdown text="Dropdown">
                    <DropdownItem>
                        Action
                    </DropdownItem>
                    <DropdownItem>
                        Another action
                    </DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem>
                        Something else here
                    </DropdownItem>
                </NavItemDropdown>
                <NavItem disabled>
                    Disabled
                </NavItem>
            </NavbarNav>
            <form class="d-flex">
                <Input class="me-2" type="search" placeholder="Search" aria-label="Search"/>
                <Button variant="success" outline type="submit">Search</Button>
            </form>
        </Collapse>
    </Navbar>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NavbarBrand from "../components/NavbarBrand.vue";
import NavbarToggler from "../components/NavbarToggler.vue";
import Collapse from "../components/Collapse.vue";
import NavbarNav from "../components/NavbarNav.vue";
import NavItem from "../components/NavItem.vue";
import NavItemDropdown from "../components/NavItemDropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";
import DropdownDivider from "../components/DropdownDivider.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
    name: "DemoNavbar",
    components: {
        Button,
        Input,
        DropdownDivider,
        DropdownItem, NavItemDropdown, NavItem, NavbarNav, Collapse, NavbarToggler, NavbarBrand, Navbar
    }
}
</script>
