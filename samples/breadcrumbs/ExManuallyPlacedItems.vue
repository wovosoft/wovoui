<template>
    <Breadcrumb>
        <BreadcrumbItem href="#home">
            <Icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></Icon>
            Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#foo">Foo</BreadcrumbItem>
        <BreadcrumbItem href="#bar">Bar</BreadcrumbItem>
        <BreadcrumbItem active>Baz</BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts" setup>
import {Breadcrumb, BreadcrumbItem} from "../../src";
</script>
