<template>
    <ButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
        <ButtonGroup class="mx-1">
            <Button>New</Button>
            <Button>Edit</Button>
            <Button>Undo</Button>
        </ButtonGroup>
<!--        <Dropdown class="mx-1" right text="menu">-->
<!--            <DropdownItem>Item 1</DropdownItem>-->
<!--            <DropdownItem>Item 2</DropdownItem>-->
<!--            <DropdownItem>Item 3</DropdownItem>-->
<!--        </Dropdown>-->
        <ButtonGroup class="mx-1">
            <Button>Save</Button>
            <Button>Cancel</Button>
        </ButtonGroup>
    </ButtonToolbar>
</template>

<script lang="ts" setup>
import {
    ButtonToolbar, ButtonGroup, Button,
    Dropdown, DropdownItem
} from "../../../src";
</script>
