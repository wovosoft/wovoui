import {defineComponent, h, useModel} from "vue";
import {makeBoolean, makeTag} from "@/composables/useProps";

export default defineComponent({
    props: {
        tag: makeTag("h2"),
        toggleTag: makeTag("button"),
        modelValue: makeBoolean(false)
    },
    setup(props, {slots}) {
        const model = useModel(props, 'modelValue');

        return () => h(
            props.tag,
            {class: ['accordion-header']},
            h(props.toggleTag, {
                class: {'accordion-button': true, 'collapsed': !props.modelValue},
                type: props.toggleTag === 'button' ? 'button' : null,
                ariaExpanded: props.modelValue,
                onClick: () => model.value = !model.value
            }, slots?.default?.())
        )
    }
})