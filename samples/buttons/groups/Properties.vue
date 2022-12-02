<template>
    <DataTable :items="componentReference" :fields="['property','type','default','description']"/>
</template>

<script lang="ts" setup>
import {DataTable} from "../../../src";

const componentReference = [
    {
        property: 'aria-role',
        type: 'String',
        default: "'group'",
        description: 'Sets the ARIA attribute `role` to a specific value',
    },
    {
        property: 'size',
        type: 'String',
        default: '',
        description: 'Set the size of the component\'s appearance. \'sm\', \'md\' (default), or \'lg\'',
    },
    {
        property: 'tag',
        type: 'String',
        default: '\'div\'',
        description: 'Specify the HTML tag to render instead of the default tag',
    },
    {
        property: 'vertical',
        type: 'Boolean',
        default: 'false',
        description: 'When set, rendered the button group in vertical mode',
    },
]
</script>