<template>
    <span v-html="iconContent"></span>
</template>

<script>
import {computed} from "vue";

export default {
    name: "BASE_ICON_NAME",
    setup(props) {
        return {
            iconContent:`ICON_CONTENT`
        }
    }
}
</script>