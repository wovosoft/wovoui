<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {ref, defineComponent} from "vue";

export default defineComponent({
    name: "CardTitle",
    props: {
        title: makeString(),
        tag: makeString("h4")
    },
    setup(props) {
        let classes = ref([]);
        classes.value = [
            "card-title"
        ];
        return {
            classes
        }
    }
})
</script>
