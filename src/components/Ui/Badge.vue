<script lang="ts" setup>
import {reactive} from "vue";
import type {BadgeProps} from "@/index";

const props = withDefaults(defineProps<BadgeProps>(), {
    tag: "span",
    pill: false,
})

const attributes = reactive<{ href: string | null, target: string | null }>({
    href: null,
    target: null
});

if (props.href) {
    attributes.href = props.href;
    attributes.target = "_self";
}

const getVariant = () => {
    if (props.bgVariant || props.textVariant) {
        return {
            ['bg-' + props.bgVariant]: !!props.bgVariant,
            ['text-' + props.textVariant]: !!props.textVariant,
        }
    }

    /**
     * Added in BS 5.2.0
     * @link https://getbootstrap.com/docs/5.2/components/badge/#background-colors
     */
    return {
        ['text-bg-' + props.variant]: !!props.variant
    }
}
</script>

<template>
    <component :is="tag" v-bind="{
                ...attributes,
                class: [
                    'badge',
                    getVariant(),
                    {
                        'rounded-pill': pill,
                        'text-decoration-none': href,
                        'position-absolute translate-middle': position,
                        'start-100 top-0': position === 'top-right',
                        'start-0 top-0': position === 'top-left',
                        'start-0 top-100': position === 'bottom-left',
                        'start-100 top-100': position === 'bottom-right',
                    }
                    ]}">
        <slot></slot>
    </component>
</template>