<template>
    <div>
        <Navbar brand="Navbar Brand" sticky="top">
            <template #default="{ collapsed }">
                <Collapse is-nav :visible="collapsed">
                    <Nav class="me-auto mb-2 mb-lg-0" navs>
                        <NavItem active>Home</NavItem>
                        <NavItem>Link</NavItem>
                        <NavItemDropdown text="Dropdown">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </NavItemDropdown>
                      <NavItemDropdown text="Dropdown Menu Class" menu-class="hi-menu-class">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </NavItemDropdown>
                        <NavItem disabled>Disabled</NavItem>
                    </Nav>
                    <form class="d-flex">
                        <Input class="me-2" u placeholder="Search" aria-label="Search"></Input>
                        <Button variant="success" outline type="submit">Search</Button>
                    </form>
                </Collapse>
            </template>
        </Navbar>
        <div class="d-flex flex-row">
            <div style="width: 250px">
                <TheSidebar/>
            </div>
            <div class="flex-grow-1">
                <Container fluid>
                    <router-view></router-view>
                </Container>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {Button, Collapse, Container, DropdownItem, Input, Nav, Navbar, NavItem, NavItemDropdown} from "@/index";
import TheSidebar from "./TheSidebar.vue";
</script>
