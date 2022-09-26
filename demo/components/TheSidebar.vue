<template>
  <ul>
    <li v-for="route in routes.sort()">
        <router-link class="text-decoration-none" :to="{'name':route.name}">
            {{route.name}}
        </router-link>
        <Button :to="{'name':route.name}">
            {{route.name}}
        </Button>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import {routes} from "../routes";
import {Button} from "../../src";
</script>
