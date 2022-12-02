<template>
    <Badge :variant="v" pill class="m-2"
           v-for="v in ['primary', 'secondary', 'success', 'danger', 'warning' , 'info' , 'light' , 'dark']">
        {{ v }}
    </Badge>
</template>

<script lang="ts" setup>
import {Badge} from "../../src";
</script>
