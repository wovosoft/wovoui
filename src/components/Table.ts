import {defineComponent, h} from "vue";
import props from "../shared/tableProps";

export default defineComponent({
    name: "Table",
    props,
    setup(props, {slots}) {
        return () => {
            let wrapperClasses = {
                "table-responsive": (props.responsive === true),
                ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
            };
            let classes = ["table", {
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
            }];

            const caption = () => {
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
                [caption(), slots.default ? slots.default() : null]
            )

            return props.responsive ? h("div", {class: wrapperClasses}, [table()]) : table();
        }
    }
})