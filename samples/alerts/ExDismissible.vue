<template>
    <ButtonGroup class="mb-3">
        <Button @click="showAll" variant="primary">Show All</Button>
        <Button @click="closeAll" variant="dark">Close All</Button>
    </ButtonGroup>
    <Alert v-for="v in colors"
           :variant="v" dismissible show :ref="'dismissible-'+v" :timeout="0">
        A simple {{ v }} alert—check it out!
    </Alert>
</template>

<script lang="ts" setup>
import {Alert, Button, ButtonGroup} from "../../src";

const colors = ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark'];

function showAll() {

}

function closeAll() {

}
</script>
