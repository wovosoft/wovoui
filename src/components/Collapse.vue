<template>
    <component :is="tag" :class="classes" ref="collapse" @transitionend.self="transitionEnded">
        <slot></slot>
    </component>
</template>

<script lang="ts">

import {computed, defineComponent, PropType, ref, watch} from "vue";

export default defineComponent({
    name: "Collapse",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        visible: {type: Boolean as PropType<boolean>, default: false},
        class: {type: [Array, String, Object] as PropType<any>, default: null},
        isNav: {type: Boolean as PropType<boolean>, default: false},
        horizontal: {type: Boolean as PropType<boolean>, default: false}
    },
    emits: ["update:modelValue", "update:visible", "showing", "shown", "hiding", "hidden"],
    setup(props, {emit}) {
        const isActive = ref<boolean>(false);
        const isShow = ref<boolean>(false);
        const transitioning = ref<boolean>(false);

        watch(() => props.visible, value => isActive.value = value);
        watch(() => props.modelValue, value => isActive.value = value);

        const collapse = ref<HTMLElement | null>(null);

        const getDimension = () => props.horizontal ? 'width' : 'height';
        const getDimensionSize = () => getDimension() === "height" ? "scrollHeight" : "scrollWidth";

        watch(isActive, value => {
            emit("update:modelValue", value);
            emit("update:visible", value);

            if (value) {
                transitioning.value = true;
                emit("showing", true);
                // collapse.value.style[getDimension()] = "0";

                setTimeout(() => {
                    if (props.horizontal){
                        collapse.value.style.width = "1000px";//testing
                        console.log(
                            collapse.value.scrollWidth,
                            collapse.value.getBoundingClientRect().width
                        )
                    }else{
                        collapse.value.style[getDimension()] = collapse.value[getDimensionSize()] + "px";
                    }


                    emit("shown", true);
                }, 0);
            } else {
                transitioning.value = true;
                isShow.value = false;
                collapse.value.style[getDimension()] = collapse.value[getDimensionSize()] + "px";
                setTimeout(() => {
                    isShow.value = false;
                    collapse.value.style[getDimension()] = "0px";
                }, 0)
            }
        });

        const classes = computed(() => [
            {
                "collapse-horizontal": props.horizontal,
                "collapse": !transitioning.value,
                "collapsing": transitioning.value,
                "show": isShow.value
            }
        ]);

        function transitionEnded() {
            isShow.value = isActive.value;
            transitioning.value = false;
            collapse.value.style[getDimension()] = "";
        }

        return {
            collapse,   //required to be accessible
            classes,
            transitionEnded
        }
    }
});
</script>