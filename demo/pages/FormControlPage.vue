<template>
    <div>
        <h3>Default</h3>
        <Input v-model="model" placeholder="Default Input"/>

        <h3 class="mt-3">Small</h3>
        <Input v-model="model" size="sm" placeholder="Default Input"/>

        <h3 class="mt-3">Large</h3>
        <Input v-model="model" size="lg" placeholder="Default Input"/>

        <div class="mt-3">{{ model }}</div>
    </div>
</template>

<script lang="ts" setup>

import {Input} from "../../src";
import {ref} from "vue";

const model = ref();
</script>
