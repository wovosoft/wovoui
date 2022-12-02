# List Group

List groups are a flexible and powerful component for displaying a series of content. List group items can be modified
to support just about any content within. They can also be used as navigation via various props.

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options
that follow, or with your own CSS as needed.

<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem>Cras justo odio</ListGroupItem>
<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Morbi leo risus</ListGroupItem>
<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Active items

Set prop `active` on the `<ListGroupItem>` which you want to be `active`.

<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem active>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem>Cras justo odio</ListGroupItem>
<ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Morbi leo risus</ListGroupItem>
<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Disabled items

Set prop `disabled` on the `<ListGroupItem>` which you want to be `disabled`.

<WListGroup>
  <WListGroupItem>Cras justo odio</WListGroupItem>
  <WListGroupItem disabled>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem>Morbi leo risus</WListGroupItem>
  <WListGroupItem>Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem>Cras justo odio</ListGroupItem>
<ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Morbi leo risus</ListGroupItem>
<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Links and buttons

To make actionable items by `<a>` or `<button>` use `href` attribute which will automatically create an `<a>` item or
use `button` prop which will create items with button element.

<WListGroup>
  <WListGroupItem button>Cras justo odio</WListGroupItem>
  <WListGroupItem button>Dapibus ac facilisis in</WListGroupItem>
  <WListGroupItem href="#">Morbi leo risus</WListGroupItem>
  <WListGroupItem href="#">Porta ac consectetur ac</WListGroupItem>
  <WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>


<div class="mt-3">

The first two items are created using `button` element, which are actionable. And next two items are created using `<a>`
element which are also actionable.
</div>

```vue

<ListGroup>
<ListGroupItem button>Cras justo odio</ListGroupItem>
<ListGroupItem button>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem href="#">Morbi leo risus</ListGroupItem>
<ListGroupItem href="#">Porta ac consectetur ac</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Flush

Add prop `flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent
container (e.g., cards).

<WListGroup flush>
<WListGroupItem>Cras justo odio</WListGroupItem>
<WListGroupItem>Dapibus ac facilisis in</WListGroupItem>
<WListGroupItem>Morbi leo risus</WListGroupItem>
<WListGroupItem>Porta ac consectetur ac</WListGroupItem>
<WListGroupItem>Vestibulum at eros</WListGroupItem>
</WListGroup>

```vue

<ListGroup flush>
<ListGroupItem>Cras justo odio</ListGroupItem>
<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Morbi leo risus</ListGroupItem>
<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Numbered

Add the prop `numbered` to opt into numbered list group items. Numbers are generated via CSS (as opposed to a `<ol>`s
default browser styling) for better placement inside list group items and to allow for better customization.

<WListGroup numbered>
  <WListGroupItem>A list item</WListGroupItem>
  <WListGroupItem>A list item</WListGroupItem>
  <WListGroupItem>A list item</WListGroupItem>
</WListGroup>

When `numbered` prop is used, the default element of `list-group` changes to `ol`. Inspect the element in your browser
and check the output for more details.

```vue

<ListGroup numbered>
<ListGroupItem>A list item</ListGroupItem>
<ListGroupItem>A list item</ListGroupItem>
<ListGroupItem>A list item</ListGroupItem>
</ListGroup>
```

These work great with custom content as well.

<WListGroup numbered>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
</WListGroup>

```vue

<ListGroup numbered>
<ListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
    </div>
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
<ListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
    </div>
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
<ListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
    </div>
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
</ListGroup>
```

## Horizontal

Add value for the prop `horizontal` to change the layout of list group items from vertical to horizontal across all
breakpoints. When value is `true` items are horizontal on all breakpoints. Alternatively, choose a responsive
variant `{sm|md|lg|xl|xxl}` to make a list group horizontal starting at that breakpoint’s `min-width`. Currently
horizontal list groups cannot be combined with flush list groups.

<WListGroup horizontal>
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="sm">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="md">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="lg">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="xl">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>
<WListGroup horizontal="xxl">
  <WListGroupItem>An item</WListGroupItem>
  <WListGroupItem>A second item</WListGroupItem>
  <WListGroupItem>A third item</WListGroupItem>
</WListGroup>

```vue

