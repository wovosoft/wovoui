<template>
    <component
        :is="href?'a':tag"
        :type="tag==='button'?tag:null"
        :class="classes"
        v-bind="attributes">
        <slot></slot>
        <Badge v-if="badge" :variant="badgeVariant">
            {{ badge }}
        </Badge>
    </component>
</template>
<script>
import {make, makeBoolean, makeString} from "./shared/properties.js";
import Badge from "./Badge.vue";
import {computed} from "vue";

export default {
    components: {Badge},
    props: {
        tag: makeString("button"),
        href: makeString(null),
        variant: makeString("secondary"),
        size: makeString(null),
        type: makeString("button"),
        outline: makeBoolean(false),
        block: makeBoolean(false),
        pill: makeBoolean(false),
        squared: makeBoolean(false),
        disabled: makeBoolean(false),
        pressed: makeBoolean(false),
        badge: make([String, Number], null),
        badgeVariant: makeString('primary')
    },
    setup(props, context) {
        let attributes = {
            disabled: props.disabled,
        };
        if (props.pressed) {
            attributes["aria-pressed"] = true;
            attributes["autocomplete"] = "off";
        }
        return {
            attributes,
            classes: computed(() => [
                "btn",
                {
                    ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: !!props.variant,
                    ["btn-" + props.size]: !!props.size,
                    'btn-block': props.block,
                    'rounded-pill': props.pill,
                    'rounded-0': props.squared,
                    active: props.pressed
                }
            ])
        }
    }
}
</script>

<style>
.btn-block {
    width: 100%;
}
</style>