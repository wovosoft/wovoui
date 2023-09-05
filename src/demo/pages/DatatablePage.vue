<template>
    <div class="mt-5">
        <DataTableNext
            bordered
            :fields="fields"
            :items="TypedUsers">
            <template #cell(name)="{item}">
                {{ item.name }}
            </template>
        </DataTableNext>
    </div>
</template>

<script lang="ts" setup>
import {DataTableNext} from "@/components/Table";

type Item = {
    "name": string
    "phone": string
    "email": string
    "address": string
    "postalZip": string
    "region": string
    "country": string
    "text": string
    "numberrange": number,
    "currency": string
    "date": string
}

import users from "@/demo/assets/data.json?json";

const TypedUsers: Item[] = users;

const fields = [
    {key: "name"},
    {key: "phone"},
    {key: "email"},
    {key: "address"},
    {key: "postalZip"},
    {key: "region"},
    {key: "country"},
    // {key: "text"},
    {key: "numberrange"},
    {key: "currency"},
    {key: "date"},
];
</script>
