<template>
    <h3>Dropdowns</h3>
    <Select :options="['right','left','top','bottom']" v-model="placement"></Select>
    <Dropdown text="Dropdown Button" class="m-md-2" :dir="placement">
        <DropdownItem>First Action</DropdownItem>
        <DropdownItem>Second Action</DropdownItem>
        <DropdownItem>Third Action</DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem active>Active action</DropdownItem>
        <DropdownItem disabled>Disabled action</DropdownItem>
    </Dropdown>

    <h4>Button Groups</h4>
    <ButtonGroup>
        <Button>Example Button</Button>
        <Dropdown text="Dropdown Button" dir="bottom">
            <DropdownItem>First Action</DropdownItem>
            <DropdownItem>Second Action</DropdownItem>
            <DropdownItem>Third Action</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem active>Active action</DropdownItem>
            <DropdownItem disabled>Disabled action</DropdownItem>
        </Dropdown>
    </ButtonGroup>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {Button, Dropdown, DropdownDivider, DropdownItem} from "@/";
import Select from "@/components/Form/Select.vue";
import ButtonGroup from "@/components/Button/ButtonGroup.vue";

const placement = ref('left')
</script>
