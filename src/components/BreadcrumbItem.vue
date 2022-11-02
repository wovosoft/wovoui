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

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, PropType} from "vue";
import {makeBoolean, makeProp, makeString, makeTag} from "../composables/useProps";

export default defineComponent({
    name: "BreadcrumbItem",
    props: {
        tag: makeTag("li"),
        active: makeBoolean(false),
        activeClass: makeString("active"),
        append: makeBoolean(false),
        ariaCurrent: makeString("location"),
        disabled: makeBoolean(false),
        exact: makeBoolean(false),
        rel: {type: String as PropType<string>, default: null},
        replace: makeBoolean(false),
        target: makeString("_self"),
        to: makeProp<object | string>(null, [Object, String]),
        href: makeString("#")
    },
    setup(props, context) {
        const attributes = computed(() => {
            return {
                ariaCurrent: props.ariaCurrent
            }
        });
        return {
            attributes,
            classes: computed(() => [
                "breadcrumb-item",
                {
                    "active": props.active
                }
            ]),
            isRouterInstalled: computed(() => !!getCurrentInstance().appContext.config.globalProperties.$router)
        }
    }
})
</script>