<template>
    <Container class="pt-3">
        <Progress class="mb-2" :value="50" variant="danger"/>
        <Progress class="mb-2" :value="25"/>
        <Progress class="mb-2" :value="75"/>
        <Progress class="mb-2" :value="60" animated striped/>
        <Progress class="mb-2">
            <ProgressBar striped animated :value="90">Hi</ProgressBar>
        </Progress>
    </Container>
</template>

<script lang="ts" setup>
import {Container, Progress, ProgressBar} from "@/index";
</script>
