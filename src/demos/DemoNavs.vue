<template>
    <h2>Nav</h2>
    <Nav>
        <NavItem>First</NavItem>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
    <h2>Center Aligned Nav</h2>
    <Nav align="center">
        <NavItem>First</NavItem>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
    <h2>Right Aligned Nav</h2>
    <Nav align="right">
        <NavItem>First</NavItem>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
    <h2>Vertical Nav</h2>
    <Nav vertical>
        <NavItem>First</NavItem>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
    <h2>Pills && Fill Nav</h2>
    <Nav pills fill>
        <NavItem>First</NavItem>
        <NavItemDropdown text="Dropdown">
            <DropdownItem>One</DropdownItem>
            <DropdownItem>Two</DropdownItem>
            <DropdownItem>Three</DropdownItem>
        </NavItemDropdown>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
    <h2>Nav Tabs</h2>
    <Nav tabs>
        <NavItem>First</NavItem>
        <NavItemDropdown text="Dropdown">
            <DropdownItem>One</DropdownItem>
            <DropdownItem>Two</DropdownItem>
            <DropdownItem>Three</DropdownItem>
        </NavItemDropdown>
        <NavItem active>Active</NavItem>
        <NavItem>Third</NavItem>
        <NavItem disabled>Disabled</NavItem>
        <NavItem href="https://wovosoft.com">With href</NavItem>
        <NavItem aria-current="page" href="https://wovosoft.com">
            With href & aria-current
        </NavItem>
    </Nav>
</template>

<script setup>

import Nav from "../components/Nav.vue";
import NavItem from "../components/NavItem.vue";
import NavItemDropdown from "../components/NavItemDropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";
</script>