<script setup lang="ts">

import {Container} from "@/index.ts";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
</script>

<template>
    <Container>
        <h4>Defaults</h4>
        <Breadcrumb>
            <BreadcrumbItem>HRM</BreadcrumbItem>
            <BreadcrumbItem>Person</BreadcrumbItem>
            <BreadcrumbItem>Salaries</BreadcrumbItem>
        </Breadcrumb>

        <h4 class="mt-5">Custom Divider</h4>
        <Breadcrumb divider=">">
            <BreadcrumbItem>HRM</BreadcrumbItem>
            <BreadcrumbItem>Person</BreadcrumbItem>
            <BreadcrumbItem>Salaries</BreadcrumbItem>
        </Breadcrumb>
    </Container>
</template>
