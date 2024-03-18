<script lang="ts" setup>
import {computed, isVNode, onMounted, reactive, ref, watch} from "vue";
import Icon from "../Ui/Icon.vue";
import {AlertPropsInterface, ButtonClose} from "@/components";

const props = withDefaults(defineProps<AlertPropsInterface>(), {
    tag: 'div',
    variant: 'primary',
    timeout: 0,
    timeoutStep: 1,
});

const model = defineModel<boolean>();

const state = ref<boolean>(!!(model.value || props.show));
const shouldGen = ref<boolean>(false);
const classStates = reactive({
    show: false
});

//watch model value and update state
watch(model, isVisible => {
    if (isVisible !== state.value) {
        state.value = isVisible;
    }
})
//watch state and apply state
watch(state, applyState);
//{immediate:true} throws error for timeout so, doing it manually
onMounted(() => applyState(state.value));

const timeout = ref<number | null>(null);

/**
 * isVisible is updated state.
 * true => should show now
 * false => show hide now
 * @param isVisible
 */
function applyState(isVisible: boolean) {
    if (isVisible) {
        classStates.show = true;
        shouldGen.value = true;
        model.value = isVisible;
        if (props.timeout) {
            timeout.value = setTimeout(
                () => state.value = false,
                props.timeout * 1000 / Number(props.timeoutStep)
            );
        }
    } else {
        classStates.show = false;
        if (timeout.value) {
            clearTimeout(timeout.value);
            timeout.value = null;
        }
        if (props.dismissible) {
            //fade away animation takes 150ms, then emit value
            setTimeout(() => {
                model.value = isVisible;
                shouldGen.value = false;
            }, 150);
        } else {
            //emit immediately
            model.value = isVisible;
            shouldGen.value = false;
        }
    }
}

const show = () => state.value = true;
const hide = () => state.value = false;
const toggle = () => state.value ? hide() : show()


defineExpose({show, hide, toggle});

const attrs = computed(() => ({
    role: "alert",
    class: [
        "alert",
        {
            "d-flex": props.dismissible || props.icon,
            ["alert-" + props.variant]: props.variant,
            "alert-dismissible": props.dismissible,
            "fade": props.dismissible,
            show: classStates.show && props.dismissible  //sync with dismissible, but at nextTick
        }
    ]
}));
</script>
<template>
    <component v-if="shouldGen" :is="tag" v-bind="attrs">
        <template v-if="icon">
            <Icon v-if="typeof icon==='string'" :icon="icon"/>
            <component v-else-if="isVNode(icon)" :is="icon" class="me-2 flex-shrink-0"/>
            <div class="flex-shrink-0">
                <slot name="heading">{{ heading }}</slot>
                <slot></slot>
            </div>
        </template>
        <template v-else>
            <slot name="heading">{{ heading }}</slot>
            <slot></slot>
        </template>
        <ButtonClose v-if="dismissible" @click="hide" :white="closeBtnWhite"/>
    </component>
</template>