<template>
    <Container class="pt-3">
        <Progress class="mb-2" :value="50" variant="danger"/>
        <Progress class="mb-2" :value="25"/>
        <Progress class="mb-2" :value="75"/>
        <Progress class="mb-2" :value="60"/>
        <Progress class="mb-2" :value="90"/>
    </Container>
</template>

<script lang="ts" setup>
import {ProgressBar, Progress, Container} from "../../src";
</script>
