<template>
    <h3>Dropdowns</h3>
    <Dropdown text="Dropdown Button" class="m-md-2">
        <DropdownItem>First Action</DropdownItem>
        <DropdownItem>Second Action</DropdownItem>
        <DropdownItem>Third Action</DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem active>Active action</DropdownItem>
        <DropdownItem disabled>Disabled action</DropdownItem>
    </Dropdown>
</template>

<script lang="ts" setup>

import {Dropdown, DropdownItem, DropdownDivider} from "../../src";
</script>
