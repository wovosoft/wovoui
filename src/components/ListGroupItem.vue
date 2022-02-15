<template>
    <router-link v-if="to" :to="to" :class="classes" v-bind="attributes">
        <slot></slot>
    </router-link>
    <component :is="theTag" :class="classes" v-bind="attributes" v-else>
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, defineComponent, PropType, ref} from "vue";

export default defineComponent({
    name: "ListGroupItem",
    props: {
        tag: makeString("li"),
        active: {type: Boolean as PropType<true | false>, default: false},
        disabled: {type: Boolean as PropType<true | false>, default: false},
        href: makeString(null),
        to: {default: () => null},
        button: {type: Boolean as PropType<true | false>, default: false},
        variant: makeString(null)
    },
    setup(props, context) {
        const attributes = ref({});
        if (props.active) {
            attributes.value['aria-current'] = props.active;
        }
        if (props.disabled) {
            attributes.value['aria-disabled'] = props.disabled;
        }

        const theTag = ref(props.tag);
        if (props.href) {
            theTag.value = "a";
            attributes.value.href = props.href;
        }
        if (props.to) {
            theTag.value = "a";
            attributes.value.to = props.to;
        }

        if (props.button) {
            theTag.value = "button";
        }
        return {
            classes: computed(() => [
                "list-group-item",
                {
                    "active": props.active,
                    "disabled": props.disabled,
                    "list-group-item-action": props.button || theTag.value === 'a',
                    ["list-group-item-" + props.variant]: !!props.variant
                }
            ]),
            attributes,
            theTag
        }
    }
})
</script>