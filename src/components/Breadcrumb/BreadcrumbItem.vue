<template>
    <component :is="tag" :class="classes" v-bind="attributes">
        <template v-if="href">
            <a :href="href">
                <slot></slot>
            </a>
        </template>
        <template v-else-if="isRouterInstalled && to">
            <router-link :to="to">
                <slot></slot>
            </router-link>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </component>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance} from "vue";
import {makeBoolean, makeProp, makeString, makeTag} from "@/composables/useProps";

const props = defineProps({
    tag: makeTag("li"),
    active: makeBoolean(false),
    activeClass: makeString("active"),
    append: makeBoolean(false),
    ariaCurrent: makeString("location"),
    disabled: makeBoolean(false),
    exact: makeBoolean(false),
    rel: makeString(),
    replace: makeBoolean(false),
    target: makeString("_self"),
    to: makeProp<object | string>(null, [Object, String]),
    href: makeString("#")
});

const attributes = computed(() => {
    return {
        ariaCurrent: props.ariaCurrent
    }
});
const isRouterInstalled = computed(() => !!getCurrentInstance()?.appContext.config.globalProperties.$router);
const classes = computed(() => [
    "breadcrumb-item",
    {
        "active": props.active
    }
]);
</script>