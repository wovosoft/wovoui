# Badges

Documentation and examples for badges, our small count and labeling component.

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5,
badges no longer have focus or hover styles for links.

<div class="border p-2">
<h1>Example heading <WBadge variant="secondary">New</WBadge></h1>
<h2>Example heading <WBadge variant="secondary">New</WBadge></h2>
<h3>Example heading <WBadge variant="secondary">New</WBadge></h3>
<h4>Example heading <WBadge variant="secondary">New</WBadge></h4>
<h5>Example heading <WBadge variant="secondary">New</WBadge></h5>
<h6>Example heading <WBadge variant="secondary">New</WBadge></h6>
</div>

```vue

<div class="border p-2">
<h1>Example heading
    <Badge variant="secondary">New</Badge>
</h1>
<h2>Example heading
    <Badge variant="secondary">New</Badge>
</h2>
<h3>Example heading
    <Badge variant="secondary">New</Badge>
</h3>
<h4>Example heading
    <Badge variant="secondary">New</Badge>
</h4>
<h5>Example heading
    <Badge variant="secondary">New</Badge>
</h5>
<h6>Example heading
    <Badge variant="secondary">New</Badge>
</h6>
</div>
```

## Buttons

Badges can be used as part of links or buttons to provide a counter.

<WButton variant="primary">
  Notifications <WBadge variant="secondary">4</WBadge>
</WButton>

```vue

<Button variant="primary">
Notifications
<Badge variant="secondary">4</Badge>
</Button>
```

## Positioned

Badges can be positioned in different corners depending on its parent. Use values
`top-right`, `top-left`, `bottom-right` or `bottom-left` for `position` property.

<WRow>
<WCol>
<WButton variant="primary" class="position-relative">
  Inbox
  <WBadge variant="danger" pill position="top-right">
    99+
    <span class="visually-hidden">unread messages</span>
  </WBadge>
</WButton>
</WCol>
<WCol>
<WButton variant="primary" class="position-relative">
  Inbox
  <WBadge variant="danger" pill position="top-left">
    99+
    <span class="visually-hidden">unread messages</span>
  </WBadge>
</WButton>
</WCol>
</WRow>
<WRow class="mt-5">
<WCol>
<WButton variant="primary" class="position-relative">
  Inbox
  <WBadge variant="danger" pill position="bottom-right">
    99+
    <span class="visually-hidden">unread messages</span>
  </WBadge>
</WButton>
</WCol>
<WCol>
<WButton variant="primary" class="position-relative">
  Inbox
  <WBadge variant="danger" pill position="bottom-left">
    99+
    <span class="visually-hidden">unread messages</span>
  </WBadge>
</WButton>
</WCol>
</WRow>

```vue

<Row>
<Col>
    <Button variant="primary" class="position-relative">
        Inbox
        <Badge variant="danger" pill position="top-right">
            99+
            <span class="visually-hidden">unread messages</span>
        </Badge>
    </Button>
</Col>
<Col>
    <Button variant="primary" class="position-relative">
        Inbox
        <Badge variant="danger" pill position="top-left">
            99+
            <span class="visually-hidden">unread messages</span>
        </Badge>
    </Button>
</Col>
</Row>
<Row class="mt-5">
<Col>
    <Button variant="primary" class="position-relative">
        Inbox
        <Badge variant="danger" pill position="bottom-right">
            99+
            <span class="visually-hidden">unread messages</span>
        </Badge>
    </Button>
</Col>
<Col>
    <Button variant="primary" class="position-relative">
        Inbox
        <Badge variant="danger" pill position="bottom-left">
            99+
            <span class="visually-hidden">unread messages</span>
        </Badge>
    </Button>
</Col>
</Row>
```

## Background colors

User color variants  `primary` ,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark` for `variant` property to
achieve different backgrounds.

<WBadge :variant="v" class="m-2" v-for="v in ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'light' , 'dark']">
{{v}}
</WBadge>

```vue

<Badge :variant="v" class="m-2"
       v-for="v in ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'light' , 'dark']">
{{v}}
</Badge>
```

## Pill badges

Use prop `pill`

<WBadge :variant="v" pill class="m-2" v-for="v in ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'light' , 'dark']">
{{v}}
</WBadge>

```vue

<Badge :variant="v" pill class="m-2"
        v-for="v in ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'light' , 'dark']">
{{v}}
</Badge>
```