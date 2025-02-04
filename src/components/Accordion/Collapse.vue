<script lang="ts" setup>
import {computed, getCurrentInstance, onBeforeMount, ref, watch} from "vue";
import {CollapseEmits, CollapseProps} from "@/components";

const props = withDefaults(defineProps<CollapseProps>(), {
    tag: 'div',
});

const emit = defineEmits<CollapseEmits>();
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
    //@ts-ignore
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
    //@ts-ignore
    emit(isActive.value ? "shown" : "hidden", true);
    if (instance?.vnode?.el) {
        instance.vnode.el.style[getDim()] = "";
    }
}

const show = () => isActive.value = true;
const hide = () => isActive.value = false;
const toggle = () => isActive.value = !isActive.value;

defineExpose({show, hide, toggle});

const classes = computed(() => ({
    "accordion-collapse": props.isAccordion,
    "navbar-collapse": props.isNav,
    "collapse-horizontal": props.horizontal,
    "collapse": !transitioning.value,
    "collapsing": transitioning.value,
    "show": isShow.value
}));
</script>

<template>
    <component :is="tag" @transitionend="onTransitionend" :class="classes">
        <div v-if="horizontal" :style="{width: width + 'px'}">
            <slot/>
        </div>
        <slot v-else/>
    </component>
</template>