<template>
    <component :is="tag" :role="role" :tabindex="tabindex" :class="classes">
        <ul class="wui-tags-items">
            <li v-for="(tag,tag_key) in model" :key="tag_key" class="bg-secondary">
                {{ tag }}
                <X/>
            </li>
        </ul>
        <input
            class="wui-tags-input"
            :placeholder="placeholder"
            v-model.trim="inputText"
            @keypress.enter="addTag"
        />
    </component>
</template>

<script>
import {make, makeString} from "../shared/properties";
import {computed, ref, watch} from "vue";
import {X} from "@wovosoft/wovoui-icons";

export default {
    name: "Tags",
    components: {X},
    props: {
        tag: makeString("div"),
        role: makeString("group"),
        tabindex: make([Number, String], -1),
        placeholder: makeString('Add Tag'),
        modelValue: make(Array, [])
    },
    setup(props, context) {
        const model = ref(props.modelValue || []);
        watch(model, v => context.emit("update:modelValue", v));
        watch(() => props.modelValue, v => model.value = v);

        const inputText = ref(null)

        const addTag = () => {
            if (inputText) {
                model.value.push(inputText.value)
                inputText.value = null;
            }
        }

        return {
            model,
            inputText,
            addTag,
            classes: computed(() => [
                "wui-tags",
            ])
        }
    }
}
</script>
<style lang="scss">
.wui-tags {
    .wui-tags-items {
        list-style-type: none;

        li {
            display: inline-block;
            float: left;
        }
    }

    &:focus {
        box-shadow: 0 0 6px #007bff;
        border-radius: 4px;
    }

    .wui-tags-input {
        border: 0;
        outline: 0;
        padding: 5px 10px;
    }
}
</style>