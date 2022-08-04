import {defineComponent, getCurrentInstance, h, onBeforeMount, PropType, ref, watch} from "vue";

export default defineComponent({
    name: "Collapse",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        modelValue: {type: Boolean as PropType<boolean>, default: null},
        visible: {type: Boolean as PropType<boolean>, default: null},
        class: {type: [Array, String, Object] as PropType<any>, default: null},
        isNav: {type: Boolean as PropType<boolean>, default: false},
        horizontal: {type: Boolean as PropType<boolean>, default: false},
        //must be set when horizontal is true
        //@check the note at https://getbootstrap.com/docs/5.2/components/collapse/#horizontal
        width: {type: [Number, String] as PropType<number | string>, default: null}
    },
    emits: ["update:modelValue", "update:visible", "showing", "shown", "hiding", "hidden"],
    setup(props, {emit, slots, expose}) {
        const instance = getCurrentInstance();

        const isActive = ref<boolean>(false);
        const isShow = ref<boolean>(false);
        const transitioning = ref<boolean>(false);

        watch(() => props.visible, value => isActive.value = value);
        watch(() => props.modelValue, value => isActive.value = value);

        const getDim = () => props.horizontal ? 'width' : 'height';
        const getDimSize = () => props.horizontal ? "scrollWidth" : "scrollHeight";

        watch(isActive, value => {
            emit("update:modelValue", value);
            emit("update:visible", value);
            transitioning.value = true;
            emit(value ? "showing" : "hiding", true);
            instance.vnode.el.style[getDim()] = instance.vnode.el[getDimSize()] + "px";
            setTimeout(() => {
                instance.vnode.el.style[getDim()] = (value ? instance.vnode.el[getDimSize()] : 0) + "px";
            }, 0);
        });

        onBeforeMount(() => {
            //model value has higher priority than visible
            //when either modelValue or visible prop is set to true
            if ((props.modelValue !== null && props.modelValue) || (props.visible !== null && props.visible)) {
                isActive.value = true;
                transitioning.value = false;
                isShow.value = true;
            }
        });


        function onTransitionendSelf() {
            isShow.value = isActive.value;
            transitioning.value = false;
            instance.vnode.el.style[getDim()] = "";
            emit(isActive.value ? "shown" : "hidden", true);
        }

        // const show = () => isActive.value = true;
        // const hide = () => isActive.value = false;
        // const toggle = () => isActive.value = !isActive.value;
        // provide('show', show);
        // provide('hide', hide);
        // provide('toggle', toggle);

        return () => h(props.tag, {
            onTransitionendSelf,
            class: {
                "collapse-horizontal": props.horizontal,
                "collapse": !transitioning.value,
                "collapsing": transitioning.value,
                "show": isShow.value
            }
        }, [
            props.horizontal ? h("div", {
                style: {width: props.width + "px"}
            }, slots.default?.()) : slots.default?.()
        ]);
    }
});