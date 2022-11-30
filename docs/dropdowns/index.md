# Dropdown

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

## Single button

Set button value by using prop `text`.

<WDropdown text="Dropdown Button" class="m-md-2">
    <WDropdownItem>First Action</WDropdownItem>
    <WDropdownItem>Second Action</WDropdownItem>
    <WDropdownItem>Third Action</WDropdownItem>
    <WDropdownDivider></WDropdownDivider>
    <WDropdownItem active>Active action</WDropdownItem>
    <WDropdownItem disabled>Disabled action</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Dropdown Button" class="m-md-2">
<DropdownItem>First Action</DropdownItem>
<DropdownItem>Second Action</DropdownItem>
<DropdownItem>Third Action</DropdownItem>
<DropdownDivider></DropdownDivider>
<DropdownItem active>Active action</DropdownItem>
<DropdownItem disabled>Disabled action</DropdownItem>
</Dropdown>
```

## Button content

You can customize the text of the dropdown button by using either the `text` prop (shown in previous examples), or use
the `button-content` slot instead of the text prop. The `button-content`
slot allows you to use basic HTML and icons in the button content.

If both the prop text and slot button-content are present, the slot button-content will take precedence.

<WDropdown text="Button text via Prop" class="me-3">
    <WDropdownItem href="#">An item</WDropdownItem>
    <WDropdownItem href="#">Another item</WDropdownItem>
</WDropdown>
<WDropdown>
    <template #button-content>
        Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <WDropdownItem href="#">An item</WDropdownItem>
    <WDropdownItem href="#">Another item</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Button text via Prop" class="me-3">
<DropdownItem href="#">An item</DropdownItem>
<DropdownItem href="#">Another item</DropdownItem>
</Dropdown>
<Dropdown>
<template #button-content>
    Custom <strong>Content</strong> with <em>HTML</em> via Slot
</template>
<DropdownItem href="#">An item</DropdownItem>
<DropdownItem href="#">Another item</DropdownItem>
</Dropdown>
```

## Split button

Dropdown's `toggle` button can be split from its text. Use prop `split` and set its value to `true`.

<WDropdown text="Dropdown Button" split class="m-md-2">
    <WDropdownItem>First Action</WDropdownItem>
    <WDropdownItem>Second Action</WDropdownItem>
    <WDropdownItem>Third Action</WDropdownItem>
    <WDropdownDivider></WDropdownDivider>
    <WDropdownItem active>Active action</WDropdownItem>
    <WDropdownItem disabled>Disabled action</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Dropdown Button" split class="m-md-2">
<DropdownItem>First Action</DropdownItem>
<DropdownItem>Second Action</DropdownItem>
<DropdownItem>Third Action</DropdownItem>
<DropdownDivider></DropdownDivider>
<DropdownItem active>Active action</DropdownItem>
<DropdownItem disabled>Disabled action</DropdownItem>
</Dropdown>
```

## Sizing

Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons.

Set the `size` prop to either `sm` for small button(s), or `lg` for large button(s).

<WDropdown size="lg" text="Large" class="m-2">
    <WDropdownButton>Action</WDropdownButton>
    <WDropdownButton>Another action</WDropdownButton>
    <WDropdownButton>Something else here</WDropdownButton>
</WDropdown>
<WDropdown size="lg" split text="Large Split" class="m-2">
    <WDropdownButton>Action</WDropdownButton>
    <WDropdownButton>Another action</WDropdownButton>
    <WDropdownButton>Something else here...</WDropdownButton>
</WDropdown>
<WDropdown size="sm" text="Small" class="m-2">
    <WDropdownButton>Action</WDropdownButton>
    <WDropdownButton>Another action</WDropdownButton>
    <WDropdownButton>Something else here...</WDropdownButton>
</WDropdown>
<WDropdown size="sm" split text="Small Split" class="m-2">
    <WDropdownButton>Action</WDropdownButton>
    <WDropdownButton>Another action</WDropdownButton>
    <WDropdownButton>Something else here...</WDropdownButton>
</WDropdown>

```vue

