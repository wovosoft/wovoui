<template>
    <div>
        <h2>Buttons</h2>
        <p>
            Use <code>Bootstrap's</code> custom <code>Button</code> component for actions in forms, dialogs, and more.
            Includes support for a handful of contextual variations, sizes, states, and more.
        </p>

        <h2>Overview</h2>
        <p>
            <code>&lt;Button&gt;</code> component generates either a native
            <code>&lt;button&gt;</code> element, <code>&lt;a&gt;</code> element, or
            <code>&lt;router-link&gt;</code> component with the styling of a button.
        </p>
        <Card>
            <div class="child-m-2">
                <Button>Button</Button>
                <Button variant="danger">Button</Button>
                <Button variant="success">Button</Button>
                <Button variant="outline-primary">Button</Button>
            </div>
            <hr/>
            <highlightjs language="xml" code='<div>
  <Button>Button</Button>
  <Button variant="danger">Button</Button>
  <Button variant="success">Button</Button>
  <Button variant="outline-primary">Button</Button>
</div>'/>
        </Card>

        <br/>
        <h2>Element type</h2>
        <p>
            The
            <code>&lt;Button&gt;</code> component generally renders a
            <code>&lt;button&gt;</code> element. However, you can also render an <code>&lt;a&gt;</code>
            element by providing an href prop value. You may also generate vue-router
            <code>&lt;router-link&gt;</code> when providing a value for the to prop (vue-router is required).
        </p>
    </div>

    <h2>Type</h2>
    <p>
        You can specify the button's type by setting the prop type to <code>'button'</code>,
        <code> 'submit'</code> or <code>'reset'</code>.
        The default type is <code>'button'</code>.
    </p>
    <p>
        Note the type prop has no effect when either href or to props are set.
    </p>
    <br>
    <h2>Sizing</h2>
    <p>
        Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the
        <code>size</code> prop.
    </p>
    <Card>
        <Row>
            <Col lg="4" class="pb-2">
                <Button size="sm">Small Button</Button>
            </Col>
            <Col lg="4" class="pb-2">
                <Button>Default Button</Button>
            </Col>
            <Col lg="4" class="pb-2">
                <Button size="lg">Large Button</Button>
            </Col>
        </Row>
        <hr/>
        <highlightjs
            language="xml"
            code='<Row>
    <Col lg="4" class="pb-2"><Button size="sm">Small Button</Button></Col>
    <Col lg="4" class="pb-2"><Button>Default Button</Button></Col>
    <Col lg="4" class="pb-2"><Button size="lg">Large Button</Button></Col>
</Row>'
        />

    </Card>


    <h2>Contextual variants</h2>
    <p>Use the variant prop to generate the various Bootstrap contextual button variants.</p>

    <p>By default <code>&lt;Button&gt;</code> will render with the secondary variant.</p>

    <p>The variant prop adds the Bootstrap v5 class .btn-<code>variant</code> on the rendered button.</p>

    <br/>
    <h2>Solid color variants</h2>
    <code v-for="i in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' , 'dark']">
        {{ i }},
    </code>
    <Card>
        <highlightjs language="xml"
                     code='<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
'
        />
        <hr/>
        <div class="child-m-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
        </div>
    </Card>


    <h2>Outline color variants</h2>
    Use Property <code>outline</code> to apply outlined color variants
    <code v-for="i in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' , 'dark']">
        {{ [i, 'outline'].join("-") }},
    </code>
    <Card>
        <highlightjs language="xml" code='<Button outline variant="primary">Primary</Button>
