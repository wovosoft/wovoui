<template>
    <h2>Breadcrumb without items</h2>
    <Breadcrumb>
        <BreadcrumbItem>Hello</BreadcrumbItem>
        <BreadcrumbItem>One</BreadcrumbItem>
        <BreadcrumbItem>Two</BreadcrumbItem>
        <BreadcrumbItem>Three</BreadcrumbItem>
    </Breadcrumb>
    <h2>Breadcrumb with items</h2>
    <Breadcrumb :items="items"/>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import BreadcrumbItem from "../components/BreadcrumbItem.vue";

export default {
    name: "DemoBreadcrumb",
    components: {BreadcrumbItem, Breadcrumb},
    setup(props) {
        const items = [
            {
                text: 'Home',
                href: 'https://google.com'
            },
            {
                text: 'Posts',
                href: 'https://google.com'
            },
            {
                text: 'Another Story',
                active: true
            }
        ];
        return {
            items
        }
    }
}
</script>