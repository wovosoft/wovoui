<template>
    <div class="mt-5">
        <DataTable
            bordered
            :fields="fields"
            :items="TypedUsers">
            <template #cell(name)="row">
                {{ row.item.name }}
            </template>
        </DataTable>
    </div>
</template>

<script lang="ts" setup>
import {DataTable} from "@/components/Table";

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
