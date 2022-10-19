<template>
    <div>
        <h3>Default</h3>
        <Input v-model="model" placeholder="Default Input"/>

        <h3 class="mt-3">Small</h3>
        <Input v-model="model" size="sm" placeholder="Default Input"/>

        <h3 class="mt-3">Large</h3>
        <Input v-model="model" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">Valid State</h3>
        <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">Invalid State State</h3>
        <Input v-model="model" :state="false" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">valid State State</h3>
        <FormGroup>
            <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>
            <Feedback>Valid Feedback</Feedback>
            <Feedback type="invalid">Invalid Feedback</Feedback>
        </FormGroup>

        <h3 class="mt-3">Feed Messages</h3>
        <FormGroup valid-feedback="Valid Feedback">
            <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>
        </FormGroup>

        <div class="mt-3">{{ model }}</div>

    </div>
</template>

<script lang="ts" setup>

import {Input} from "../../src";
import {ref} from "vue";
import FormGroup from "../../src/components/FormGroup.vue";
import Feedback from "../../src/components/Feedback.vue";

const model = ref();
</script>
