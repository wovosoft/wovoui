<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import {responsiveSizes} from "../../types";
import {Order} from "../../types";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    fill: {
        type: [Boolean, Array, String] as PropType<boolean | responsiveSizes | responsiveSizes[]>,
        default: false
    },
    grow: {
        type: Boolean as PropType<boolean>,
        default: null
    },
    growOn: {
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    shrink: {
        type: Boolean as PropType<boolean>,
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

const classes = computed(() => [
    getFilledClasses(),
    getGrowClasses(),
    getShrinkClasses(),
    getOrderClasses()
]);

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
    if (props.grow !== null && !props.growOn) {
        //Number(boolean) converts to number
        return ["flex-grow-" + Number(props.grow)];
    }

    if (props.grow !== null && props.growOn && Array.isArray(props.growOn)) {
        return props.growOn.map(gon => ["flex-grow", gon, Number(props.grow)].join("-"));
    }
    return [];
}

function getShrinkClasses(): string[] {
    if (props.shrink !== null && !props.shrinkOn) {
        return ["flex-shrink-" + Number(props.shrink)];
    }

    if (props.shrink !== null && props.shrinkOn && Array.isArray(props.shrinkOn)) {
        return props.shrinkOn.map(son => ["flex-shrink", son, Number(props.shrink)].join("-"));
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
        })
        ?.filter(i => !!i);
}
</script>
