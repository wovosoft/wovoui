<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts" setup>
import DropdownHeader from "./DropdownHeader.vue";
import {makeString, makeTag} from "../../composables/useProps";

defineProps({
    header: makeString(),
    headerTag: makeTag("h6"),
    headerWrapper: makeTag("li")
});
</script>