# Button Groups

Group a series of buttons together on a single line or stack them in a vertical column.

## Basic example

<div class="bootstrap">
<WButtonGroup aria-label="Basic example">
    <WButton variant="primary">Left</WButton>
    <WButton variant="primary">Middle</WButton>
    <WButton variant="primary">Right</WButton>
</WButtonGroup>
</div>

```vue

<ButtonGroup aria-label="Basic example">
<Button variant="primary">Left</Button>
<Button variant="primary">Middle</Button>
<Button variant="primary">Right</Button>
</ButtonGroup>
```

## Mixed styles

<div class="bootstrap">
<WButtonGroup aria-label="Basic mixed styles example">
    <WButton variant="warning">Left</WButton>
    <WButton variant="danger">Middle</WButton>
    <WButton variant="primary">Right</WButton>
</WButtonGroup>
</div>

```vue

<ButtonGroup aria-label="Basic mixed styles example">
<Button variant="warning">Left</Button>
<Button variant="danger">Middle</Button>
<Button variant="primary">Right</Button>
</ButtonGroup>
```

### Outlined styles

<div class="bootstrap">
<WButtonGroup aria-label="Basic outlined example">
    <WButton variant="primary" outline>Left</WButton>
    <WButton variant="primary" outline>Middle</WButton>
    <WButton variant="primary" outline>Right</WButton>
</WButtonGroup>
</div>

```vue

<ButtonGroup aria-label="Basic outlined example">
<Button variant="primary" outline>Left</Button>
<Button variant="primary" outline>Middle</Button>
<Button variant="primary" outline>Right</Button>
</ButtonGroup>
```

You can also make similar result by following way without using `outline` prop.

## Basic checkbox toggle button group

<div class="bootstrap">
<WButtonGroup aria-label="Basic checkbox toggle button group">
    <WCheckbox button v-for="x in 5">Checkbox {{ x }}</WCheckbox> 
</WButtonGroup>
</div>

## Button toolbar

Combine sets of button groups into button toolbars for more complex components.

<div class="bootstrap">
<WButtonToolbar aria-label="Toolbar with button groups">
    <WButtonGroup class="me-2" aria-label="First group">
        <WButton variant="primary">1</WButton>
        <WButton variant="primary">2</WButton>
        <WButton variant="primary">3</WButton>
        <WButton variant="primary">4</WButton>
    </WButtonGroup>
    <WButtonGroup class="me-2" aria-label="Second group">
        <WButton variant="secondary">5</WButton>
        <WButton variant="secondary">6</WButton>
        <WButton variant="secondary">7</WButton>
    </WButtonGroup>
    <WButtonGroup aria-label="Third group">
        <WButton variant="info">8</WButton>
    </WButtonGroup>
</WButtonToolbar>
</div>

```vue

<ButtonToolbar aria-label="Toolbar with button groups">
<ButtonGroup class="me-2" aria-label="First group">
    <Button variant="primary">1</Button>
    <Button variant="primary">2</Button>
    <Button variant="primary">3</Button>
    <Button variant="primary">4</Button>
</ButtonGroup>
<ButtonGroup class="me-2" aria-label="Second group">
    <Button variant="secondary">5</Button>
    <Button variant="secondary">6</Button>
    <Button variant="secondary">7</Button>
</ButtonGroup>
<ButtonGroup aria-label="Third group">
    <Button variant="info">8</Button>
</ButtonGroup>
</ButtonToolbar>
```

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some
utilities though to space things properly.
<div class="bootstrap">
<WButtonToolbar class="mb-3" aria-label="Toolbar with button groups">
    <WButtonGroup class="me-2" aria-label="First group">
        <WButton variant="secondary" outline>1</WButton>
        <WButton variant="secondary" outline>2</WButton>
        <WButton variant="secondary" outline>3</WButton>
        <WButton variant="secondary" outline>4</WButton>
    </WButtonGroup>
    <WInputGroup>
        <WInputGroupText>@</WInputGroupText>
        <WInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
        />
    </WInputGroup>
</WButtonToolbar>
</div>

```vue

<ButtonToolbar class="mb-3" aria-label="Toolbar with button groups">
<ButtonGroup class="me-2" aria-label="First group">
    <Button variant="secondary" outline>1</Button>
    <Button variant="secondary" outline>2</Button>
    <Button variant="secondary" outline>3</Button>
    <Button variant="secondary" outline>4</Button>
</ButtonGroup>
<InputGroup>
    <InputGroupText>@</InputGroupText>
    <Input
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
    />
</InputGroup>
</ButtonToolbar>
```

