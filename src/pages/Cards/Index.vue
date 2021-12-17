<template>
    <h1>Cards</h1>
    <p>
        A card is a flexible and extensible content container. It includes options for headers and footers, a wide
        variety of content, contextual background colors, and powerful display options.
    </p>
    <h2>About</h2>
    <p>
        A card is a flexible and extensible content container. It includes options for headers and footers, a wide
        variety of content, contextual background colors, and powerful display options. If you’re familiar with
        Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is
        available as modifier classes for cards.
    </p>
    <h2>Example</h2>
    <p>
        Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and
        customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They
        have no <code>margin</code> by default, so use
        <a href="https://getbootstrap.com/docs/5.1/utilities/spacing/" target="_blank">spacing utilities</a> as needed.
    </p>
    <p>
        Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so
        they’ll naturally fill the full width of its parent element. This is easily customized with our various
        <a href="https://getbootstrap.com/docs/5.1/components/card/Index.vue#sizing" target="_blank">sizing options.</a>
    </p>
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
    <Highlight language="xml" code='<Card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <CardText>
        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
    </CardText>
    <Button href="#" variant="primary">Go somewhere</Button>
</Card>'/>

    <h2>Content types</h2>
    <p>
        Cards support a wide variety of content, including images, text, list groups, links and more. The following are
        examples of what's supported inside a <code>&lt;Card&gt;</code>
    </p>

    <h2>Card body</h2>
    <p>
        The building block of a <code>&lt;Card&gt;</code> is the <code>&lt;CardBody&gt;</code> section which provides a
        padded section within a card.
    </p>
    <p>
        By default the <code>&lt;Card&gt;</code> content is automatically placed in a <code>&lt;CardBody&gt;</code>
        section:
    </p>
    <Card class="text-center">
        <div class="bg-secondary text-light">
            This is some content within the default <samp>&lt;CardBody&gt;</samp> block of the
            <samp>&lt;Card&gt;</samp> component. Notice the padding between the card's border and this
            gray <samp>&lt;div&gt;</samp>.
        </div>
    </Card>
    <p>
        Disable the automatic <code>&lt;CardBody&gt;</code> section (and associated padding) by setting
        the prop no-body on the <code>&lt;Card&gt;</code>.
    </p>
    <Card no-body class="text-center">
        <div class="bg-secondary text-light">
            This is some content without the default <samp>&lt;CardBody&gt;</samp> section. Notice the
            lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
        </div>
    </Card>
    <p>
        Note that with <code>no-body</code> enabled, the content of the
        <code>title</code> and <code>sub-title</code> props will not be rendered.
    </p>
    <p>
        Use the <code>&lt;CardBody&gt;</code> sub-component to place your own card body anywhere in a
        <code>&lt;Card&gt;</code> component that has <code>no-body</code> set.
    </p>

    <h2>Titles, text, and links</h2>
    <p>
        Card titles are adding via the <code>title</code> prop, and sub titles are added via the <code>sub-title</code>
        prop. The title is rendered using the sub-component <code>&lt;CardTitle&gt;</code> while the Sub Title is
        rendered using the sub-component <code>&lt;CardSubTitle&gt;</code>.
    </p>
    <p>
        With sub-component <code>&lt;CardText&gt;</code>, paragraph text can be added to the card. The last <code>&lt;CardText&gt;</code>
        in the card body will have its bottom margin automatically removed (via CSS). Text within
        <code>&lt;CardText&gt;</code> can also be styled with the standard HTML tags.
    </p>
    <p>
        Links can be added and placed next to each other by adding the .card-link class to a <code>&lt;a&gt;</code>
        tag (or <code>&lt;Link&gt;</code> component).
    </p>

    <Card title="Card title" sub-title="Card subtitle" class="mb-3">
        <CardText>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
        </CardText>

        <CardText>A second paragraph of text in the card.</CardText>

        <a href="#" class="card-link">Card link</a>
        <Link href="#" class="card-link">Another link</Link>
    </Card>
    <h2>Images</h2>
    <p>
        The <code>&lt;Card&gt;</code> prop <code>img-src</code> places an image on the top of the card, and use the
        <code>img-alt</code> prop to specify a string to be placed in the image's <code>alt</code> attribute. The image
        specified by the <code>img-src</code> prop will be responsive and will adjust its width when the width of the
        card is changed.
    </p>
    <p>
        Alternatively you can manually place images inside <code>&lt;Card&gt;</code> using the
        sub-component <code>&lt;CardImg&gt;</code>. See the kitchen sink example below for usage.
    </p>
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
    <h2>
        Overlay image
    </h2>
    <p>
        Place the image in the background of the card by setting the boolean prop <code>overlay</code>:
    </p>
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
    <Highlight code='<Card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle">
    <CardText>
        Some quick example text to build on the card and make up the bulk of the card&apos;s content.
    </CardText>
