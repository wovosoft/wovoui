<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import {computed, ref, watch, defineComponent, PropType} from "vue";

export default defineComponent({
    emits: ['update:active'],
    props: {
        active: {type: Boolean as PropType<boolean>, default: false},
        title: {type: String as PropType<string>, default: null}
    },
    inject: ['registerTab', 'unregisterTab'],
    setup(props, context) {
        const visible = ref(props.active);
        watch(() => props.active, (value) => visible.value = value);
        return {
            classes: computed(() => ["tab-pane", "fade"]),
            updateVisible: (value) => visible.value = value,
            visible
        }
    },
    mounted() {
        this.registerTab(this);
        this.applyVisibility(this.visible);
    },
    unmounted() {
        this.unregisterTab(this);
    },
    watch: {
        visible(value) {
            this.$emit('update:active', value);
            this.applyVisibility(value);
        }
    },
    methods: {
        applyVisibility(value) {
            if (value) {
                this.$el.classList.add("active");
                setTimeout(() => this.$el.classList.add("show"), 150)
            } else {
                this.$el.classList.remove("show");
                setTimeout(() => this.$el.classList.remove("active"), 0)
            }
        }
    }
})
</script>