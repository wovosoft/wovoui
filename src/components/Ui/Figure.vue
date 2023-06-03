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

import {makeBoolean, makeString} from "@/composables";

defineProps({
    /**
     * Figure Caption
     */
    caption: makeString(),

    /**
     * Figure Image URL
     */
    imgUrl: makeString(),

    /**
     * Defines if figure should be fluid or not
     */
    imgFluid: makeBoolean(false),

    /**
     * Alternative value for figure image
     */
    imgAlt: makeString()
});
</script>