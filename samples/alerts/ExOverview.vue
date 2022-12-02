<template>
    <Alert v-for="v in ['primary','secondary','success','danger','info','light','dark']"
           :variant="v" show :timeout="0">
        A simple {{ v }} alert—check it out!
    </Alert>
</template>

<script lang="ts" setup>
import {Alert} from "../../src";
</script>
