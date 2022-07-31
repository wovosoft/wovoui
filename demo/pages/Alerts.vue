<template>
    <Container class="mt-3">
        <h3>Default Alert</h3>
        <Button class="mb-2" @click="a1=!a1">Toggle Alert-1 with prop show</Button>
        <Alert v-model:show="a1">Default Alert</Alert>

        <h3>Alert Variants</h3>
        <Alert v-for="color in colors" :variant="color" show>{{ color }}</Alert>

        <h3>Alert Icon</h3>
        <Alert show icon="yelp">Icon</Alert>

        <h3>Dismissible Alert</h3>
        <Alert show dismissible :countdown="100">Icon</Alert>
    </Container>
</template>

<script lang="ts" setup>
import Alert from "../../src/components/Alert";
import Container from "../../src/components/Container";
import {ref} from "vue";
import Button from "../../src/components/Button";
import {colors} from "../assets";

const a1 = ref<boolean>(true);

</script>
