<template>
    <Breadcrumb :items="items"></Breadcrumb>
</template>

<script lang="ts" setup>
import {Breadcrumb} from "../../src";

const items = [
    {
        text: 'Home',
        href: 'https://google.com'
    },
    {
        text: 'Posts',
        to: {name: 'home'}
    },
    {
        text: 'Another Story',
        active: true
    }
];
</script>