</Card>'/>

    <h2>List groups</h2>
    <p>
        Create lists of content in a card with a flush list group.
    </p>
    <Card style="width: 18rem;">
        <ListGroup flush>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
    </Card>
    <Highlight code='<Card style="width: 18rem;">
    <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
</Card>'/>

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
    <Highlight code='<Card style="width: 18rem;" no-body>
    <CardHeader>
        Card Header
    </CardHeader>
    <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
</Card>'/>

    <Card style="width: 18rem;" no-body>
        <ListGroup flush>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
        <CardFooter>Card Footer</CardFooter>
    </Card>
    <Highlight code='<Card style="width: 18rem;" no-body>
    <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <CardFooter>Card Footer</CardFooter>
</Card>'/>

    <h2>Kitchen sink</h2>
    <p>
        Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are
        image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
    </p>
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

    <Highlight code='<Card style="width: 18rem;" no-body>
    <img src="https://placekitten.com/380/200" class="card-img-top" alt="...">
    <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
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
</Card>'/>

    <h2>Header and footer</h2>
    <p>
        Add an optional header and/or footer within a card via the <code>header/footer</code> props or named slots. You
        can control the wrapper element tags used by setting the <code>header-tag</code> and <code>footer-tag</code>
        props (both default is <code>div</code>)
    </p>
    <Card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title">
        <CardText>Header and footers using props.</CardText>
        <Button href="#" variant="primary">Go somewhere</Button>
    </Card>

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

    <Highlight code='<Card
    header="featured"
    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    title="Title">
    <CardText>Header and footers using props.</CardText>
    <Button href="#" variant="primary">Go somewhere</Button>
</Card>

<Card title="Title" class="mt-3" header-tag="header" footer-tag="footer">
    <template #header>
        <h6 class="mb-0">Header Slot</h6>
    </template>
    <CardText>Header and footers using slots.</CardText>
    <Button href="#" variant="primary">Go somewhere</Button>
    <template #footer>
        <em>Footer Slot</em>
    </template>
</Card>'/>

    <Card header="Quote">
        <blockquote class="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
    </Card>

    <Highlight code='<Card header="Quote">
    <blockquote class="blockquote mb-0">
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
</Card>'/>

    <Card class="text-center" header="Featured" footer="2 days ago">
        <CardTitle class="card-title">Special title treatment</CardTitle>
        <CardText class="card-text">With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </Card>
    <Highlight class="border mt-3" code='<Card class="text-center" header="Featured" footer="2 days ago">
    <CardTitle class="card-title">Special title treatment</CardTitle>
    <CardText class="card-text">With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</Card>'/>


    <h2>Sizing</h2>
    <p>
        Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can
        change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.
    </p>

    <h2>Using grid markup</h2>
    <p>Using the grid, wrap cards in columns and rows as needed.</p>
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
    <Highlight code='<Row>
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
</Row>'/>

    <h2>Using utilities</h2>
    <Card class="w-75">
        <CardTitle>Card title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Button</a>
    </Card>

    <Card class="w-50">
        <CardTitle>Card title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Button</a>
    </Card>

    <Highlight code='<Card class="w-75">
    <CardTitle>Card title</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" class="btn btn-primary">Button</a>
</Card>

<Card class="w-50">
    <CardTitle>Card title</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" class="btn btn-primary">Button</a>
