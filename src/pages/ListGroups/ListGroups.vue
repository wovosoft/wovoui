<template>
    <h1>List group</h1>
    <p>
        List groups are a flexible and powerful component for displaying a series of content. List group items can be
        modified to support just about any content within. They can also be used as navigation via various props.
    </p>
    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Highlight code='<ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>'/>

    <h2>Active items</h2>
    <p>
        Set the <code>active</code> prop on a <code>&lt;ListGroupItem&gt;</code> to indicate the current active
        selection.
    </p>
    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>

    <Highlight code='<ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>'/>

    <h2>Actionable list group items</h2>
    <p>
        Turn a <code>&lt;ListGroupItem&gt;</code> into an actionable link (<code>&lt;a href="..."&gt;</code>) by
        specifying either an <code>href</code> prop or <code>router-link</code> to prop.
    </p>
    <ListGroup>
        <ListGroupItem href="#some-link">Awesome link</ListGroupItem>
        <ListGroupItem href="#" active>Link with active state</ListGroupItem>
        <ListGroupItem href="#">Action links are easy</ListGroupItem>
        <ListGroupItem href="#foobar" disabled>Disabled link</ListGroupItem>
    </ListGroup>
    <Highlight code='<ListGroup>
    <ListGroupItem href="#some-link">Awesome link</ListGroupItem>
    <ListGroupItem href="#" active>Link with active state</ListGroupItem>
    <ListGroupItem href="#">Action links are easy</ListGroupItem>
    <ListGroupItem href="#foobar" disabled>Disabled link</ListGroupItem>
</ListGroup>'/>

    <h2>Contextual variants</h2>
    <p>
        Use contextual variants to style list items with a stateful background and color, via the <code>variant</code>
        prop.
    </p>
    <ListGroup>
        <ListGroupItem>Default list group item</ListGroupItem>
        <ListGroupItem variant="primary">Primary list group item</ListGroupItem>
        <ListGroupItem variant="secondary">Secondary list group item</ListGroupItem>
        <ListGroupItem variant="success">Success list group item</ListGroupItem>
        <ListGroupItem variant="danger">Danger list group item</ListGroupItem>
        <ListGroupItem variant="warning">Warning list group item</ListGroupItem>
        <ListGroupItem variant="info">Info list group item</ListGroupItem>
        <ListGroupItem variant="light">Light list group item</ListGroupItem>
        <ListGroupItem variant="dark">Dark list group item</ListGroupItem>
    </ListGroup>
    <Highlight code='<ListGroup>
    <ListGroupItem>Default list group item</ListGroupItem>
    <ListGroupItem variant="primary">Primary list group item</ListGroupItem>
    <ListGroupItem variant="secondary">Secondary list group item</ListGroupItem>
    <ListGroupItem variant="success">Success list group item</ListGroupItem>
    <ListGroupItem variant="danger">Danger list group item</ListGroupItem>
    <ListGroupItem variant="warning">Warning list group item</ListGroupItem>
    <ListGroupItem variant="info">Info list group item</ListGroupItem>
    <ListGroupItem variant="light">Light list group item</ListGroupItem>
    <ListGroupItem variant="dark">Dark list group item</ListGroupItem>
</ListGroup>'/>
    <h2>Conveying meaning to assistive technologies</h2>
    <p>
        Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive
        technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the
        content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden
        using the .sr-only class.
    </p>

    <h2>With badges</h2>
    <p>
        Add badges to any list group item to show unread counts, activity, and more with the help of some flex utility
        classes.
    </p>
    <ListGroup>
        <ListGroupItem class="d-flex justify-content-between align-items-center">
            Cras justo odio
            <Badge variant="primary" pill>14</Badge>
        </ListGroupItem>

        <ListGroupItem class="d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <Badge variant="primary" pill>2</Badge>
        </ListGroupItem>

        <ListGroupItem class="d-flex justify-content-between align-items-center">
            Morbi leo risus
            <Badge variant="primary" pill>1</Badge>
        </ListGroupItem>
    </ListGroup>
    <Highlight code='<ListGroup>
    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Cras justo odio
        <Badge variant="primary" pill>14</Badge>
    </ListGroupItem>

    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <Badge variant="primary" pill>2</Badge>
    </ListGroupItem>

    <ListGroupItem class="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <Badge variant="primary" pill>1</Badge>
    </ListGroupItem>
</ListGroup>'/>

    <h2>List groups inside cards</h2>
    <p>
        Incorporate list groups into cards. Use the <code>&lt;ListGroup&gt;</code> prop <code>flush</code> prop when
        using cards with <code>no-body</code> to make the sides of the list group flush with the card.
    </p>
    <CardGroup deck>
        <Card header="Card with list group">
            <ListGroup>
                <ListGroupItem href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>

            <p class="card-text mt-2">
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
                mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </p>
        </Card>

        <Card no-body header="Card with flush list group">
            <ListGroup flush>
                <ListGroupItem href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>

            <CardGroup>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
                mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </CardGroup>
        </Card>
    </CardGroup>
    <Highlight code='<CardGroup deck>
    <Card header="Card with list group">
        <ListGroup>
            <ListGroupItem href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
        </ListGroup>

        <p class="card-text mt-2">
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
            consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
            mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
        </p>
    </Card>

    <Card no-body header="Card with flush list group">
        <ListGroup flush>
            <ListGroupItem href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
        </ListGroup>

        <CardGroup>
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
            consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
            mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
        </CardGroup>
    </Card>
</CardGroup>'/>

    <h2>Horizontal list groups</h2>
    <p>
        Set the prop horizontal to true to change the layout of list group items from vertical to horizontal across all
        breakpoints. Alternatively, set horizontal to a responsive breakpoint (sm, md, lg or xl) to make a list group
        horizontal starting at that breakpoint's min-width. Currently horizontal list groups cannot be combined with
        flush list groups.
    </p>
    <p>
        <b>ProTip</b>: Want equal-width list group items when horizontal? Add the class flex-fill to each list group
        item.
    </p>
    <h3>Always horizontal:</h3>
    <ListGroup horizontal>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
    </ListGroup>

    <Highlight code='<ListGroup horizontal>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
</ListGroup>'/>

    <h2>Custom content</h2>
    <p>
        Add nearly any HTML or component within, even for linked list groups like the one below, with the help of
        flexbox utility classes.
    </p>
    <ListGroup>
        <ListGroupItem href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
            </div>

            <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small>Donec id elit non mi porta.</small>
        </ListGroupItem>

        <ListGroupItem href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>

        <ListGroupItem href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Disabled List group item</h5>
                <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>
    </ListGroup>
    <Highlight code='<ListGroup>
    <ListGroupItem href="#" active class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>

        <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>

        <small>Donec id elit non mi porta.</small>
    </ListGroupItem>

    <ListGroupItem href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>

        <small class="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>

    <ListGroupItem href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Disabled List group item</h5>
            <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>

        <small class="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>
</ListGroup>'/>
</template>

<script>
import ListGroup from "../../components/ListGroup.vue";
import ListGroupItem from "../../components/ListGroupItem.vue";
import Highlight from "../../components/Highlight.ts";
import Badge from "../../components/Badge.vue";
import CardGroup from "../../components/CardGroup.vue";
import Card from "../../components/Card.vue";

export default {
    name: "ListGroups",
    components: {Card, CardGroup, Badge, Highlight, ListGroupItem, ListGroup}
}
</script>
