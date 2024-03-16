<script lang="ts" setup>
import {computed, defineComponent, h, PropType} from "vue";
import {TableProps} from "@/components";

const props = withDefaults(defineProps<TableProps>(), {})

const classes = computed(() => [
    "table",
    {
        ["table-" + props.variant]: props.variant,
        "table-striped": props.striped === true,
        "table-striped-columns": props.striped === 'columns',
        "table-hover": props.hover,
        "table-active": props.active,
        "table-bordered": props.bordered,
        ["border-" + props.borderVariant]: !!props.borderVariant,
        "table-borderless": props.borderless,
        "table-sm": props.small,
        ["align-" + props.align]: !!props.align,
        "caption-top": props.captionTop,
    }
]);

const WrapperComponent = defineComponent({
    name: "WrapperComponent",
    props: {
        responsive: [Boolean, String] as PropType<boolean | string>
    },
    setup(props, {slots}) {
        return () => {
            return props.responsive
                ? h("div", {
                    class: {
                        "table-responsive": (props.responsive === true),
                        ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
                    }
                }, slots?.default())
                : slots?.default();
        }
    }
})
</script>

<template>
    <WrapperComponent :responsive="responsive">
        <table :class="classes" v-bind="$attrs">
            <slot name="caption" v-if="$slots.caption">
                <caption>{{ caption }}</caption>
            </slot>
            <slot></slot>
        </table>
    </WrapperComponent>
</template>