<template>
    <Container class="mt-3">
        <h3>Default Alert</h3>
        <Button class="mb-2" @click="a1=!a1">Toggle Alert-1 with prop show</Button>
        <Alert show :timeout="0" dismissible>Default Alert</Alert>


    </Container>
</template>

<script lang="ts" setup>
import Alert from "../../src/components/Alert/Alert";
import Container from "../../src/components/Layout/Container";
import {ref} from "vue";
import Button from "../../src/components/Button/Button";
import {colors} from "../assets";

const a1 = ref<boolean>(true);

</script>
