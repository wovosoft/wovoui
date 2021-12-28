<template>
    <h1>Input Groups</h1>
    <p>
        Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.
    </p>
    <div>
        <!-- Using props -->
        <InputGroup size="lg" prepend="$" append=".00">
            <Input></Input>
        </InputGroup>

        <!-- Using slots -->
        <InputGroup class="mt-3">
            <template #append>
                <InputGroupText><strong class="text-danger">!</strong></InputGroupText>
            </template>
            <Input></Input>
        </InputGroup>

        <!-- Using components -->
        <InputGroup prepend="Username" class="mt-3">
            <Input></Input>
            <template #append>
                <Button variant="success" outline>Button</Button>
                <Button variant="info">Button</Button>
            </template>
        </InputGroup>
    </div>
    <Highlight code='<div>
    <!-- Using props -->
    <InputGroup size="lg" prepend="$" append=".00">
        <Input></Input>
    </InputGroup>

    <!-- Using slots -->
    <InputGroup class="mt-3">
        <template #append>
            <InputGroupText><strong class="text-danger">!</strong></InputGroupText>
        </template>
        <Input></Input>
    </InputGroup>

    <!-- Using components -->
    <InputGroup prepend="Username" class="mt-3">
        <Input></Input>
        <template #append>
            <Button variant="success" outline>Button</Button>
            <Button variant="info">Button</Button>
        </template>
    </InputGroup>
</div>'/>

    <h2>Usage</h2>
    <p>
        You can attach addons using either props, named slots and/or sub-components.
    </p>

    <h2>Using <code>prepend</code> and <code>append</code> props</h2>
    <p>
        Values will be internally wrapped by a <code>&lt;InputGroupText&gt;</code> to display correctly.
    </p>
    <div>
        <InputGroup prepend="$" append=".00">
            <Input></Input>
        </InputGroup>
        <p>
            When type is range, manually add class <code>form-control</code> to the Input component,
            otherwise it won't be visible properly. It's kind of a bug, very soon it will be fixed.
        </p>
        <InputGroup prepend="0" append="100" class="mt-3">
            <Input type="range" class="form-control" min="0" max="100"></Input>
        </InputGroup>
    </div>
    <Highlight code='<div>
    <InputGroup prepend="$" append=".00">
        <Input></Input>
    </InputGroup>

    <InputGroup prepend="0" append="100" class="mt-3">
        <Input type="range" class="form-control" min="0" max="100"></Input>
    </InputGroup>
</div>'/>

    <h2>Using named slots</h2>
    <p>
        if you want better control over addons, you can use <code>prepend</code> and <code>append</code> slots instead.
    </p>
    <div>
        <InputGroup>
            <template #prepend>
                <InputGroupText >Username</InputGroupText>
            </template>
            <Input></Input>

            <template #append>
                <Dropdown text="Dropdown" variant="success">
                    <DropdownItem>Action A</DropdownItem>
                    <DropdownItem>Action B</DropdownItem>
                </Dropdown>
            </template>
        </InputGroup>
    </div>
</template>

<script>
import InputGroup from "../../components/InputGroup.vue";
import Input from "../../components/Input.vue";
import InputGroupText from "../../components/InputGroupText.vue";
import Button from "../../components/Button.vue";
import Highlight from "../../components/Highlight.ts";
import Dropdown from "../../components/Dropdown.vue";
import DropdownItem from "../../components/DropdownItem.vue";

export default {
    name: "FormInputGroup",
    components: {DropdownItem, Dropdown, Highlight, Button, InputGroupText, Input, InputGroup}
}
</script>