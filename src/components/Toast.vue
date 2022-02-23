<template>
    <div :class="classes" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header" v-if="$slots.header || header">
            <slot name="header">
                {{ header }}
            </slot>
            <ButtonClose/>
        </div>
        <div class="toast-body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import ButtonClose from "./ButtonClose.vue";

export default defineComponent({
    name: "Toast",
    components: {ButtonClose},
    props: {
        show: {type: Boolean as PropType<true | false>, default: false},
        header: {type: String, default: null}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "toast",
                {
                    show: props.show
                }
            ])
        }
    }
})
</script>