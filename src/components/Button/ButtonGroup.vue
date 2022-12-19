<template>
    <component :is="tag" :role="role" :aria-label="ariaLabel" :class="classes">
        <slot/>
    </component>
</template>
<script lang="ts" setup>
import {computed} from "vue";
import type {ButtonSizes} from "../../types";
import {makeBoolean, makeSize, makeString, makeTag} from "../../composables/useProps";

const props = defineProps({
    tag: makeTag("div"),
    ariaLabel: makeString("Button Group"),
    size: makeSize<ButtonSizes>(null),
    vertical: makeBoolean(false),
    justified: makeBoolean(false),
    role: makeString("group")
});

const classes = computed(() => ({
    "btn-group": !props.vertical,
    "btn-group-vertical": props.vertical,
    ["btn-group-" + props.size]: props.size,
    "btn-group-justified": props.justified
}));
</script>

<style lang="scss">
//https://stackoverflow.com/questions/34450586/justify-buttons-with-bootstrap-v4/39119031#39119031
.btn-group-justified {
    display: flex;
    width: 100%;

    .btn,
    .btn-group {
        flex: 1;

        .btn {
            width: 100%;
        }

        .dropdown-menu {
            left: auto;
        }
    }
}
</style>