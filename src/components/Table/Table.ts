import {defineComponent, h} from "vue";
import props from "@/shared/tableProps";

export default defineComponent({
    name: "Table",
    props,
    setup(props, {slots}) {
        return () => {
            let wrapperClasses = {
                "table-responsive": (props.responsive === true),
                ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
            };

            let classes = [
                "table",
                {
                    ["table-" + props.variant]: props.variant,
                    "table-striped": props.striped === true,
                    "table-striped-columns": props.striped === 'columns',
                    "table-hover": props.hover,
                    "table-active": props.active,
                    "table-bordered": props.bordered,
                    ["border-" + props.borderVariant]: !!props.borderVariant,
                    "table-borderless": props.borderless,
                    "table-sm": props.small,
                    ["align-" + props.align]: !!props.align,
                    "caption-top": props.captionTop,
                }
            ];

            const caption = () => {
                /**
                 * When SLOTS (caption) is available render it ,
                 * else render PROPS (caption)
                 *
                 * SLOTS has higher priorities than props
                 */
                if (slots.caption) {
                    return h("caption", {}, [slots.caption()])
                } else if (props.caption) {
                    return h("caption", {}, [props.caption])
                }
                return null;
            };

            const table = () => h(
                "table",
                {class: classes},
                [caption(), slots?.default?.()]
            );

            return props.responsive ? h("div", {class: wrapperClasses}, [table()]) : table();
        }
    }
})