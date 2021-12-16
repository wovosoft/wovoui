<template>
    <h1>Button toolbar</h1>
    <p>
        Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation
    </p>
    <h3><b>Example 1:</b> with button groups & Keyboard navigation</h3>
    <Card class="mb-3">
        <ButtonToolbar key-nav aria-label="Toolbar with button groups">
            <ButtonGroup class="mx-1">
                <Button>&laquo;</Button>
                <Button>&lsaquo;</Button>
            </ButtonGroup>
            <ButtonGroup class="mx-1">
                <Button>Edit</Button>
                <Button>Undo</Button>
                <Button>Redo</Button>
            </ButtonGroup>
            <ButtonGroup class="mx-1">
                <Button>&rsaquo;</Button>
                <Button>&raquo;</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <hr/>
        <Highlight
            language="xml"
            code='<ButtonToolbar key-nav aria-label="Toolbar with button groups">
    <ButtonGroup class="mx-1">
        <Button>&laquo;</Button>
        <Button>&lsaquo;</Button>
    </ButtonGroup>
    <ButtonGroup class="mx-1">
        <Button>Edit</Button>
        <Button>Undo</Button>
        <Button>Redo</Button>
    </ButtonGroup>
    <ButtonGroup class="mx-1">
        <Button>&rsaquo;</Button>
        <Button>&raquo;</Button>
    </ButtonGroup>
</ButtonToolbar>'
        />
    </Card>

    <h3><b>Example 2:</b> with mixture of small button group and small input group</h3>
    <Card class="mb-3">
        <ButtonToolbar aria-label="Toolbar with button groups and input groups">
            <ButtonGroup size="sm" class="me-1">
                <Button>Save</Button>
                <Button>Cancel</Button>
            </ButtonGroup>
            <InputGroup size="sm" prepend="$" append=".00">
                <Input value="100" class="text-right"/>
            </InputGroup>
        </ButtonToolbar>
        <hr/>
        <Highlight
            language="xml"
            code='<ButtonToolbar aria-label="Toolbar with button groups and input groups">
    <ButtonGroup size="sm" class="me-1">
        <Button>Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
    <InputGroup size="sm" prepend="$" append=".00">
        <Input value="100" class="text-right"/>
    </InputGroup>
</ButtonToolbar>'/>
    </Card>

    <h3><b>Example 3:</b> with button groups and dropdown menu</h3>
    <Card class="mb-3">
        <ButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
            <ButtonGroup class="mx-1">
                <Button>New</Button>
                <Button>Edit</Button>
                <Button>Undo</Button>
            </ButtonGroup>
            <Dropdown class="mx-1" right text="menu">
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </Dropdown>
            <ButtonGroup class="mx-1">
                <Button>Save</Button>
                <Button>Cancel</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <hr/>
        <Highlight
            language="xml"
            code='<ButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
    <ButtonGroup class="mx-1">
        <Button>New</Button>
        <Button>Edit</Button>
        <Button>Undo</Button>
    </ButtonGroup>
    <Dropdown class="mx-1" right text="menu">
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
    <ButtonGroup class="mx-1">
        <Button>Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
</ButtonToolbar>'/>
    </Card>

    <h3>Usage</h3>
    <p class="mb-3">
        Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the example above,
        you'll likely need some utility classes though to space things properly.
    </p>

    <h3>Sizing</h3>
    <p class="mb-3">
        Note, if you want smaller or larger buttons or controls, set the <code>size</code> prop directly on the
        <code>&lt;ButtonGroup&gt;</code>, <code>&lt;InputGroup&gt;</code>, and <code>&lt;Dropdown&gt;</code> components.
    </p>

    <h3>Justify</h3>
    <p class="mb-3">
        Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups
        and dropdowns, by setting the prop <code>justify</code>.
    </p>
    <h3>
        Keyboard navigation
    </h3>
    <p class="mb-3">
        Enable optional keyboard navigation by setting the prop <code>key-nav</code>.
    </p>
</template>

<script setup>
import Card from "../../components/Card.vue";
import ButtonToolbar from "../../components/ButtonToolbar.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import Button from "../../components/Button.vue";
import Highlight from "../../components/Highlight.ts";
import InputGroup from "../../components/InputGroup.vue";
import Input from "../../components/Input.vue";
import Dropdown from "../../components/Dropdown.vue";
import DropdownItem from "../../components/DropdownItem.vue";
</script>
