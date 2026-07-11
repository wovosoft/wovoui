import {defineComponent, h, type PropType, provide, type VNode} from "vue";

export default defineComponent({
    props: {
        node: {default: null, type: Object as PropType<VNode>},
        item: {type: Object as PropType<object>, default: null},
    },
    setup(props) {
        provide('item', props.item);
        return () => h(props.node)
    }
})