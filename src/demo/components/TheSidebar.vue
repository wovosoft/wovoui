<template>
    <div>
        <h5>Components</h5>
        <div class="list-group">
            <router-link v-for="route in theRoutes"
                         active-class="active"
                         class="list-group-item list-group-item-action" :to="{'name':route.text}">
                {{ route.text }}
            </router-link>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {routes} from "../routes";

const theRoutes = routes.sort().map(route => ({
    text: route.name,
    to: route
}));
</script>
