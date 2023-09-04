import {defineComponent, getCurrentInstance, h, onBeforeMount, ref, watch} from "vue";
import {makeBoolean, makeProp, makeTag} from "@/composables";

export default defineComponent({
    name: "Collapse",
    props: {
        isAccordion: makeBoolean(false),
        tag: makeTag("div"),
        modelValue: makeBoolean(null),
        visible: makeBoolean(null),
        isNav: makeBoolean(false),
        horizontal: makeBoolean(false),
        //must be set when horizontal is true
        //@check the note at https://getbootstrap.com/docs/5.2/components/collapse/#horizontal
        width: makeProp<number | string>(null, [Number, String])
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
            if (instance?.vnode?.el) {
                instance.vnode.el.style[getDim()] = instance.vnode.el[getDimSize()] + "px";
            }

            setTimeout(() => {
                if (instance?.vnode?.el) {
                    instance.vnode.el.style[getDim()] = (value ? instance.vnode.el[getDimSize()] : 0) + "px";
                }
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


        function onTransitionend() {
            isShow.value = isActive.value;
            transitioning.value = false;
            emit(isActive.value ? "shown" : "hidden", true);
            if (instance?.vnode?.el) {
                instance.vnode.el.style[getDim()] = "";
            }
        }

        const show = () => isActive.value = true;
        const hide = () => isActive.value = false;
        const toggle = () => isActive.value = !isActive.value;

        expose({show, hide, toggle});

        return () => h(props.tag, {
            onTransitionend,
            class: {
                "accordion-collapse": props.isAccordion,
                "navbar-collapse": props.isNav,
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