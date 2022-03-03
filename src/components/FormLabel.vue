<template>
    <label :class="classes">
        <slot></slot>
    </label>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";

export default defineComponent({
    name: "FormLabel",
    props: {
        horizontal: {type: Boolean as PropType<boolean>, default: false},
        sm: {type: Number as PropType<number>, default: null},
        md: {type: Number as PropType<number>, default: null},
        lg: {type: Number as PropType<number>, default: null},
        xl: {type: Number as PropType<number>, default: null},
    },
    setup(props) {
        return {
            classes: computed(() => ({
                "form-label": !props.horizontal,
                "col-form-label": props.horizontal,
                ["col-sm-" + props.sm]: props.horizontal && props.sm,
                ["col-md-" + props.md]: props.horizontal && props.md,
                ["col-lg-" + props.lg]: props.horizontal && props.lg,
                ["col-xl-" + props.xl]: props.horizontal && props.xl,
            }))
        }
    }
})
</script>