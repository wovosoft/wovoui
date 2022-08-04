<template>
    <PanelMenu :items="items" class="w-25">

    </PanelMenu>
</template>

<script lang="ts" setup>
import PanelMenu from "../../src/components/PanelMenu.vue";

const items = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                url: "/"
            },
            {
                text: "Top Up",
                url: "/"
            }
        ]
    }
];
</script>
