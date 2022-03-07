<template>
    <component is="figure" class="figure">
        <slot></slot>
        <img v-if="imgUrl" :class="['figure-img',{'img-fluid':imgFluid}]" :src="imgUrl" :alt="imgAlt"/>
        <template v-if="caption||$slots.caption">
            <div class="figure-caption">
                <slot name="caption">
                    {{ caption }}
                </slot>
            </div>
        </template>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Figure",
    props: {
        caption: {type: String as PropType<string>, default: null},
        imgUrl: {type: String as PropType<string>, default: null},
        imgFluid: {type: Boolean as PropType<boolean>, default: false},
        imgAlt: {type: String as PropType<string>, default: null}
    }
})
</script>