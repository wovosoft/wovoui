<template>
    <div>
        <Icon
            :icon="value>=i?'star-fill':'star'"
            v-for="i in items"
            @click="value=i"
            :variant="variant"
            class="me-1 wu-rating"
        />
    </div>
</template>

<script>

import {computed, ref, watch} from "vue";
import {makeNumber, makeString} from "./shared/properties.js";
import Icon from "./Icon.vue";

export default {
    name: "Rating",
    components: {Icon},
    props: {
        min: makeNumber(1),
        max: makeNumber(5),
        modelValue: makeNumber(1),
        variant: makeString(null)
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
}
</script>
<style>
.wu-rating:hover {
    transform: scale(1.2);
    cursor: pointer;
}
</style>
