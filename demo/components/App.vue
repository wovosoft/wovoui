<template>
  <div>
    <Navbar brand="Navbar Brand">
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
      <div class="border" style="width: 250px">Sidebar</div>
      <div class="border flex-grow-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavItemDropdown,
  DropdownItem,
  Input,
  Button,
} from "../../src";
</script>
