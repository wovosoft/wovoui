import {defineComponent, h, PropType} from "vue";
import {makeBoolean, makeString} from "../../composables/useProps";

export default defineComponent({
    name: "PageLink",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: makeString("#"),
        prev: makeBoolean(false),
        next: makeBoolean(false),
        prevText: {type: String as PropType<string>, default: '&laquo;'},
        nextText: {type: String as PropType<string>, default: '&laquo;'},
        ariaLabel: makeString()
    },
    setup(props, {slots}) {
        const ariaLabelText = () => {
            if (props.next) {
                return "Next";
            }
            if (props.prev) {
                return "Previous";
            }
            return null;
        }
        return () => h(props.tag, {
            class: "page-link",
            "aria-label": ariaLabelText(),
            href: props.href
        }, slots.default?.())
    }
});