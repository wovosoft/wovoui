<template>
    <figure class="figure">
        <slot></slot>
        <img v-if="imgUrl" :class="['figure-img',{'img-fluid':imgFluid}]" :src="imgUrl" :alt="imgAlt"/>
        <template v-if="caption||$slots.caption">
            <figcaption class="figure-caption">
                <slot name="caption">
                    {{ caption }}
                </slot>
            </figcaption>
        </template>
    </figure>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

defineProps({
    /**
     * Figure Caption
     */
    caption: {type: String as PropType<string>, default: null},

    /**
     * Figure Image URL
     */
    imgUrl: {type: String as PropType<string>, default: null},

    /**
     * Defines if figure should be fluid or not
     */
    imgFluid: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Alternative value for figure image
     */
    imgAlt: {type: String as PropType<string>, default: null}
});
</script>