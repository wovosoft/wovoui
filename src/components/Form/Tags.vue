<template>
    <component :is="tag" :role="role" :tabindex="tabindex" class="d-flex flex-wrap ps-1 pe-1 pb-1 pt-0">
        <Button tag="li"
                :size="addButtonSize"
                :pill="tagPills"
                :variant="tagVariant"
                v-for="(tag,tag_key) in model"
                :key="tag_key"
                class="me-1 mt-1 d-inline-flex align-items-center">
            {{ tag }}
            <Badge class="ms-2" :variant="badgeVariant" @click="removeItem(tag_key)">
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
                @keydown.enter="addTag"
            />
            <Button @click="addTag" :size="addButtonSize" class="mt-1 py-0" v-if="inputText">
                {{ addButtonText }}
            </Button>
        </li>
    </component>
</template>

<script lang="ts" setup>
import {ref} from "vue";
//@ts-ignore
import {X} from "@wovosoft/wovoui-icons";
import type {TagsProps} from "@/index";
import {Badge, Button, Input} from "@/components";

const props = withDefaults(defineProps<TagsProps>(), {
    tag: 'ul',
    role: 'group',
    tabindex: -1,
    placeholder: 'Add Tag',
    modelValue: () => ([]),
    separator: () => ([]),
    tagVariant: 'secondary',
    badgeVariant: 'primary',
    addButtonSize: 'sm',
    addButtonText: 'Add'
});

const emit = defineEmits(['update:modelValue']);

const model = defineModel({type: Array, default: []});

const inputText = ref()

const addTag = (e: any) => {
    if (inputText.value) {
        model.value.push(inputText.value)
        inputText.value = null;
    } else if (props.separator && props.separator.includes(e.key) && inputText.value) {
        model.value.push(inputText.value)
        setTimeout(() => inputText.value = null, 0);
    }
}
const backspacePressed = (e: Event & { target: HTMLInputElement }) => {
    if (props.removeOnDelete && e.target.selectionStart === 0 && model.value.length) {
        model.value.pop();
        model.value = [...model.value];
    }
}

const removeItem = (index: number) => {
    model.value.splice(index, 1);
    model.value = [...model.value];
}
</script>