<Dropdown size="lg" text="Large" class="m-2">
<DropdownButton>Action</DropdownButton>
<DropdownButton>Another action</DropdownButton>
<DropdownButton>Something else here</DropdownButton>
</Dropdown>
<Dropdown size="lg" split text="Large Split" class="m-2">
<DropdownButton>Action</DropdownButton>
<DropdownButton>Another action</DropdownButton>
<DropdownButton>Something else here...</DropdownButton>
</Dropdown>
<Dropdown size="sm" text="Small" class="m-2">
<DropdownButton>Action</DropdownButton>
<DropdownButton>Another action</DropdownButton>
<DropdownButton>Something else here...</DropdownButton>
</Dropdown>
<Dropdown size="sm" split text="Small Split" class="m-2">
<DropdownButton>Action</DropdownButton>
<DropdownButton>Another action</DropdownButton>
<DropdownButton>Something else here...</DropdownButton>
</Dropdown>
```

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by adding prop `menu-dark` and set its value to `true`
onto an existing `<Dropdown>`. No changes are required to the dropdown items.

<WDropdown text="Dropdown Button" class="m-md-2" menu-dark>
    <WDropdownItem>First Action</WDropdownItem>
    <WDropdownItem>Second Action</WDropdownItem>
    <WDropdownItem>Third Action</WDropdownItem>
    <WDropdownDivider></WDropdownDivider>
    <WDropdownItem active>Active action</WDropdownItem>
    <WDropdownItem disabled>Disabled action</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Dropdown Button" class="m-md-2" menu-dark>
<DropdownItem>First Action</DropdownItem>
<DropdownItem>Second Action</DropdownItem>
<DropdownItem>Third Action</DropdownItem>
<DropdownDivider></DropdownDivider>
<DropdownItem active>Active action</DropdownItem>
<DropdownItem disabled>Disabled action</DropdownItem>
</Dropdown>
```

## Positioning / Direction

Dropdown supports various positioning such as left and right aligned, dropdown and dropup, and supports auto-flipping (
dropdown to dropup, and vice-versa) when the menu would overflow off of the visible screen area.

## Menu alignment

The dropdown menu can either be left aligned (default) or right aligned with respect to the button above it. To have the
dropdown aligned on the right, set the `dir="right"` prop.

<WDropdown text="Left align" variant="primary" class="m-2" dir="left">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>
<WDropdown dir="right" text="Right align" variant="primary" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Left align" variant="primary" class="m-2" dir="left">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here</DropdownItem>
</Dropdown>
<Dropdown dir="right" text="Right align" variant="primary" class="m-2">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here</DropdownItem>
</Dropdown>
```

### Dropup

Turn your dropdown menu into a drop-up menu by setting the `dir="top"` prop.

<WDropdown dropup text="Drop-Up" dir="top" variant="primary" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>

```vue

<Dropdown dropup text="Drop-Up" dir="top" variant="primary" class="m-2">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here</DropdownItem>
</Dropdown>
```

## Dropdown color variants

The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by setting the prop
variant to `success`, `primary`,`info`, `danger`, `link`, `outline-dark`, etc. (or custom variants, if defined). The
default variant is `secondary`.

<WDropdown text="Primary" variant="primary" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>
<WDropdown text="Success" variant="success" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>
<WDropdown text="Outline Danger" variant="outline-danger" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>

You can also apply arbitrary classes to the toggle button via the
`toggle-class` prop. This prop accepts either a string or array of strings.


<WDropdown split split-variant="outline-primary" variant="primary" text="Split Variant Dropdown" class="m-2">
<WDropdownItem href="#">Action</WDropdownItem>
<WDropdownItem href="#">Another action</WDropdownItem>
<WDropdownItem href="#">Something else here...</WDropdownItem>
</WDropdown>

```vue

<Dropdown
    split
    split-variant="outline-primary"
    variant="primary"
    text="Split Variant Dropdown"
    class="m-2">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here...</DropdownItem>
</Dropdown>
```

## Block level dropdowns

By default dropdowns act like buttons and are displayed inline. To create block level dropdowns (that span to the full
width of a parent) set the `block` prop. Both, regular and split button dropdowns are supported.

<WDropdown text="Block Level Dropdown" block variant="primary" class="m-2">
    <WDropdownItem href="#">Action</WDropdownItem>
    <WDropdownItem href="#">Another action</WDropdownItem>
    <WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>

```vue

<Dropdown text="Block Level Dropdown" block variant="primary" class="m-2">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here</DropdownItem>
</Dropdown>
```

If you want the dropdown menu to span to the full width of the parent container too, add the `w-100`
utility class to the `menu-class` prop.

<WDropdown text="Block Level Dropdown Menu" block  variant="primary" class="m-2" menu-class="w-100">
<WDropdownItem href="#">Action</WDropdownItem>
<WDropdownItem href="#">Another action</WDropdownItem>
<WDropdownItem href="#">Something else here</WDropdownItem>
</WDropdown>

```vue

<Dropdown
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100">
<DropdownItem href="#">Action</DropdownItem>
<DropdownItem href="#">Another action</DropdownItem>
<DropdownItem href="#">Something else here</DropdownItem>
</Dropdown>
```