# Buttons
Use `Bootstrap's` custom `Button` component for actions in forms, dialogs, and more.
Includes support for a handful of contextual variations, sizes, states, and more.

## Overview

`<Button>` component generates either a native`button` element, `a` element,
or `router-link` component with the styling of a button.

<div class="child-m-2 bootstrap">
    <w-button>Button</w-button>
    <w-button variant="danger">Button</w-button>
    <w-button variant="success">Button</w-button>
    <w-button variant="outline-primary">Button</w-button>
</div>

```vue
<Button>Button</Button>
<Button variant="danger">Button</Button>
<Button variant="success">Button</Button>
<Button variant="outline-primary">Button</Button>
```

##  Element type

The `Button` component generally renders a `button` element. However, you can also render an `a`
element by providing an `href` prop value. You may also generate vue-router
`router-link` when providing a value for the to prop (vue-router is required).

## Type

You can specify the button's type by setting the prop type to `'button'`,
`'submit'` or `'reset'`.
The default type is <code>'button'</code>.

Note the type prop has no effect when either href or to props are set.


## Sizing

Fancy larger or smaller buttons? Specify `lg` or `sm` via the `size` prop.

<div class="bootstrap">
<WRow>
    <WCol lg="4" class="pb-2">
        <WButton size="sm">Small Button</WButton>
    </WCol>
    <WCol lg="4" class="pb-2">
        <WButton>Default Button</WButton>
    </WCol>
    <WCol lg="4" class="pb-2">
        <WButton size="lg">Large Button</WButton>
    </WCol>
</WRow>
</div>

```vue
<Row>
    <Col lg="4" class="pb-2"><Button size="sm">Small Button</Button></Col>
    <Col lg="4" class="pb-2"><Button>Default Button</Button></Col>
    <Col lg="4" class="pb-2"><Button size="lg">Large Button</Button></Col>
</Row>
```

## Contextual Variants

Use the variant prop to generate the various Bootstrap contextual button variants.
By default, <code>&lt;Button&gt;</code> will render with the secondary variant.
The variant prop adds the Bootstrap v5 class .btn-<code>variant</code> on the rendered button.

## Solid color variants

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` , `dark`

<div class="child-m-2 bootstrap">
    <WButton variant="primary">Primary</WButton>
    <WButton variant="secondary">Secondary</WButton>
    <WButton variant="success">Success</WButton>
    <WButton variant="danger">Danger</WButton>
    <WButton variant="warning">Warning</WButton>
    <WButton variant="info">Info</WButton>
    <WButton variant="light">Light</WButton>
    <WButton variant="dark">Dark</WButton>
</div>

```vue
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
```

##  Outline color variants

Use Property `outline` to apply outlined color variants.

<div class="child-m-2 bootstrap">
    <WButton outline variant="primary">Primary</WButton>
    <WButton outline variant="secondary">Secondary</WButton>
    <WButton outline variant="success">Success</WButton>
    <WButton outline variant="danger">Danger</WButton>
    <WButton outline variant="warning">Warning</WButton>
    <WButton outline variant="info">Info</WButton>
    <WButton outline variant="light">Light</WButton>
    <WButton outline variant="dark">Dark</WButton>
</div>

```vue
<Button outline variant="primary">Primary</Button>
<Button outline variant="secondary">Secondary</Button>
<Button outline variant="success">Success</Button>
<Button outline variant="danger">Danger</Button>
<Button outline variant="warning">Warning</Button>
<Button outline variant="info">Info</Button>
<Button outline variant="light">Light</Button>
<Button outline variant="dark">Dark</Button>
```

##  Block level buttons

Block Level button is a full width button of its container. Use prop `block` to make a block/full width button.

<WButton block variant="primary">Block Level Button</WButton>

```vue
<Button block variant="primary">Block Level Button</Button>
```

##  Pill style

Prefer buttons with a more rounded-pill style? Just set the prop pill to `true`.

<div class="child-m-2 bootstrap">
    <WButton pill>Button</WButton>
    <WButton pill variant="primary">Button</WButton>
    <WButton pill variant="outline-secondary">Button</WButton>
    <WButton pill variant="success">Button</WButton>
    <WButton pill variant="outline-danger">Button</WButton>
    <WButton pill variant="info">Button</WButton>
</div>

```vue
<Button pill>Button</Button>
<Button pill variant="primary">Button</Button>
<Button pill variant="outline-secondary">Button</Button>
<Button pill variant="success">Button</Button>
<Button pill variant="outline-danger">Button</Button>
<Button pill variant="info">Button</Button>
```

##  Squared style

Prefer buttons with a more square corner style? Just set the prop squared to `true`.

<div class="child-m-2 bootstrap">
    <WButton squared>Button</WButton>
    <WButton squared variant="primary">Button</WButton>
    <WButton squared variant="outline-secondary">Button</WButton>
    <WButton squared variant="success">Button</WButton>
    <WButton squared variant="outline-danger">Button</WButton>
    <WButton squared variant="info">Button</WButton>
</div>

```vue
<Button squared>Button</Button>
<Button squared variant="primary">Button</Button>
<Button squared variant="outline-secondary">Button</Button>
<Button squared variant="success">Button</Button>
<Button squared variant="outline-danger">Button</Button>
<Button squared variant="info">Button</Button>
```

##  Disabled state

Set the `disabled` prop to `disabled` button default functionality. disabled also works with
buttons rendered as `a` elements and `router-link (i.e. with the href or to prop set).