## Justified Toolbar

<div class="bootstrap">
<WButtonToolbar justified aria-label="Toolbar with button groups">
    <WButtonGroup aria-label="First group">
        <WButton variant="secondary" outline>1</WButton>
        <WButton variant="secondary" outline>2</WButton>
        <WButton variant="secondary" outline>3</WButton>
        <WButton variant="secondary" outline>4</WButton>
    </WButtonGroup>
    <WInputGroup class="input-group">
        <WInputGroupText>@</WInputGroupText>
        <WInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
        />
    </WInputGroup>
</WButtonToolbar>
</div>

```vue

<ButtonToolbar justified aria-label="Toolbar with button groups">
<ButtonGroup aria-label="First group">
    <Button variant="secondary" outline>1</Button>
    <Button variant="secondary" outline>2</Button>
    <Button variant="secondary" outline>3</Button>
    <Button variant="secondary" outline>4</Button>
</ButtonGroup>
<InputGroup class="input-group">
    <InputGroupText>@</InputGroupText>
    <Input
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
    />
</InputGroup>
</ButtonToolbar>
```

## Sizing

Instead of applying button sizing to every button in a group, just add size to each button group, including each one
when nesting multiple groups.

<div class="bootstrap">
<div class="mb-2" v-for="size in ['lg',null,'sm']">
    <WButtonGroup :size="size" aria-label="Button Group">
        <WButton outline>Left</WButton>
        <WButton outline>Middle</WButton>
        <WButton outline>Right</WButton>
    </WButtonGroup>
</div>
</div>

```vue

<div class="mb-2" v-for="size in ['lg',null,'sm']">
<ButtonGroup :size="size" aria-label="Button Group">
    <Button outline>Left</Button>
    <Button outline>Middle</Button>
    <Button outline>Right</Button>
</ButtonGroup>
</div>
```

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical`
prop. Split button dropdowns are not supported here.

<div class="bootstrap">
<WButtonGroup vertical>
    <WButton>Top</WButton>
    <WButton>Middle</WButton>
    <WButton>Bottom</WButton>
</WButtonGroup>
</div>

```vue

<ButtonGroup vertical>
<Button>Top</Button>
<Button>Middle</Button>
<Button>Bottom</Button>
</ButtonGroup>
```

## Dropdown menu support

Add `<Dropdown>` menus directly inside your `<ButtonGroup>`. Note that split dropdown menus are not supported when
prop `vertical` is set.


<WButtonGroup>
    <WButton>Button</WButton>
    <WDropdown right text="Menu">
        <WDropdownItem>Item 1</WDropdownItem>
        <WDropdownItem>Item 2</WDropdownItem>
        <WDropdownDivider></WDropdownDivider>
        <WDropdownItem>Item 3</WDropdownItem>
    </WDropdown>
    <WDropdown right split text="Split Menu">
        <WDropdownItem>Item 1</WDropdownItem>
        <WDropdownItem>Item 2</WDropdownItem>
        <WDropdownDivider></WDropdownDivider>
        <WDropdownItem>Item 3</WDropdownItem>
    </WDropdown>
</WButtonGroup>

```vue

<ButtonGroup>
<Button>Button</Button>
<Dropdown right text="Menu">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownDivider></DropdownDivider>
    <DropdownItem>Item 3</DropdownItem>
</Dropdown>
<Dropdown right split text="Split Menu">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownDivider></DropdownDivider>
    <DropdownItem>Item 3</DropdownItem>
</Dropdown>
</ButtonGroup>
```

## Properties

<WDataTable :items="componentReference" :fields="['property','type','default','description']"/>

<script setup>
const componentReference=[
                {
                    property: 'aria-role',
                    type: 'String',
                    default: "'group'",
                    description: 'Sets the ARIA attribute `role` to a specific value',
                },
                {
                    property: 'size',
                    type: 'String',
                    default: '',
                    description: 'Set the size of the component\'s appearance. \'sm\', \'md\' (default), or \'lg\'',
                },
                {
                    property: 'tag',
                    type: 'String',
                    default: '\'div\'',
                    description: 'Specify the HTML tag to render instead of the default tag',
                },
                {
                    property: 'vertical',
                    type: 'Boolean',
                    default: 'false',
                    description: 'When set, rendered the button group in vertical mode',
                },
            ]
</script>