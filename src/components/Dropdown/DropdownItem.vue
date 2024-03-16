<template>
    <component :is="tag" role="presentation">
        <slot v-if="noItemTag" v-bind="$attrs" :class="classes"></slot>
        <component :is="itemTag" v-bind="$attrs" :class="classes" v-else-if="itemTag">
            <slot></slot>
        </component>
        <p class="dropdown-item-text" v-else-if="isText">
            <slot></slot>
        </p>
        <a v-else :class="classes" v-bind="$attrs" :href="href">
            <slot></slot>
        </a>
    </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {DropdownItemProps} from "@/components";

const props = withDefaults(defineProps<DropdownItemProps>(), {
    tag: 'li',
    href: '#'
});

const classes = computed(() => ['dropdown-item', {'active': props.active, 'disabled': props.disabled}]);
</script>