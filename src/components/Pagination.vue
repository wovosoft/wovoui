<template>
    <component :is="tag" :class="classes">
        <slot v-if="$slots.default"></slot>
        <template v-else>

        </template>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Pagination",
    props: {
        tag: {type: String as PropType<'ul' | 'div' | string>, default: 'ul'},
        modelValue: {type: Number, default: 1},

        totalRows: {type: Number, default: 0},
        perPage: {type: Number, default: 15},

        currentPage: {type: Number, default: 1},
        size: {type: String as PropType<'lg' | 'sm' | null>, default: null},
        align: {type: String as PropType<'center' | 'end' | 'right' | null>, default: null},

        firstColCount: {type: Number, default: 3},
        centerColCount: {type: Number, default: 3},
        lastColCount: {type: Number, default: 3},
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "pagination", {
                    ["pagination-" + props.size]: props.size,
                    ["justify-content-" + ((props.align === 'end' || props.align === 'right') ? 'end' : props.align)]: props.align
                }
            ]),
            count: computed(() => {
                if (Number(props.perPage)) {
                    return Math.ceil(Number(props.totalRows) / Number(props.perPage))
                }
            })
        }
    }
})
</script>