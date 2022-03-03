<template>
    <template v-if="to">
        <router-link :to="to" :class="classes" v-bind="linkAttributes">
            <slot></slot>
        </router-link>
    </template>
    <component v-else :is="tag" :class="classes" v-bind="linkAttributes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "NavLink",
    props: {
        ariaCurrent: {type: String as PropType<string>, default: null},
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        href: {type: String as PropType<string>, default: null},
        target: {type: String as PropType<string>, default: "_self"},
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        to: {type: Object as PropType<object>, default: null}
    },
    setup(props) {
        const classes = computed(() => {
            return ;
        });
        const linkAttributes = computed(() => {
            return {
                href: props.tag === "a" ? props.href : null,
                ariaCurrent: props.ariaCurrent,
                target: (props.target === "a" || props.href) ? props.target : null
            }
        })
        return {
            classes,
            linkAttributes
        }
    }
})
</script>