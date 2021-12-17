<template>
    <h1>Dropdown</h1>
    <p>
        Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu
        format.
    </p>
    <div class="border p-1">
        <Dropdown text="Dropdown Button" class="m-md-2">
            <DropdownItem>First Action</DropdownItem>
            <DropdownItem>Second Action</DropdownItem>
            <DropdownItem>Third Action</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem active>Active action</DropdownItem>
            <DropdownItem disabled>Disabled action</DropdownItem>
        </Dropdown>
    </div>
    <Highlight code='<Dropdown text="Dropdown Button" class="m-md-2">
    <DropdownItem>First Action</DropdownItem>
    <DropdownItem>Second Action</DropdownItem>
    <DropdownItem>Third Action</DropdownItem>
    <DropdownDivider></DropdownDivider>
    <DropdownItem active>Active action</DropdownItem>
    <DropdownItem disabled>Disabled action</DropdownItem>
</Dropdown>'/>

    <h2>Button content</h2>
    <p>
        You can customize the text of the dropdown button by using either the <code>text</code> prop (shown in previous
        examples), or use the <code>button-content</code> slot instead of the text prop. The <code>button-content</code>
        slot allows you to use basic HTML and icons in the button content.
    </p>

    <p>
        If both the prop text and slot button-content are present, the slot button-content will take precedence.
    </p>
    <div>
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
    </div>
    <Highlight code='<div>
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
</div>'/>

    <h2>Positioning / Direction</h2>
    <p>
        Dropdown supports various positioning such as left and right aligned, dropdown and dropup, and supports
        auto-flipping (dropdown to dropup, and vice-versa) when the menu would overflow off of the visible screen area.
    </p>

    <h2>Menu alignment</h2>
    <p>
        The dropdown menu can either be left aligned (default) or right aligned with respect to the button above it. To
        have the dropdown aligned on the right, set the <code>dir="right"</code> prop.
    </p>
    <div>
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
    </div>
    <Highlight code='<div>
    <Dropdown text="Left align" variant="primary" class="m-2">
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
    </Dropdown>

    <Dropdown dir="right" text="Right align" variant="primary" class="m-2">
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
    </Dropdown>
</div>'/>

    <h2>Dropup</h2>
    <p>
        Turn your dropdown menu into a drop-up menu by setting the <code>dir="top"</code> prop.
    </p>
    <div>
        <Dropdown id="dropdown-dropup" dropup text="Drop-Up" dir="top" variant="primary" class="m-2">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
    </div>
    <Highlight code='<div>
    <Dropdown id="dropdown-dropup" dropup text="Drop-Up" dir="top" variant="primary" class="m-2">
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
    </Dropdown>
</div>'/>

    <h2>Sizing</h2>
    <p>Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons.</p>
    <p>
        Set the <code>size</code> prop to either <code>sm</code> for small button(s), or <code>lg</code> for large
        button(s).
    </p>

    <div>
        <div>
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
        </div>
        <div>
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
        </div>
    </div>

    <Highlight code='<div>
    <div>
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
    </div>
    <div>
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
    </div>
</div>'/>

    <h2>Dropdown color variants</h2>
    <p>
        The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by setting the
        prop variant to <code>success</code>, <code>primary</code>,
        <code>info</code>, <code>danger</code>,
        <code>link</code>, <code>outline-dark</code>, etc. (or custom variants, if defined). The
        default variant is <code>secondary</code>.
    </p>
    <div>
        <Dropdown text="Primary" variant="primary" class="m-2">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>

        <Dropdown text="Success" variant="success" class="m-2">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>

        <Dropdown text="Outline Danger" variant="outline-danger" class="m-2">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
    </div>

    <p>
        You can also apply arbitrary classes to the toggle button via the
        <code>toggle-class</code> prop. This prop accepts either a
        string or array of strings.
    </p>
    <div>
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
    </div>

    <h2>Block level dropdowns</h2>
    <p>
        By default dropdowns act like buttons and are displayed inline. To create block level dropdowns (that span to
        the full width of a parent) set the <code>block</code> prop. Both, regular and split button dropdowns are
        supported.
    </p>
    <div>
        <Dropdown text="Block Level Dropdown" block variant="primary" class="m-2">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
    </div>

    <Highlight code='<div>
    <Dropdown text="Block Level Dropdown" block variant="primary" class="m-2">
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
    </Dropdown>
</div>'/>


    <p>
        If you want the dropdown menu to span to the full width of the parent container too, add the <code>w-100</code>
        utility class to the <code>menu-class</code> prop.
    </p>
    <div>
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
    </div>
    <Highlight code='<div>
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
</div>'/>
</template>

<script>
import Dropdown from "../../components/Dropdown.vue";
import DropdownItem from "../../components/DropdownItem.vue";
import DropdownDivider from "../../components/DropdownDivider.vue";
import Highlight from "../../components/Highlight.ts";
import DropdownButton from "../../components/DropdownButton.vue";

export default {
    name: "DropdownIndex",
    components: {DropdownButton, Highlight, DropdownDivider, DropdownItem, Dropdown}
}
</script>