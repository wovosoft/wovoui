<template>
    <Container>
        <NativeCollapse
            summary="Hello Native Summery"
            details="Hello Native Details"
        />

        <Button class="mt-5" @click="isDialogShown=true">
            Toggle Native Dialog
        </Button>

        <NativeDialog v-model="isDialogShown" header="Header">
            Native Dialog Content
        </NativeDialog>
        <h1>Native Progress</h1>
        <NativeProgress class="w-100" :max="100" :value="45"/>
    </Container>
</template>

<script lang="ts" setup>
import {Button, Container, NativeCollapse} from "@/index.js";
import NativeDialog from "@/components/Native/NativeDialog.vue";
import {ref} from "vue";
import NativeProgress from "@/components/Native/NativeProgress.vue";

const isDialogShown = ref<boolean>(false);
</script>
