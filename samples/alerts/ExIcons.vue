<template>
    <Alert v-for="color in colors" :variant="color" heading="Well done!" :icon="Phone" show>
        Alert with Icon
    </Alert>
</template>

<script lang="ts" setup>
import {Alert} from "../../src";
import {colors} from "../../demo/assets";
import {Usb, Phone} from "@wovosoft/wovoui-icons";
</script>