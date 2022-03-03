<template>
    <div class="form-rating">
        <component
            :is="value>=i?'StarFill':'Star'"
            v-for="i in items"
            @click="value=i"
            :variant="variant"
            class="me-1 wu-rating"
        />
    </div>
</template>

<script lang="ts">

import {computed, ref, watch, defineComponent, PropType} from "vue";
import {StarFill, Star} from "@wovosoft/wovoui-icons";

export default defineComponent({
    name: "Rating",
    components: {StarFill, Star},
    props: {
        min: {type: Number as PropType<number>, default: 1},
        max: {type: Number as PropType<number>, default: 5},
        modelValue: {type: Number as PropType<number>, default: 1},
        variant: {type: String as PropType<string>, default: null}
    },
    setup(props, context) {
        const value = ref(props.modelValue);
        watch(value, v => context.emit('update:modelValue', v));
        watch(() => props.modelValue, v => value.value = v);
        const items = computed(() => {
            let its = [];
            for (let i = props.min; i <= props.max; i++) {
                its.push(i);
            }
            return its;
        });
        return {
            items,
            value
        }
    }
})
</script>
<style>
.wu-rating:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>