The pressed prop can be set to one of three values:

- <code>true</code>: Sets the .active class and adds the attribute <code>aria-pressed="true"</code>.
- <code>false</code>: Clears the .active class and adds the attribute <code>aria-pressed="false"</code>.
- <code>null</code>: (default) Neither the class .active nor the attribute <code>aria-pressed</code> will be
  set.

##  Buttons with Badges

Use prop `badge` to set button badges

<WButton :badge="14" class="me-2" badge-variant="primary">Inbox</WButton>
<WButton :badge="20" badge-variant="primary">Sent</WButton>

```html
<Button :badge="14" class="me-2" badge-variant="primary">Inbox</Button>
<Button :badge="20" badge-variant="primary">Sent</Button>
```

##  Component reference

<WTable bordered hover striped>
    <WTHead class="bg-dark text-light">
    <WTr>
        <WTh>Property</WTh>
        <WTh>Type</WTh>
        <WTh>Default</WTh>
        <WTh>Description</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="row in componentReference.items">
        <WTd><code>{{ row[0] }}</code></WTd>
        <WTd><code>{{ row[1] }}</code></WTd>
        <WTd>{{ row[2] }}</WTd>
        <WTd v-html=" row[3]"></WTd>
    </WTr>
    </WTBody>
</WTable>

<script setup>
const componentReference= {
                header: [
                    "Property",
                    "Type",
                    "Default",
                    "Description"
                ],
                items: [
                    [
                        "tag",
                        "string",
                        "button",
                        "Default Button Tag. Can be changed depending on requirements"
                    ],
                    [
                        "variant",
                        "string",
                        "secondary",
                        "Applies one of the Bootstrap theme color variants to the component"
                    ],
                    [
                        "size",
                        "string",
                        "null",
                        "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'"
                    ],
                    [
                        "type",
                        "string",
                        "button",
                        "Button Type. Applies only when tag is button"
                    ],
                    [
                        "outline",
                        "boolean",
                        "false",
                        "Outline Based Contextual Color Variants"
                    ],
                    [
                        "block",
                        "boolean",
                        "false",
                        "Full Width button. Adds w-full class to the button element"
                    ],
                    [
                        "pill",
                        "boolean",
                        "false",
                        "Renders the button with the pill style appearance when set to 'true'"
                    ],
                    [
                        "squared",
                        "boolean",
                        "false",
                        "Renders the button with non-rounded corners when set to 'true'"
                    ],
                    [
                        "disabled",
                        "boolean",
                        "false",
                        "When set to `true`, disables the component's functionality and places it in a disabled state"
                    ],
                    [
                        "pressed",
                        "boolean",
                        "false",
                        `When set to 'true', gives the button the appearance of
                        being pressed and adds attribute 'aria-pressed="true"'.
                        When set to \`false\` adds attribute 'aria-pressed="false"'.
                         Tri-state prop. Syncable with the .sync modifier`
                    ],
                    [
                        "badge",
                        "string,number",
                        "null",
                        "Appends Badge in Button Element"
                    ],
                    [
                        "badgeVariant",
                        "string",
                        "primary",
                        "Appended Badge's color variant"
                    ]
                ]
            }
</script>
<style>
.child-m-2  button {
    margin: 2px !important;
}
</style>