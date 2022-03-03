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
import {computed, defineComponent} from "vue";
import props from "../shared/tableProps";

export default defineComponent({
    name: "Table",
    props,
    setup(props) {
        return {
            classes: computed(() => ([
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
                    ["align-" + props.valign]: !!props.valign,
                    "caption-top": props.captionTop
                }
            ])),
            wrapperClass: computed(() => ({
                "table-responsive": (typeof props.responsive === "boolean" && props.responsive),
                ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
            }))
        }
    }
})
</script>