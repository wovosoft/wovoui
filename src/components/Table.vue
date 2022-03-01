<template>
    <div v-if="responsive" :class="wrapperClass">
        <table :class="classes">
            <caption v-if="$slots.caption || caption">
                <slot name="caption">
                    {{ caption }}
                </slot>
            </caption>
            <slot></slot>
        </table>
    </div>
    <template v-else>
        <table :class="classes">
            <caption v-if="$slots.caption || caption">
                <slot name="caption">
                    {{ caption }}
                </slot>
            </caption>
            <slot></slot>
        </table>
    </template>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from "vue";
import props from "../shared/tableProps.js";

export default defineComponent({
    name: "Table",
    props,
    setup(props) {
        props = reactive(props);
        const classes = computed(() => {
            return [
                "table",
                {
                    ["table-" + props.variant]: props.variant,
                    "table-striped": props.striped,
                    "table-hover": props.hover,
                    "table-active": props.active,
                    "table-bordered": props.bordered,
                    ["border-" + props.borderVariant]: !!props.borderVariant,
                    "table-borderless": props.borderless,
                    "table-sm": props.small,
                    ["align-" + props.align]: !!props.align,
                    "caption-top": props.captionTop
                }
            ];
        });
        const wrapperClass = computed(() => {
            return {
                "table-responsive": (typeof props.responsive === "boolean" && props.responsive),
                ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
            };
        });
        return {
            classes,
            wrapperClass
        }
    }
})
</script>