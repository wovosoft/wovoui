# Cards

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of
content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace
our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for
cards.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and
customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have
no <code>margin</code> by default, so use
[spacing utilities](https://getbootstrap.com/docs/5.1/utilities/spacing/) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll
naturally fill the full width of its parent element. This is easily customized with our various
[sizing options](https://getbootstrap.com/docs/5.1/components/card/Index.vue#sizing).

<div class="bootstrap">
<WCard title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top tag="article"
style="max-width: 20rem;"
class="mb-2">
<WCardText>
Some quick example text to build on the card title and make up the bulk of the card's content.
</WCardText>
<WButton href="#" variant="primary">Go somewhere</WButton>
</WCard>
</div>

```vue

<Card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
<CardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</CardText>
<Button href="#" variant="primary">Go somewhere</Button>
</Card>
```

## Content types

Cards support a wide variety of content, including images, text, list groups, links and more. The following are examples
of what's supported inside a `<Card>`

## Card body

The building block of a <code>&lt;Card&gt;</code> is the <code>&lt;CardBody&gt;</code> section which provides a padded
section within a card.

By default the `<Card>` content is automatically placed in a <code>&lt;CardBody&gt;</code>
section:

<WCard class="text-center mb-3">
    <div class="bg-secondary text-light">
        This is some content within the default <code>&lt;CardBody&gt;</code> block of the
        <code>&lt;Card&gt;</code> component. Notice the padding between the card's border and this
        gray <samp>&lt;div&gt;</samp>.
    </div>
</WCard>

```vue

<Card no-body class="text-center">
<div class="bg-secondary text-light">
    This is some content without the default <samp>&lt;CardBody&gt;</samp> section. Notice the
    lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
</div>
</Card>
```

Disable the automatic `<CardBody>` section (and associated padding) by setting the prop no-body on the `<Card>`.

<WCard no-body class="text-center">
    <div class="bg-secondary text-light">
        This is some content without the default `CardBody` section. Notice the
        lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
</WCard>

Note that with `no-body` enabled, the content of the
`title` and `sub-title` props will not be rendered.

Use the `<CardBody>` sub-component to place your own card body anywhere in a
`<Card>` component that has `no-body` set.

## Titles, text, and links

Card titles are adding via the `title` prop, and sub titles are added via the `sub-title`
prop. The title is rendered using the sub-component `<CardTitle>` while the Sub Title is rendered using the
sub-component `<CardSubTitle>`.

With sub-component `<CardText>`, paragraph text can be added to the card. The last `<CardText>`
in the card body will have its bottom margin automatically removed (via CSS). Text within
`<CardText>` can also be styled with the standard HTML tags.

Links can be added and placed next to each other by adding the .card-link class to a `<a>`
tag (or `<Link>` component).

<WCard title="Card title" sub-title="Card subtitle" class="mb-3">
<WCardText>
    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
    content.
</WCardText>
<WCardText>
A second paragraph of text in the card.
</WCardText>
<a href="#" class="card-link">Card link</a>
<WLink href="#" class="card-link">Another link</WLink>
</WCard>

```vue

<Card title="Card title" sub-title="Card subtitle" class="mb-3">
<CardText>
    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
    content.
</CardText>
<CardText>A second paragraph of text in the card.</CardText>
<a href="#" class="card-link">Card link</a>
<Link href="#" class="card-link">Another link</Link>
</Card>
```

## Images

The `<Card>` prop `img-src` places an image on the top of the card, and use the
`img-alt` prop to specify a string to be placed in the image's `alt` attribute. The image specified by the `img-src`
prop will be responsive and will adjust its width when the width of the card is changed.

Alternatively you can manually place images inside `<Card>` using the sub-component `<CardImg>`. See the kitchen sink
example below for usage.

<div>
<h4>Top and Bottom</h4>
<WCardGroup deck>
<WCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
<WCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
<WCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
<WCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</WCardGroup>
</div>
<div class="mt-4">
<h4>Left and Right (or Start and End)</h4>
<WCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
<WCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</div>

```vue

<div>
<div>
    <h4>Top and Bottom</h4>
    <CardGroup deck>
        <Card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            <CardText>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </CardText>
        </Card>

        <Card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
            <CardText>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </CardText>
        </Card>
    </CardGroup>
</div>
<div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <Card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
        <CardText>
            Some quick example text to build on the card and make up the bulk of the card's content.
        </CardText>
    </Card>

    <Card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
        <CardText>
            Some quick example text to build on the card and make up the bulk of the card's content.
        </CardText>
    </Card>
</div>
</div>
```

## Overlay image

Place the image in the background of the card by setting the boolean prop `overlay`:

<div class="bootstrap">
<WCard overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white" title="Image Overlay" sub-title="Subtitle">
<WCardText>
Some quick example text to build on the card and make up the bulk of the card's content.
</WCardText>
</WCard>
</div>

```vue

<Card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle">
<CardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
</CardText>
</Card>
```

## List groups

Create lists of content in a card with a flush list group.

<WCard style="width: 18rem;" body-class="p-0">
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
</WCard>

```vue

<Card style="width: 18rem;" body-class="p-0">
<ListGroup flush>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
</ListGroup>
</Card>
```

<WCard style="width: 18rem;" no-body>
    <WCardHeader>
        Card Header
    </WCardHeader>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
</WCard>

```vue

<Card style="width: 18rem;" no-body>
<CardHeader>
    Card Header
</CardHeader>
<ListGroup flush>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
</ListGroup>
</Card>
```

<WCard style="width: 18rem;" no-body>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
    <WCardFooter>Card Footer</WCardFooter>
</WCard>

```vue

<Card style="width: 18rem;" no-body>
<ListGroup flush>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<CardFooter>Card Footer</CardFooter>
</Card>
```

## Kitchen sink

Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image
styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

<WCard style="width: 18rem;" no-body>
    <img src="https://placekitten.com/380/200" class="card-img-top" alt="...">
    <WCardBody>
        <WCardTitle>Card title</WCardTitle>
        <WCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</WCardText>
    </WCardBody>
    <WListGroup flush>
        <WListGroupItem>An item</WListGroupItem>
        <WListGroupItem>A second item</WListGroupItem>
        <WListGroupItem>A third item</WListGroupItem>
    </WListGroup>
    <WCardBody>
        <WCardLink href="#">Card link</WCardLink>
        <WCardLink href="#">Another link</WCardLink>
    </WCardBody>
</WCard>

```vue

<Card style="width: 18rem;" no-body>
<img src="https://placekitten.com/380/200" class="card-img-top" alt="...">
<CardBody>
    <CardTitle>Card title</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
</CardBody>
<ListGroup flush>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
</ListGroup>
<CardBody>
    <CardLink href="#">Card link</CardLink>
    <CardLink href="#">Another link</CardLink>
</CardBody>
</Card>
```

## Header and footer

Add an optional header and/or footer within a card via the `header/footer` props or named slots. You can control the
wrapper element tags used by setting the `header-tag` and `footer-tag`
props (both default is `div`)

<WCard header="featured" header-tag="header" footer="Card Footer" footer-tag="footer" title="Title">
<WCardText>Header and footers using props.</WCardText>
<WButton href="#" variant="primary">Go somewhere</WButton>
</WCard>

```vue

<Card
    header="featured"
    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    title="Title">
<CardText>Header and footers using props.</CardText>
<Button href="#" variant="primary">Go somewhere</Button>
</Card>
```

<WCard title="Title" class="mt-3" header-tag="header" footer-tag="footer">
    <template #header>
        <h6 class="mb-0">Header Slot</h6>
    </template>
    <WCardText>Header and footers using slots.</WCardText>
    <WButton href="#" variant="primary">Go somewhere</WButton>
    <template #footer>
        <em>Footer Slot</em>
    </template>
</WCard>

```vue

<Card title="Title" class="mt-3" header-tag="header" footer-tag="footer">
<template #header>
    <h6 class="mb-0">Header Slot</h6>
</template>
<CardText>Header and footers using slots.</CardText>
<Button href="#" variant="primary">Go somewhere</Button>
<template #footer>
    <em>Footer Slot</em>
</template>
</Card>
```

<WCard header="Quote">
    <blockquote class="blockquote mb-0">
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
</WCard>

```vue

<Card header="Quote">
<blockquote class="blockquote mb-0">
    <p>A well-known quote, contained in a blockquote element.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
</Card>
```

<WCard class="text-center" header="Featured" footer="2 days ago">
    <WCardTitle class="card-title">Special title treatment</WCardTitle>
    <WCardText class="card-text">With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

```vue

<Card class="text-center" header="Featured" footer="2 days ago">
<CardTitle class="card-title">Special title treatment</CardTitle>
<CardText class="card-text">With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>
```

## Sizing

Cards assume no specific `width` to start, so they’ll be 100% wide unless otherwise stated. You can change this as
needed with custom CSS, grid classes, grid Sass mixins, or utilities.

## Using grid markup

Using the grid, wrap cards in columns and rows as needed.

<WRow>
    <WCol sm="6">
        <WCard>
            <WCardTitle>Special title treatment</WCardTitle>
            <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </WCard>
    </WCol>
    <WCol sm="6">
        <WCard>
            <WCardTitle>Special title treatment</WCardTitle>
            <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </WCard>
    </WCol>
</WRow>

```vue

<Row>
<Col sm="6">
    <Card>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </Card>
</Col>
<Col sm="6">
    <Card>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </Card>
</Col>
</Row>
```

## Using utilities

<WCard class="w-75">
    <WCardTitle>Card title</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Button</a>
</WCard>

```vue

<Card class="w-75">
<CardTitle>Card title</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Button</a>
</Card>
```

<WCard class="w-50">
    <WCardTitle>Card title</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Button</a>
</WCard>

```vue

<Card class="w-50">
<CardTitle>Card title</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Button</a>
</Card>
```

## Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

<WCard style="width: 18rem;">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

```vue

<Card style="width: 18rem;">
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>
```

## Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with bootstrap's
[text align classes](https://getbootstrap.com/docs/5.1/utilities/text/#text-alignment)

<WCard style="width: 18rem;">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

<WCard style="width: 18rem;" class="text-center">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

<WCard style="width: 18rem;" class="text-end">
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

```vue

<Card style="width: 18rem;">
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>

<Card style="width: 18rem;" class="text-center">
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>

<Card style="width: 18rem;" class="text-end">
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>
```

## Navigation

<WCard class="text-center">
    <template #header>
        <WNav tabs class="card-header-tabs">
            <WNavItem active href="#">Active</WNavItem>
            <WNavItem href="#">Link</WNavItem>
            <WNavItem href="#" disabled>Disabled</WNavItem>
        </WNav>
    </template>
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

```vue

<Card class="text-center">
<template #header>
    <Nav tabs class="card-header-tabs">
        <NavItem active href="#">Active</NavItem>
        <NavItem href="#">Link</NavItem>
        <NavItem href="#" disabled>Disabled</NavItem>
    </Nav>
</template>
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>
```

<WCard class="text-center">
    <template #header>
        <WNav pills class="card-header-pills">
            <WNavItem active href="#">Active</WNavItem>
            <WNavItem href="#">Link</WNavItem>
            <WNavItem href="#" disabled>Disabled</WNavItem>
        </WNav>
    </template>
    <WCardTitle>Special title treatment</WCardTitle>
    <WCardText>With supporting text below as a natural lead-in to additional content.</WCardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</WCard>

```vue

<Card class="text-center">
<template #header>
    <Nav pills class="card-header-pills">
        <NavItem active href="#">Active</NavItem>
        <NavItem href="#">Link</NavItem>
        <NavItem href="#" disabled>Disabled</NavItem>
    </Nav>
</template>
<CardTitle>Special title treatment</CardTitle>
<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
<a href="#" class="btn btn-primary">Go somewhere</a>
</Card>
```

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.
[text color](https://getbootstrap.com/docs/5.1/utilities/colors/) and
[background utilities](https://getbootstrap.com/docs/5.1/utilities/background/)
are used under the hood to change the appearance of a card. You can directly use
[text color](https://getbootstrap.com/docs/5.1/utilities/colors/) and
[background utilities](https://getbootstrap.com/docs/5.1/utilities/background/) in this regard.

## Solid

<WCardGroup deck class="mt-3">
    <WCard bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="success" text-variant="white" header="Success" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>
<WCardGroup deck class="mt-3">
    <WCard bg-variant="info" text-variant="white" header="Info" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>
<WCardGroup deck class="mt-3">
    <WCard bg-variant="light" header="Light" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard header="Default" class="text-center">
        <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
</WCardGroup>

```vue

<CardGroup deck class="mt-3">
<Card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card bg-variant="success" text-variant="white" header="Success" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
</CardGroup>
<CardGroup deck class="mt-3">
<Card bg-variant="info" text-variant="white" header="Info" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
</CardGroup>
<CardGroup deck class="mt-3">
<Card bg-variant="light" header="Light" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>

<Card header="Default" class="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
</CardGroup>
```

## Bordered

<div>
<div>
<WCardGroup deck>
<WCard border-variant="primary" header="Primary" header-bg-variant="primary" header-text-variant="white" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="secondary" header="Secondary" header-border-variant="secondary" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="success" header="Success" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
</WCardGroup>
</div>
<div class="mt-3">
  <WCardGroup deck>
    <WCard border-variant="info" header="Info" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard border-variant="warning" header="Warning" header-bg-variant="transparent" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
    <WCard border-variant="danger" header="Danger" header-border-variant="danger" header-text-variant="danger" align="center">
      <WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
    </WCard>
  </WCardGroup>
</div>
<div class="mt-3">
<WCardGroup deck class="mb-3">
<WCard border-variant="light" header="Light" class="text-center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
<WCard border-variant="dark" header="Dark" align="center">
<WCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WCardText>
</WCard>
</WCardGroup>
</div>
</div>

```vue

<div>
<div>
    <CardGroup deck>
        <Card
            border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>

        <Card
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>

        <Card border-variant="success" header="Success" align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>
    </CardGroup>
</div>
<div class="mt-3">
    <CardGroup deck>
        <Card border-variant="info" header="Info" align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>

        <Card
            border-variant="warning"
            header="Warning"
            header-bg-variant="transparent"
            align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>

        <Card
            border-variant="danger"
            header="Danger"
            header-border-variant="danger"
            header-text-variant="danger"
            align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>
    </CardGroup>
</div>
<div class="mt-3">
    <CardGroup deck class="mb-3">
        <Card border-variant="light" header="Light" class="text-center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>

        <Card border-variant="dark" header="Dark" align="center">
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
        </Card>
    </CardGroup>
</div>
</div>
```

## Header and footer variants

You can also apply the solid and border variants individually to card headers and footers via the
`header-bg-variant`, `header-border-variant`, `header-text-variant`,
`footer-bg-variant`, `footer-border-variant`, and `footer-text-variant` props.

<WCard header="Card Header"
header-text-variant="white"
header-tag="header"
header-bg-variant="dark"
footer="Card Footer"
footer-tag="footer"
footer-bg-variant="success" footer-border-variant="dark" title="Title" style="max-width: 20rem;">
<WCardText>Header and footers variants.</WCardText>
</WCard>

```vue

<Card
    header="Card Header"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Title"
    style="max-width: 20rem;">
<CardText>Header and footers variants.</CardText>
</Card>
```

<WCard border-variant="success" header-border-variant="success" header="Header" header-bg-variant="transparent" body-text-variant="success" title="Success card title" footer="Footer" footer-bg-variant="transparent" footer-border-variant="success" class="mb-3" style="max-width: 18rem;">
<WCardText>
Some quick example text to build on the card title and make up the bulk of the card's content.
</WCardText>
</WCard>

```vue

<Card border-variant="success"
      header-border-variant="success"
      header="Header"
      header-bg-variant="transparent"
      body-text-variant="success"
      title="Success card title"
      footer="Footer"
      footer-bg-variant="transparent"
      footer-border-variant="success"
      class="mb-3" style="max-width: 18rem;">
<CardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
</CardText>
</Card>
```

## Card groups

In addition to styling the content within cards, wovoui includes a `<CardGroup>` component for laying out series of
cards. For the time being, these layout options are not yet responsive.

### Default card group

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use
display: flex; to achieve their uniform sizing.

When using card groups with footers, their content will automatically line up.

<WCardGroup>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
</WCardGroup>

```vue

<CardGroup>
<Card title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>

<Card title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
    <CardText>
        This card has supporting text below as a natural lead-in to additional content.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>

<Card title="Title" img-src="https://placekitten.com/g/300/200" img-alt="Image" img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>
</CardGroup>
```

### Card deck groups

Need a set of equal width and height cards that aren't attached to one another? Use card decks by setting the
`deck` prop. And just like with regular card groups, card footers in decks will automatically line up.

<WCardGroup deck>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
    <WCard title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
        </WCardText>
        <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </template>
    </WCard>
</WCardGroup>

```vue

<CardGroup deck>
<Card title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>
<Card title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
    <CardText>
        This card has supporting text below as a natural lead-in to additional content.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>
<Card title="Title" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
    </CardText>
    <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
    </template>
</Card>
</CardGroup>
```

### Card column groups

Cards can be organized into Masonry-like columns with by wrapping them in a
`CardGroup` with the prop `columns` set. Cards are built with CSS column properties instead of flexbox for easier
alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to
display: inline-block as column-break-inside: avoid isn't a bulletproof solution yet.

<WCardGroup columns>
    <WCard
        title="Card title that wraps to a new line"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </WCardText>
    </WCard>
    <WCard header="Quote">
        <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
        </blockquote>
    </WCard>
    <WCard title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <WCardText class="small text-muted">Last updated 3 mins ago</WCardText>
    </WCard>
    <WCard bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
        </blockquote>
    </WCard>
    <WCard>
        <WCardTitle>Title</WCardTitle>
        <WCardText>
            This card has supporting text below as a natural lead-in to additional content.
        </WCardText>
        <WCardText class="small text-muted">Last updated 3 mins ago</WCardText>
    </WCard>
    <WCard img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></WCard>
    <WCard img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <WCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
        </WCardText>
        <template #footer>
            <small class="text-muted">Footer Text</small>
        </template>
    </WCard>
</WCardGroup>

```vue

<CardGroup columns>
<Card
    title="Card title that wraps to a new line"
    img-src="https://placekitten.com/g/400/450"
    img-alt="Image"
    img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
    </CardText>
</Card>
<Card header="Quote">
    <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
    </blockquote>
</Card>
<Card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
    <CardText>
        This card has supporting text below as a natural lead-in to additional content.
    </CardText>
    <CardText class="small text-muted">Last updated 3 mins ago</CardText>
</Card>
<Card bg-variant="primary" text-variant="white">
    <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
    </blockquote>
</Card>
<Card>
    <CardTitle>Title</CardTitle>
    <CardText>
        This card has supporting text below as a natural lead-in to additional content.
    </CardText>
    <CardText class="small text-muted">Last updated 3 mins ago</CardText>
</Card>
<Card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></Card>
<Card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
    <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
    </CardText>
    <template #footer>
        <small class="text-muted">Footer Text</small>
    </template>
</Card>
</CardGroup>
```

## Component reference

<WDataTable small hover bordered head-variant="dark" :fields="['property','type','default','description']" :items="componentReference"></WDataTable>


<script setup>
const componentReference= [
    {
        property: "align",
        type: "String",
        default: "",
        description: "Text alignment for the card's content: 'left', 'center' or 'right'",
    },
    {
        property: "bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the background",
    },
    {
        property: "body-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body background",
    },
    {
        property: "body-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body border",
    },
    {
        property: "body-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the body",
    },
    {
        property: "body-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the body",
    },
    {
        property: "body-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the body text",
    },
    {
        property: "border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the border",
    },
    {
        property: "footer",
        type: "String",
        default: "",
        description: "Text content to place in the footer",
    },
    {
        property: "footer-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer background",
    },
    {
        property: "footer-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer border",
    },
    {
        property: "footer-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the footer",
    },
    {
        property: "footer-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the footer",
    },
    {
        property: "footer-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the footer text",
    },
    {
        property: "header",
        type: "String",
        default: "",
        description: "Text content to place in the header",
    },
    {
        property: "header-bg-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header background",
    },
    {
        property: "header-border-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header border",
    },
    {
        property: "header-class",
        type: "Array or Object or String",
        default: "",
        description: "CSS class (or classes) to apply to the header",
    },
    {
        property: "header-tag",
        type: "String",
        default: "'div'",
        description: "Specify the HTML tag to render instead of the default tag for the header",
    },
    {
        property: "header-text-variant",
        type: "String",
        default: "",
        description: "Applies one of the Bootstrap theme color variants to the header text",
    },
    {
        property: "img-alt",
        type: "String",
        default: "",
        description: "Value to set the image attribute 'alt'",
    },
    {
        property: "img-bottom",
        type: "Boolean",
        default: "false",
        description: "Set if the image should appear at the bottom of the card",
    },
    {
        property: "img-end",
        type: "Boolean",
        default: "false",
        description: "Set if the image should appear at the end (right) of the card",
    },
    {
        property: "img-height",
        type: "String or Number",
        default: "",
        description: "The value to set on the image's 'height' attribute",
    },
    {
        property: "img-left",
        type: "Boolean",
        default: "false.",
        description: "Set if the image should appear at the start (left) of the card. Synonym for the 'left' prop",
    },
    {
        property: "img-right",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the end (right) of the card. Synonym for the 'right' prop",
    },
    {
        property: "img-src",
        type: "String",
        default: "",
        description: "URL for the optional image",
    },
    {
        property: "img-start",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the start (left) of the card",
    },
    {
        property: "img-top",
        type: "Boolean",
        default: "",
        description: "Set if the image should appear at the top of the card",
    },

];
</script>