<ListGroup horizontal>
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<ListGroup horizontal="sm">
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<ListGroup horizontal="md">
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<ListGroup horizontal="lg">
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<ListGroup horizontal="xl">
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<ListGroup horizontal="xxl">
<ListGroupItem>An item</ListGroupItem>
<ListGroupItem>A second item</ListGroupItem>
<ListGroupItem>A third item</ListGroupItem>
</ListGroup>
```

## Contextual variants

For different contextual variant of list group items, set value for `variant` prop. Supported variant values are
`'primary'`|`'secondary'`|`'success'`|`'danger'`|`'warning'`|`'info'`|`'light'`|`'dark'`.

<WListGroup>
<WListGroupItem v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']" :variant="variant">
    A simple {{variant?variant:'default'}} group item
</WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem
    v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']"
    :variant="variant">
    A simple {{variant?variant:'default'}} group item
</ListGroupItem>
</ListGroup>
```

These variants also works with actionable items.

<WListGroup>
<WListGroupItem button v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']" :variant="variant">
    A simple {{variant?variant:'default'}} group item
</WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem
    button
    v-for="variant in [null,'primary','secondary','success','danger','warning','info','light','dark']"
    :variant="variant">
    A simple {{variant?variant:'default'}} group item
</ListGroupItem>
</ListGroup>
```

## With badges

Add badges to any list group item to show unread counts, activity, and more with the help of
some [utilities](https://getbootstrap.com/docs/5.1/utilities/flex/).

<WListGroup>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A list item
    <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A second list item
      <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
  <WListGroupItem class="d-flex justify-content-between align-items-center">
    A third list item
      <WBadge variant="primary" pill>14</WBadge>
  </WListGroupItem>
</WListGroup>

```vue

<ListGroup>
<ListGroupItem class="d-flex justify-content-between align-items-center">
    A list item
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
<ListGroupItem class="d-flex justify-content-between align-items-center">
    A second list item
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
<ListGroupItem class="d-flex justify-content-between align-items-center">
    A third list item
    <Badge variant="primary" pill>14</Badge>
</ListGroupItem>
</ListGroup>
```

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help
of [flexbox utilities](https://getbootstrap.com/docs/5.1/utilities/flex/).

<WListGroup tag="div">
<WListGroupItem href="#" active>
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
</WListGroupItem>
<WListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</WListGroupItem>
<WListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</WListGroupItem>
</WListGroup>

```vue

<ListGroup tag="div">
<ListGroupItem href="#" active>
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
</ListGroupItem>
<ListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</ListGroupItem>
<ListGroupItem href="#">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
</ListGroupItem>
</ListGroup>
```

## Checkboxes and radios

<w-list-group>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
</w-list-group-item>
<w-list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
</w-list-group-item>
</w-list-group>

```vue

<list-group>
<list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
</list-group-item>
<list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
</list-group-item>
<list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
</list-group-item>
<list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
</list-group-item>
<list-group-item>
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
</list-group-item>
</list-group>
```

And if you want `<label>`s as the `<ListGroupItem>` for large hit areas, you can do that, too. Just set `tag="label"`
for each `list-group-item`. Now click anywhere on any item, the checkbox will be toggled automatically.

<w-list-group tag="div">
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
</w-list-group-item>
<w-list-group-item tag="label">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
</w-list-group-item>
</w-list-group>

```html

<list-group tag="div">
    <list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        First checkbox
    </list-group-item>
    <list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Second checkbox
    </list-group-item>
    <list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Third checkbox
    </list-group-item>
    <list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Fourth checkbox
    </list-group-item>
    <list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Fifth checkbox
    </list-group-item>
</list-group>
```