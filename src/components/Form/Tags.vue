<template>
    <component :is="tag" :role="role" :tabindex="tabindex" :class="classes">
        <Button tag="li"
                :size="addButtonSize"
                :pill="tagPills"
                :variant="tagVariant"
                v-for="(tag,tag_key) in model"
                :key="tag_key"
                class="me-1 mt-1 d-inline-flex align-items-center">
            {{ tag }}
            <Badge class="ms-2" :variant="badgeVariant" @click="model.splice(tag_key,1)">
                <X class="hover:bg-bright"/>
            </Badge>
        </Button>
        <li class="d-inline-flex flex-grow-1">
            <Input
                :size="addButtonSize"
                class="wui-tags-input w-100"
                :placeholder="placeholder"
                v-model.trim="inputText"
                @keyup.delete="backspacePressed"
                @keypress="addTag"
            />
            <Button @click="addTag" :size="addButtonSize" class="mt-1 py-0" v-if="inputText">
                {{ addButtonText }}
            </Button>
        </li>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType, ref, watch} from "vue";
import {X} from "@wovosoft/wovoui-icons";
import type {ButtonSizes} from "@/index";
import {makeBoolean, makeRole, makeSize, makeString, makeTag, makeVariant} from "@/composables";
import {Badge, Button, Input} from "@/components";

const props = defineProps({
    tag: makeTag("ul"),
    role: makeRole("group"),
    tabindex: {type: [Number, String] as PropType<number | string>, default: -1},
    placeholder: makeString('Add Tag'),
    modelValue: {type: Array as PropType<any[]>, default: () => ([])},
    removeOnDelete: makeBoolean(false),
    separator: {type: Array as PropType<any[]>, default: () => ([])},
    tagPills: makeBoolean(false),
    tagVariant: makeVariant("secondary"),
    badgeVariant: makeVariant("primary"),
    addButtonSize: makeSize<ButtonSizes>("sm"),
    addButtonText: {type: String as PropType<string>, default: "Add"},
    noAddOnEnter: makeBoolean(false)
});
const emit = defineEmits(['update:modelValue']);

const model = ref(props.modelValue || []);
watch(model, v => emit("update:modelValue", v));
watch(() => props.modelValue, v => model.value = v);

const inputText = ref(null)

const addTag = (e) => {
    if ((e.keyCode === 13 || e.which === 13 || e.type === 'click') && inputText.value) {
        model.value.push(inputText.value)
        inputText.value = null;
    } else if (props.separator && props.separator.includes(e.key) && inputText.value) {
        model.value.push(inputText.value)
        setTimeout(() => inputText.value = null, 0);
    }
}
const backspacePressed = (e) => {
    if (props.removeOnDelete && e.target.selectionStart === 0 && model.value.length) {
        model.value.pop();
    }
}

const classes = computed(() => [
    "d-flex",
    "flex-wrap",
    "ps-1",
    "pe-1",
    "pb-1",
    "pt-0",
]);
</script>