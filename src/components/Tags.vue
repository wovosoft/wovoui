<template>
    <component :is="tag" :role="role" :tabindex="tabindex" :class="classes">
        <Badge tag="li"
               :pill="tagPills"
               :variant="tagVariant"
               v-for="(tag,tag_key) in model"
               :key="tag_key"
               class="me-1 mt-1 d-inline-flex align-items-center">
            {{ tag }}
            <X class="hover:bg-bright" @click="model.splice(tag_key,1)"/>
        </Badge>
        <li class="d-inline-flex flex-grow-1">
            <input
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

<script lang="ts">
import {make, makeBoolean, makeString} from "../shared/properties";
import {computed, ref, watch,defineComponent} from "vue";
import {X} from "@wovosoft/wovoui-icons";
import Badge from "./Badge.vue";
import Button from "./Button.vue";

export default defineComponent({
    name: "Tags",
    components: {Button, Badge, X},
    props: {
        tag: makeString("ul"),
        role: makeString("group"),
        tabindex: make([Number, String], -1),
        placeholder: makeString('Add Tag'),
        modelValue: make(Array, []),
        removeOnDelete: makeBoolean(false),
        separator: make(Array, null),
        tagPills: makeBoolean(false),
        tagVariant: makeString("secondary"),
        addButtonSize: makeString("sm"),
        addButtonText: makeString("Add"),
        noAddOnEnter: makeBoolean(false)
    },
    setup(props, context) {
        const model = ref(props.modelValue || []);
        watch(model, v => context.emit("update:modelValue", v));
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

        return {
            model,
            inputText,
            addTag,
            backspacePressed,
            classes: computed(() => [
                "wui-tags",
                "d-flex",
                "flex-wrap",
                "ps-1",
                "pe-1",
                "pb-1",
                "pt-0"
            ])
        }
    }
})
</script>
<style lang="scss">
.wui-tags {
    //.wui-tags-items {
    //    list-style-type: none;
    //
    //    li {
    //        display: inline-block;
    //        float: left;
    //    }
    //}
    border: 1px solid var(--bs-gray-200);

    &:focus {
        box-shadow: 0 0 6px #007bff !important;
        border-radius: 4px !important;
    }

    .wui-tags-input {
        border: 0;
        outline: 0;
    }

    .hover\:bg-bright:hover {
        background: var(--bs-dark);
        cursor: pointer;
    }
}
</style>