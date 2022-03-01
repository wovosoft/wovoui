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
import {computed, defineComponent} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";
import InputGroupText from "./InputGroupText.vue";

export default defineComponent({
    components: {InputGroupText},
    props: {
        tag: makeString("div"),
        size: makeString(),
        prepend: makeString(null),
        append: makeString(null),
        noWrap: makeBoolean(false)
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