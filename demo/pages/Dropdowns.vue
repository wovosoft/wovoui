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
</template>

<script lang="ts" setup>
import {ref} from "vue";

const placement=ref('left')
import {Dropdown, DropdownItem, DropdownDivider} from "../../src";
import Select from "../../src/components/Select.vue";
</script>