<Button outline variant="secondary">Secondary</Button>
<Button outline variant="success">Success</Button>
<Button outline variant="danger">Danger</Button>
<Button outline variant="warning">Warning</Button>
<Button outline variant="info">Info</Button>
<Button outline variant="light">Light</Button>
<Button outline variant="dark">Dark</Button>'
        />
        <hr/>
        <div class="child-m-2">
            <Button outline variant="primary">Primary</Button>
            <Button outline variant="secondary">Secondary</Button>
            <Button outline variant="success">Success</Button>
            <Button outline variant="danger">Danger</Button>
            <Button outline variant="warning">Warning</Button>
            <Button outline variant="info">Info</Button>
            <Button outline variant="light">Light</Button>
            <Button outline variant="dark">Dark</Button>
        </div>
    </Card>


    <h2>Block level buttons</h2>
    <Card>
        <highlightjs language="xml" code='<Button block variant="primary">Block Level Button</Button>'/>
        <hr/>
        <Button block variant="primary">Block Level Button</Button>
    </Card>
    <h2>Pill style</h2>
    <p>
        Prefer buttons with a more rounded-pill style? Just set the prop pill to <code>true</code>.
    </p>
    <Card>
        <highlightjs language="xml" code='<Button pill>Button</Button>
<Button pill variant="primary">Button</Button>
<Button pill variant="outline-secondary">Button</Button>
<Button pill variant="success">Button</Button>
<Button pill variant="outline-danger">Button</Button>
<Button pill variant="info">Button</Button>'/>
        <hr/>
        <div class="child-m-2">
            <Button pill>Button</Button>
            <Button pill variant="primary">Button</Button>
            <Button pill variant="outline-secondary">Button</Button>
            <Button pill variant="success">Button</Button>
            <Button pill variant="outline-danger">Button</Button>
            <Button pill variant="info">Button</Button>
        </div>
    </Card>


    <h2>Squared style</h2>
    <p>
        Prefer buttons with a more square corner style? Just set the prop squared to <code>true</code>.
    </p>
    <Card>
        <highlightjs language="xml" code='<Button squared>Button</Button>
<Button squared variant="primary">Button</Button>
<Button squared variant="outline-secondary">Button</Button>
<Button squared variant="success">Button</Button>
<Button squared variant="outline-danger">Button</Button>
<Button squared variant="info">Button</Button>'/>
        <hr/>
        <div class="child-m-2">
            <Button squared>Button</Button>
            <Button squared variant="primary">Button</Button>
            <Button squared variant="outline-secondary">Button</Button>
            <Button squared variant="success">Button</Button>
            <Button squared variant="outline-danger">Button</Button>
            <Button squared variant="info">Button</Button>
        </div>
    </Card>

    <h2>Disabled state</h2>
    <p>
        Set the <code>disabled</code> prop to <code>disable</code> button default functionality. disabled also works
        with
        buttons rendered as<code>&lt;a&gt;</code> elements and <code>&lt;router-link&gt;</code> (i.e. with the href or
        to
        prop set).
    </p>
    <Card>
        <highlightjs language="xml" code='<Button disabled size="lg" variant="primary">Disabled</Button>
<Button disabled size="lg">Also Disabled</Button>'/>
        <hr/>
        <div class="child-m-2">
            <Button disabled size="lg" variant="primary">Disabled</Button>
            <Button disabled size="lg">Also Disabled</Button>
        </div>
    </Card>

    <h2>Pressed state and toggling</h2>
    <p>
        Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the prop pressed is
        set to true.
    </p>

    <p>
        The pressed prop can be set to one of three values:
    </p>

    <ul>
        <li><code>true</code>: Sets the .active class and adds the attribute <code>aria-pressed="true"</code>.</li>
        <li><code>false</code>: Clears the .active class and adds the attribute <code>aria-pressed="false"</code>.</li>
        <li><code>null</code>: (default) Neither the class .active nor the attribute <code>aria-pressed</code> will be
            set.
        </li>
    </ul>


    <h2>Component reference</h2>
    <table class="table table-bordered table-sm table-hover">
        <thead class="bg-dark text-light">
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in componentReference.items">
            <td><code>{{ row[0] }}</code></td>
            <td><code>{{ row[1] }}</code></td>
            <td>{{ row[2] }}</td>
            <td v-html=" row[3]"></td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>
import Card from "../../components/Card.vue";
import Button from "../../components/Button.vue";
import Row from "../../components/Row.vue";
import Col from "../../components/Col.vue";
</script>
<script>

import {defineComponent} from "vue";

export default defineComponent({
    data() {
        return {
            componentReference: {
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
        }
    }

})
</script>
<style>
.child-m-2 > * {
    margin: 2px;
}

h2 {
    margin-top: 10px;
}
</style>
