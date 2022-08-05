<template>
    <PanelMenu :items="items" class="w-25">

    </PanelMenu>
</template>

<script lang="ts" setup>
import PanelMenu from "../../src/components/PanelMenu.vue";

const items = [
    {
        text: "Home",
        href: "#"
    },
    {
        text: "Components",
        children: [
            {
                text: "Badges",
                to:{name:'Badges'}
            },
            {
                text: "Top Up",
                href: "#"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                href: "#"
            },
            {
                text: "Top Up",
                href: "#"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                href: "#"
            },
            {
                text: "Top Up",
                href: "#"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                href: "#"
            },
            {
                text: "Top Up",
                href: "#"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                href: "#"
            },
            {
                text: "Top Up",
                href: "#"
            }
        ]
    },
    {
        text: "Bill Payment",
        children: [
            {
                text: "Electricity",
                href: "#"
            },
            {
                text: "Top Up",
                children: [
                    {
                        text: "Electricity",
                        href: "#"
                    },
                    {
                        text: "Top Up",
                        href: "#"
                    }
                ]
            }
        ]
    }
];
</script>
