<template>
    <component :is="tag" class="toast-body">
        <slot/>
    </component>
</template>
<script lang="ts" setup>
import {makeTag} from "../../composables/useProps";

defineProps({
    tag: makeTag("div")
});

</script>