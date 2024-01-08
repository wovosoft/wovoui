<template>
  <DropdownSkeleton
      v-model="isMenuOpened"
      :class="classes"
      ref="skeleton"
      :popper-options="popperOptions">
    <template #toggle="{onclickToggle}">
      <Button
          v-if="split"
          :disabled="disabled"
          :variant="splitVariant"
          :block="block"
          :size="size">
        <slot name="button-content">
          {{ text }}
        </slot>
      </Button>
      <NavLink v-if="isNav"
               ref="toggle"
               class="dropdown-toggle"
               v-bind="toggleProps"
               :class="{show:isMenuOpened}"
               role="button"
               @click="onclickToggle">
        {{ text }}
      </NavLink>
      <Button
          v-else
          v-bind="toggleProps"
          ref="toggle"
          :tag="toggleTag"
          :block="block"
          :disabled="disabled"
          :variant="variant"
          :size="size"
          class="dropdown-toggle"
          :class="{'show':isMenuOpened,'dropdown-toggle-split':split}"
          @click="onclickToggle"
          :aria-expanded="isMenuOpened">
        <slot name="button-content">
          <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
          <template v-else>{{ text }}</template>
        </slot>
      </Button>
    </template>
    <DropdownMenu ref="menu" :show="isMenuOpened" v-bind="menuProps">
      <slot/>
    </DropdownMenu>
  </DropdownSkeleton>
</template>
<script lang="ts" setup>

import DropdownSkeleton from "../Internal/DropdownSkeleton.vue";
import DropdownMenu from "./DropdownMenu.vue";
import {Button} from "@/components/Button";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {PopperOptionsType} from "@/index";
import usePopper from "@/composables/usePopper";
import NavLink from "@/components/Navigation/NavLink.vue";
import {DropdownPropsInterface} from "@/components/Dropdown/useDropdown";

const props = withDefaults(defineProps<DropdownPropsInterface>(), {
  tag: "div",
  menuTag: "ul",
  toggleTag: "button",
  variant: "secondary",
  splitVariant: "secondary",
  align: "start",
  dir: "bottom",
  menuProps: {},
  toggleProps: {},
});

const isMenuOpened = ref<boolean>(false);

const classes = computed(() => ({
  "btn-group": !props.block && !props.isNav,
  "dropdown": props.block || props.isNav,
  "dropend": props.dir === "right",
  "dropstart": props.dir === "left",
  "dropup": props.dir === "top",
}));


const popperOptions = computed(() => ({
  placement: props.align ? [props.dir, props.align].join("-") : "bottom-start"
})) as PopperOptionsType;

const skeleton = ref<InstanceType<typeof DropdownSkeleton> | null>(null);
const toggle = ref<InstanceType<typeof Button> | null>(null);
const menu = ref<InstanceType<typeof DropdownMenu> | null>(null);

//@ts-ignore
const {setOptions} = usePopper(toggle, menu, popperOptions, isMenuOpened);

watch(() => popperOptions, options => setOptions(options));

function DdItemHandler(e: Event & { target: HTMLElement }) {
  if (e.target?.classList.contains('dropdown-item')) {
    isMenuOpened.value = false;
  }
}

onMounted(() => {
  skeleton.value?.$el?.addEventListener("click", DdItemHandler)
});

onBeforeUnmount(() => {
  skeleton.value?.$el?.removeEventListener("click", DdItemHandler)
});
</script>