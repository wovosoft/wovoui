<template>
    <ButtonGroup aria-label="Basic checkbox toggle button group">
        <Checkbox button v-for="x in 5">Checkbox {{ x }}</Checkbox>
    </ButtonGroup>
</template>

<script lang="ts" setup>
import {ButtonGroup, Checkbox} from "../../../src";
</script>