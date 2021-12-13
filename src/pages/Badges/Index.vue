<template>
    <h1>Badges</h1>
    <p>
        Documentation and examples for badges, our small count and labeling component.
    </p>
    <Badge :variant="variant">{{variant}}</Badge>
    <hr />
    <Select :options="variants" v-model="variant"/>
    <h2>Examples</h2>
    <p>
        Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of
        v5,
        badges no longer have focus or hover styles for links.
    </p>
    <h2>
        Headings
    </h2>
    <Card>
        <h1>Example heading
            <Badge>New</Badge>
        </h1>
        <h2>Example heading
            <Badge>New</Badge>
        </h2>
        <h3>Example heading
            <Badge>New</Badge>
        </h3>
        <h4>Example heading
            <Badge>New</Badge>
        </h4>
        <h5>Example heading
            <Badge>New</Badge>
        </h5>
        <h6>Example heading
            <Badge>New</Badge>
        </h6>
        <hr/>
        <highlightjs
            language="xml"
            code='<h1>
    Example heading
    <Badge>New</Badge>
</h1>
<h2>Example heading
    <Badge>New</Badge>
</h2>
<h3>Example heading
    <Badge>New</Badge>
</h3>
<h4>Example heading
    <Badge>New</Badge>
</h4>
<h5>Example heading
    <Badge>New</Badge>
</h5>
<h6>Example heading
    <Badge>New</Badge>
</h6>'
        />
    </Card>
    <h2>Buttons</h2>
    <p>
        Badges can be used as part of links or buttons to provide a counter.
    </p>
    <Card class="mb-3">
        <Button variant="primary">
            Notifications
            <Badge>4</Badge>
        </Button>
        <hr/>
        <highlightjs language="xml" code='<Button variant="primary">
    Notifications
    <Badge>4</Badge>
</Button>'/>
    </Card>
    <p>
        Note that depending on how they are used, badges may be confusing for users of screen readers and similar
        assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will
        simply be presented with the content of the badge. Depending on the specific situation, these badges may seem
        like random additional words or numbers at the end of a sentence, link, or button.
    </p>
    <p>
        Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the
        number of notifications), consider including additional context with a visually hidden piece of additional text.
    </p>
    <h2>Contextual variations</h2>
    <p>
        Add any of the following variants via the variant prop to change the appearance of a
        <code>&lt;b-badge&gt;</code>:
        <code v-for="c in variants">{{ c }}, </code>.
        If no variant is specified default will be used.
    </p>
    <Card class="mb-3">
        <div class="child-m-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="light">Light</Badge>
            <Badge variant="dark">Dark</Badge>
        </div>
        <hr/>
        <highlightjs language="xml" code='<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="light">Light</Badge>
<Badge variant="dark">Dark</Badge>'/>
    </Card>

    <h2>Pill badges</h2>
    <p>
        Use the pill prop to make badges more rounded (with a larger border-radius and additional horizontal padding).
    </p>
    <Card class="mb-3">
        <Badge pill variant="primary">Primary</Badge>
        <Badge pill variant="secondary">Secondary</Badge>
        <Badge pill variant="success">Success</Badge>
        <Badge pill variant="danger">Danger</Badge>
        <Badge pill variant="warning">Warning</Badge>
        <Badge pill variant="info">Info</Badge>
        <Badge pill variant="light">Light</Badge>
        <Badge pill variant="dark">Dark</Badge>

        <hr/>

        <highlightjs language="xml" code='<Badge pill variant="primary">Primary</Badge>
<Badge pill variant="secondary">Secondary</Badge>
<Badge pill variant="success">Success</Badge>
<Badge pill variant="danger">Danger</Badge>
<Badge pill variant="warning">Warning</Badge>
<Badge pill variant="info">Info</Badge>
<Badge pill variant="light">Light</Badge>
<Badge pill variant="dark">Dark</Badge>'/>
    </Card>
    <h2>Actionable badges</h2>
    <p>
        Quickly provide actionable badges with hover and focus states by specifying either the href prop (links) or to
        prop (router-links):
    </p>
    <Card>
        <Badge href="#" variant="primary">Primary</Badge>
        <Badge href="#" variant="secondary">Secondary</Badge>
        <Badge href="#" variant="success">Success</Badge>
        <Badge href="#" variant="danger">Danger</Badge>
        <Badge href="#" variant="warning">Warning</Badge>
        <Badge href="#" variant="info">Info</Badge>
        <Badge href="#" variant="light">Light</Badge>
        <Badge href="#" variant="dark">Dark</Badge>

        <hr/>
        <highlightjs language="xml" code='<Badge href="#" variant="primary">Primary</Badge>
<Badge href="#" variant="secondary">Secondary</Badge>
<Badge href="#" variant="success">Success</Badge>
<Badge href="#" variant="danger">Danger</Badge>
<Badge href="#" variant="warning">Warning</Badge>
<Badge href="#" variant="info">Info</Badge>
<Badge href="#" variant="light">Light</Badge>
<Badge href="#" variant="dark">Dark</Badge>'/>
    </Card>

</template>

<script>
import Card from "../../components/Card.vue";
import Badge from "../../components/Badge.vue";
import Button from "../../components/Button.vue";
import Select from "../../components/Select.vue";

export default {
    name: "BadgesIndex",
    components: {Select, Button, Badge, Card},
    data(){
        return{
            variant:'primary',
            variants:['default', 'primary', 'success', 'warning', 'info', 'danger']
        }
    }
}
</script>