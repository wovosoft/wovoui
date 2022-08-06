<template>
    <component :is="tag" :class="classes" @transitionend="transitionEnd">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import { computed, defineComponent, h, inject, PropType, Ref, ref, watch } from "vue";

type registerItemType = (visible: Ref<boolean>) => void;

export default defineComponent({
    name: "CarouselItem",
    emits: ['slidingStart', 'slidingEnd', 'update:active'],
    props: {
        tag: { type: String as PropType<string>, default: "div" },
        active: { type: Boolean as PropType<boolean>, default: false },
        activeClass: { type: String as PropType<string>, default: "active" },
    },
    setup(props, { slots, emit }) {
        const visible = ref(props.active);

        watch(() => props.active, v => visible.value = v);
        watch(visible, (v) => emit("update:active", v));

        const registerItem: registerItemType = inject('registerItem');
        registerItem(visible);

        const direction = inject('direction');

        return () => h(
            props.tag,
            {
                 ref:"root",
                class: "carousel-item",
                onTransitionend: () => null
            },
            slots.default?.()
        )
    },
    mounted() {
        if (this.visible) {
            this.$el.classList.add(this.activeClass);
        }
    },
    methods: {
        transitionEnd() {
            this.$emit('slidingEnd', this);
            this.$el.classList.remove("carousel-item-start", "carousel-item-end");
            this.$el.classList.remove("carousel-item-next", "carousel-item-prev");
            if (this.visible) {
                this.$el.classList.add(this.activeClass);
            } else {
                this.$el.classList.remove(this.activeClass);
            }
        },
    },
    watch: {
        visible(value) {
            this.$emit('slidingStart', this);
            if (value) {
                this.$el.classList.add("carousel-item-" + (this.direction === 'start' ? 'next' : 'prev'));
            }
            setTimeout(() => this.$el.classList.add("carousel-item-" + this.direction), 0);
        }
    }
})
</script>