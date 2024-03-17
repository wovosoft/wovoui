<template>
    <component
        :is="tag"
        class="input-group"
        :class="{['input-group-' + size]: !!size, 'flex-nowrap': noWrap}"
        role="group">
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

<script lang="ts" setup>
import {InputGroupProps, InputGroupText} from "@/components";

withDefaults(defineProps<InputGroupProps>(), {
    tag: 'div',
});
</script>
<style>
.input-group .form-range.form-control {
    height: auto !important;
}
</style>