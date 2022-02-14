<template>
    <component :is="tag" :class="classes" @transitionend="transitionEnd">
        <slot></slot>
    </component>
</template>

<script>
import {computed, inject, ref, watch} from "vue";
import {makeBoolean, makeString} from "../shared/properties";

export default {
    name: "CarouselItem",
    emits: ['slidingStart', 'slidingEnd','update:active'],
    props: {
        tag: makeString("div"),
        active: makeBoolean(false),
        activeClass: makeString("active"),
    },
    setup(props, context) {
        const visible = ref(props.active);
        watch(() => props.active, v => visible.value = v);
        watch(visible, (v) => context.emit("update:active", v));
        inject('registerItem')(visible);

        return {
            visible,
            direction: inject('direction'),
            classes: computed(() => [
                "carousel-item"
            ])
        }
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
}
</script>