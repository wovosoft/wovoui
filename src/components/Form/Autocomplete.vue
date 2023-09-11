<script setup lang="ts">
import {Dropdown} from "bootstrap";
import {Input} from "@/components";
import {onBeforeUnmount, onMounted, PropType, ref, useModel} from "vue";
import vOnClickOutside from "@/directives/vOnClickOutside";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";

const props = defineProps({
    modelValue: {
        type: [String, Number] as PropType<string | number>
    },
    options: {
        type: Array as PropType<string[]>,
        default: () => ([])
    },
    maxHeight: {
        type: String as PropType<string>,
        default: () => '300px'
    }
});

const model = useModel(props, 'modelValue');

const filterEl = ref<InstanceType<typeof Input>>();
const dropdownEl = ref<HTMLDivElement>();

const dd = () => Dropdown.getOrCreateInstance(dropdownEl.value);
onMounted(dd);
onBeforeUnmount(() => dd().dispose());
const searchOptions = (e: Event & { target: HTMLInputElement }) => {
    console.log(e.target.value)
};

const isShown = ref<boolean>(false);
const theMenu = ref<InstanceType<typeof DropdownMenu>>();
const show = () => {
    dd()?.show();
    isShown.value = true;
};

const hide = () => {
    dd()?.hide();
    isShown.value = false;
};

const toggle = () => isShown.value ? hide() : show();
const selectOption = (op: string) => {
    model.value = op;
    hide();
};

</script>

<template>
    <div class="dropdown" ref="dropdownEl" v-on-click-outside="()=>hide()">
        <Input
            v-model="model"
            ref="filterEl"
            @click="toggle"
            @input="searchOptions"
        />
        <DropdownMenu ref="theMenu" block :style="{maxHeight:maxHeight,overflow:'auto'}" tabindex="0">
            <button v-for="op in options"
                    @click="selectOption(op)"
                    type="button"
                    class="dropdown-item">
                {{ op }}
            </button>
        </DropdownMenu>
    </div>
</template>