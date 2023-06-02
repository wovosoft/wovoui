<template>
    <PanelMenu v-model="active" :items="items" class="w-25" @itemClicked="handler">

    </PanelMenu>
    Active : {{ active }}
</template>

<script lang="ts" setup>
import {PanelMenu} from '@/'
import {ref} from "vue";

const active = ref(3);

function handler(item, index) {
    console.log(item, index)
}

const items = [
    {
        text: "Home",
        href: "#",
    },
    {
        text: "Components",
        children: [
            {
                text: "Badges",
                to: {name: 'Badges'}
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
