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
import {computed, getCurrentInstance, PropType} from "vue";
import {RouteRecordRaw} from "vue-router";

const isVueRouterInstalled = computed(() => {
    return !!getCurrentInstance().appContext.config.globalProperties.$router;
});

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
    href: {type: String as PropType<string>, default: "#"},
    to: {type: Object as PropType<RouteRecordRaw>, default: null},
    noItemTag: {type: Boolean as PropType<boolean>, default: false},
    active: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
    isText: {type: Boolean as PropType<boolean>, default: false},
    itemTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: null}
})

const classes = computed(() => ['dropdown-item', {'active': props.active, 'disabled': props.disabled}]);
</script>