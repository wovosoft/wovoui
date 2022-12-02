<template>
    <Alert variant="success" heading="Well done!" show>
        <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>

    <Alert variant="success" show>
        <template #heading>
            Alert Heading with slots
        </template>
        <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>
</template>

<script lang="ts" setup>

import {Alert} from "../../";
</script>
