<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed, ref, watch} from "vue";

export default {
    emits: ['update:active'],
    props: {
        active: makeBoolean(false),
        title: makeString()
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
}
</script>