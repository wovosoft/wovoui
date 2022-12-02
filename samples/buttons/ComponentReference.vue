<template>
    <Table bordered hover striped>
        <THead class="bg-dark text-light">
        <Tr>
            <Th>Property</Th>
            <Th>Type</Th>
            <Th>Default</Th>
            <Th>Description</Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="row in componentReference.items">
            <Td><code>{{ row[0] }}</code></Td>
            <Td><code>{{ row[1] }}</code></Td>
            <Td>{{ row[2] }}</Td>
            <Td v-html=" row[3]"></Td>
        </Tr>
        </TBody>
    </Table>
</template>

<script setup lang="ts">
import {Table, TBody, Tr, Td, Th, THead} from "../../src";

const componentReference = {
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