<script lang="ts" setup>
import {type FlexItemProps, ResponsiveOrders} from "./index";

const props = withDefaults(defineProps<FlexItemProps>(), {
    tag: 'div'
});

function getFilledClasses(): string[] {
    if (typeof props.fill === "boolean" && props.fill) {
        return ["flex-fill"];
    }

    if (typeof props.fill === "string") {
        return ["flex-" + props.fill + '-fill'];
    }

    if (Array.isArray(props.fill)) {
        return props.fill.map(fillOn => ["flex", fillOn, "fill"].join('-'));
    }

    return [];
}

function getResizingClasses(type: 'grow' | 'shrink' | 'fill'): string | string[] {
    if (!['grow', 'shrink'].includes(type)) {
        return [];
    }
    const resizesOn = type === 'grow' ? props.growOn : props.shrinkOn;

    if (props[type] !== null && !resizesOn) {
        return ["flex", type, Number(props.grow)].join('-');
    }

    if (props[type] !== null && resizesOn && Array.isArray(resizesOn)) {
        return resizesOn.map(ron => ["flex", type, ron, Number(props.grow)].join("-"));
    }
    return [];
}

function getOrderClasses() {
    return ResponsiveOrders
        .map((s: typeof ResponsiveOrders[number]): string | null => {
            if (props?.[s] !== null) {
                return s.replace(/[A-Z]/g, m => "-" + m.toLowerCase()) + '-' + props[s];
            }
            return null;
        })
        ?.filter(i => !!i);
}
</script>

<template>
    <component :is="tag"
               :class="[
                    getFilledClasses(),
                    getResizingClasses('grow'),
                    getResizingClasses('shrink'),
                    getOrderClasses()
                ]">
        <slot></slot>
    </component>
</template>