<script setup lang="ts">

import {Accordion, Alert, Collapse} from "@";
import {useTemplateRef} from "vue";

const test = useTemplateRef<InstanceType<typeof Accordion>>('test');

test.value.toggleAll()
</script>

<template>
    <Alert variant="light"></Alert>
</template>