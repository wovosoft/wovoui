<template>
    <component :is="tag">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import {responsiveSizes} from "../types/responsiveLayoutSizes";
import {Order} from "../types";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    fill: {
        type: [Boolean, Array, String] as PropType<boolean | responsiveSizes | responsiveSizes[]>,
        default: false
    },
    grow: {
        type: [Number, Array] as PropType<1 | 0>,
        default: null
    },
    growOn: {
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    shrink: {
        type: [Number, Array] as PropType<1 | 0>,
        default: null
    },
    shrinkOn: {
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    order: {type: [String, Number] as PropType<Order>, default: null},
    orderSm: {type: [String, Number] as PropType<Order>, default: null},
    orderMd: {type: [String, Number] as PropType<Order>, default: null},
    orderLg: {type: [String, Number] as PropType<Order>, default: null},
    orderXl: {type: [String, Number] as PropType<Order>, default: null},
    orderXxl: {type: [String, Number] as PropType<Order>, default: null},
});

const classes = computed(() => {
    function getFilledClasses(): string[] {
        if (typeof props.fill === "boolean" && props.fill) {
            return ["flex-fill"];
        }

        if (Array.isArray(props.fill)) {
            return props.fill.map(fillOn => ["flex", fillOn, "fill"].join('-'));
        }

        if (typeof props.fill === "string") {
            return ["flex-" + props.fill + '-fill'];
        }

        return [];
    }

    function getGrowClasses(): string[] {
        if ((props.grow === 1 || props.grow === 0) && !props.growOn) {
            return ["flex-grow-" + props.grow];
        }

        if ((props.grow === 1 || props.grow === 0) && props.growOn && Array.isArray(props.growOn)) {
            return props.growOn.map(gon => ["flex-grow", gon, props.grow].join("-"));
        }
        return [];
    }

    function getShrinkClasses(): string[] {
        if ((props.shrink === 1 || props.shrink === 0) && !props.shrinkOn) {
            return ["flex-shrink-" + props.shrink];
        }

        if ((props.shrink === 1 || props.shrink === 0) && props.shrinkOn && Array.isArray(props.shrinkOn)) {
            return props.shrinkOn.map(son => ["flex-shrink", son, props.shrink].join("-"));
        }
        return [];
    }

    function getOrderClasses() {
        return ['order', 'orderSm', 'orderMd', 'orderLg', 'orderXl', 'orderXxl']
            .map((s) => {
                if (props[s] !== null) {
                    return s.replace(/[A-Z]/g, m => "-" + m.toLowerCase()) + '-' + props[s];
                }
                return null;
            });
    }

    return [
        getFilledClasses(),
        getGrowClasses(),
        getShrinkClasses(),
        getOrderClasses()
    ];
});
</script>
