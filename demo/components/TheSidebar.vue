<template>
  <ul>
    <li v-for="route in routes.sort()">
        <router-link :to="{'name':route.name}">{{route.name}}</router-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import {routes} from "../routes";
</script>
