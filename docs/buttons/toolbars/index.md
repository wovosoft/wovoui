# Button Toolbar

Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation

**Example 1:** with button groups & Keyboard navigation

<div class="bootstrap">
<WButtonToolbar key-nav aria-label="Toolbar with button groups">
    <WButtonGroup class="mx-1">
        <WButton>&laquo;</WButton>
        <WButton>&lsaquo;</WButton>
    </WButtonGroup>
    <WButtonGroup class="mx-1">
        <WButton>Edit</WButton>
        <WButton>Undo</WButton>
        <WButton>Redo</WButton>
    </WButtonGroup>
    <WButtonGroup class="mx-1">
        <WButton>&rsaquo;</WButton>
        <WButton>&raquo;</WButton>
    </WButtonGroup>
</WButtonToolbar>
</div>

```vue
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
```

**Example 2:** with mixture of small button group and small input group

<div class="bootstrap">
<WButtonToolbar aria-label="Toolbar with button groups and input groups">
    <WButtonGroup size="sm" class="me-1">
        <WButton>Save</WButton>
        <WButton>Cancel</WButton>
    </WButtonGroup>
    <WInputGroup size="sm" prepend="$" append=".00">
        <WInput value="100" class="text-right"/>
    </WInputGroup>
</WButtonToolbar>
</div>

```vue
<ButtonToolbar aria-label="Toolbar with button groups and input groups">
    <ButtonGroup size="sm" class="me-1">
        <Button>Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
    <InputGroup size="sm" prepend="$" append=".00">
        <Input value="100" class="text-right"/>
    </InputGroup>
</ButtonToolbar>
```

**Example 3:** with button groups and dropdown menu

<div class="bootstrap">
<WButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
    <WButtonGroup class="mx-1">
        <WButton>New</WButton>
        <WButton>Edit</WButton>
        <WButton>Undo</WButton>
    </WButtonGroup>
    <WDropdown class="mx-1" right text="menu">
        <WDropdownItem>Item 1</WDropdownItem>
        <WDropdownItem>Item 2</WDropdownItem>
        <WDropdownItem>Item 3</WDropdownItem>
    </WDropdown>
    <WButtonGroup class="mx-1">
        <WButton>Save</WButton>
        <WButton>Cancel</WButton>
    </WButtonGroup>
</WButtonToolbar>
</div>

```vue
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
```

##  Usage

Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the example above,
you'll likely need some utility classes though to space things properly.

##  Sizing

Note, if you want smaller or larger buttons or controls, set the `size` prop directly on the
`<ButtonGroup>`, `<InputGroup>`, and `<Dropdown>` components.

##  Justify

Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups
and dropdowns, by setting the prop `justify`.

##  Keyboard navigation

Enable optional keyboard navigation by setting the prop `key-nav`.