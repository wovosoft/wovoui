<template>
    <component :is="tag" :class="classes" role="group">
        <slot name="prepend" v-if="$slots.prepend || prepend">
            <InputGroupText v-if="prepend">
                {{ prepend }}
            </InputGroupText>
        </slot>
        <slot></slot>
        <slot name="append" v-if="$slots.append || append">
            <InputGroupText v-if="append">
                {{ append }}
            </InputGroupText>
        </slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import InputGroupText from "./InputGroupText.vue";

export default defineComponent({
    components: {InputGroupText},
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        size: {type: String as PropType<string>, default: null},
        prepend: {type: String as PropType<string>, default: null},
        append: {type: String as PropType<string>, default: null},
        noWrap: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => [
                "input-group",
                {
                    ["input-group-" + props.size]: !!props.size,
                    "flex-nowrap": props.noWrap
                }
            ])
        }
    }
})
</script>
<style>
.input-group .form-range.form-control {
    height: auto !important;
}
</style>