</Card>'/>

    <h2>Using custom CSS</h2>
    <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>
    <Card style="width: 18rem;">
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </Card>
    <Highlight class="mt-3 border" code='<Card style="width: 18rem;">
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</Card>'/>

    <h2>Text alignment</h2>
    <p>
        You can quickly change the text alignment of any card—in its entirety or specific parts—with bootstrap's
        <Link target="_blank" href="https://getbootstrap.com/docs/5.1/utilities/text/#text-alignment">text align
            classes
        </Link>
    </p>
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


    <Highlight code='<Card style="width: 18rem;">
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
</Card>'/>

    <h2>Navigation</h2>
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
    <Highlight class="mt-3 border" code='<Card class="text-center">
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
</Card>'/>

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
    <Highlight code='<Card class="text-center">
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
</Card>'/>

    <h2>Card styles</h2>
    <p>
        Cards include various options for customizing their backgrounds, borders, and color.
        <a href="https://getbootstrap.com/docs/5.1/utilities/colors/">text color</a> and
        <a href="https://getbootstrap.com/docs/5.1/utilities/background/">background utilities</a>
        are used under the hood to change the appearance of a card. You can directly use
        <a href="https://getbootstrap.com/docs/5.1/utilities/colors/">text color</a> and
        <a href="https://getbootstrap.com/docs/5.1/utilities/background/">background utilities</a>
        in this regard.
    </p>
    <h2>Solid</h2>
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

    <Highlight code='<CardGroup deck class="mt-3">
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
</CardGroup>'/>

    <h2 class="mt-3">Bordered</h2>
    <div>
        <div>
            <CardGroup deck>
                <Card
                    border-variant="primary"
                    header="Primary"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center"
                >
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                </Card>

                <Card
                    border-variant="secondary"
                    header="Secondary"
                    header-border-variant="secondary"
                    align="center"
                >
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
                    align="center"
                >
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                </Card>

                <Card
                    border-variant="danger"
                    header="Danger"
                    header-border-variant="danger"
                    header-text-variant="danger"
                    align="center"
                >
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
    <Highlight code='<div>
    <div>
        <CardGroup deck>
            <Card
                border-variant="primary"
                header="Primary"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
            >
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
            </Card>

            <Card
                border-variant="secondary"
                header="Secondary"
                header-border-variant="secondary"
                align="center"
            >
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
                align="center"
            >
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
            </Card>

            <Card
                border-variant="danger"
                header="Danger"
                header-border-variant="danger"
                header-text-variant="danger"
                align="center"
            >
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
</div>'/>

    <h2>Header and footer variants</h2>
    <p>
        You can also apply the solid and border variants individually to card headers and footers via the
        <code>header-bg-variant</code>,
        <code>header-border-variant</code>,
        <code>header-text-variant</code>,
        <code>footer-bg-variant</code>, <code>footer-border-variant</code>, and
        <code>footer-text-variant</code> props.
    </p>
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
    <Highlight code='<Card
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
</Card>'/>


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
    <Highlight code='<Card border-variant="success"
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
       Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
    </CardText>
</Card>'/>


    <h2>Card groups</h2>
    <p>
        In addition to styling the content within cards, wovoui includes a <code>&lt;CardGroup&gt;</code> component for
        laying out series of cards. For the time being, these layout options are not yet responsive.
    </p>
    <h2>Default card group</h2>
    <p>
        Use card groups to render cards as a single, attached element with equal width and height columns. Card groups
        use display: flex; to achieve their uniform sizing.
    </p>
    <p>
        When using card groups with footers, their content will automatically line up.
    </p>
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
    <Highlight code='<CardGroup>
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
</CardGroup>'/>
    <h2>Card deck groups</h2>
    <p>
        Need a set of equal width and height cards that aren't attached to one another? Use card decks by setting the
        <code>deck</code> prop. And just like with regular card groups, card footers in decks will automatically line
        up.
    </p>
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
    <Highlight code='<CardGroup deck>
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
</CardGroup>'/>


    <h2>Card column groups</h2>
    <p>
        Cards can be organized into Masonry-like columns with by wrapping them in a
        <code>CardGroup</code> with the prop <code>columns</code> set. Cards are built with CSS column properties
        instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.
    </p>
    <p>
        Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to
        display: inline-block as column-break-inside: avoid isn't a bulletproof solution yet.
    </p>

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

    <h2>Component reference</h2>
    <DataTable
        small
        hover
        bordered
        head-variant="dark"
        :fields="['property','type','default','description']"
        :items="componentReference"></DataTable>
</template>


<script>
import Card from "../../components/Card.vue";
import CardText from "../../components/CardText.vue";
import Button from "../../components/Button.vue";
import Highlight from "../../components/Highlight.ts";
import Link from "../../components/Link.vue";
import CardGroup from "../../components/CardGroup.vue";
import ListGroup from "../../components/ListGroup.vue";
import ListGroupItem from "../../components/ListGroupItem.vue";
import CardHeader from "../../components/CardHeader.vue";
import CardFooter from "../../components/CardFooter.vue";
import CardBody from "../../components/CardBody.vue";
import CardTitle from "../../components/CardTitle.vue";
import CardLink from "../../components/CardLink.vue";
import Col from "../../components/Col.vue";
import Row from "../../components/Row.vue";
import Nav from "../../components/Nav.vue";
import NavItem from "../../components/NavItem.vue";
import DataTable from "../../components/DataTable.vue";

export default {
    components: {
        DataTable,
        NavItem,
        Nav,
        Row,
        Col,
        CardLink,
        CardTitle,
        CardBody,
        CardFooter, CardHeader, ListGroupItem, ListGroup, CardGroup, Link, Highlight, Button, CardText, Card
    },
    setup(props) {
        return {
            componentReference: [
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

            ]
        }
    }
}
</script>
