<script lang="ts" setup>
import {resolveComponent} from "vue";
import {ListGroupItemProps} from "@/components";

const props = withDefaults(defineProps<ListGroupItemProps>(), {
    tag: 'li',
});

const getTag = () => {
    if (props.to) {
        return resolveComponent("router-link");
    }
    if (props.href) {
        return "a";
    }
    if (props.button) {
        return "button";
    }
    return props.tag;
};
</script>

<template>
    <component
        :is="getTag()"
        :aria-disabled="disabled"
        :href="href"
        :to="to"
        class="list-group-item"
        :class="{
            'active': active,
            'disabled': disabled,
            'list-group-item-action': button || getTag() === 'a',
            ['list-group-item-' + variant]: !!variant
        }"
        :aria-current="active">
        <slot></slot>
    </component>
</template>