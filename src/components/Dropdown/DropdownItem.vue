<template>
    <component :is="tag" role="presentation">
        <slot v-if="noItemTag" class="dropdown-item"></slot>
        <component :is="itemTag" class="dropdown-item" v-else-if="itemTag">
            <slot></slot>
        </component>
        <p class="dropdown-item-text" v-else-if="isText">
            <slot></slot>
        </p>
        <template v-else-if="isVueRouterInstalled && to">
            <component is="router-link" :to="to" :class="classes">
                <slot></slot>
            </component>
        </template>

        <a v-else :class="classes" :href="href">
            <slot></slot>
        </a>
    </component>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance} from "vue";
import {RouteRecordRaw} from "vue-router";
import {makeBoolean, makeProp, makeString, makeTag} from "../../composables/useProps";

const isVueRouterInstalled = computed(() => {
    return !!getCurrentInstance().appContext.config.globalProperties.$router;
});

const props = defineProps({
    tag: makeTag("li"),
    href: makeString("#"),
    to: makeProp<RouteRecordRaw>(null, Object),
    noItemTag: makeBoolean(false),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    isText: makeBoolean(false),
    itemTag: makeTag(null)
})

const classes = computed(() => ['dropdown-item', {'active': props.active, 'disabled': props.disabled}]);
</script>