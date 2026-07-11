<template>
    <component :is="tag" class="card-title">
        <slot>
            {{ content }}
        </slot>
    </component>
</template>


<script lang="ts" setup>
import {type CardTitlePropsInterface} from "@/components";

withDefaults(defineProps<CardTitlePropsInterface>(), {
    content: "",
    tag: "h4"
});
</script>