<template>
    <Carousel :indicators-enabled="true" :dark="true">
        <CarouselItem :active="true" class="bg-danger text-white">
            <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
                This is Caption 1
            </div>
            <CarouselCaption class="d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </CarouselCaption>
        </CarouselItem>
        <CarouselItem class="bg-info text-white">
            <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
                This is Caption 2
            </div>
            <CarouselCaption class="d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </CarouselCaption>
        </CarouselItem>
        <CarouselItem class="bg-warning text-white">
            <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
                This is Caption 3
            </div>
            <CarouselCaption class="d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </CarouselCaption>
        </CarouselItem>
    </Carousel>
</template>

<script lang="ts" setup>
import {Carousel, CarouselItem, CarouselCaption} from "@/";
</script>
