# Carousel

The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a
series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

## Slides only

<WCarousel>
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
    </WCarouselItem>
</WCarousel>

```vue

<Carousel>
<CarouselItem :active="true" class="bg-danger text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 1
    </div>
</CarouselItem>
<CarouselItem class="bg-info text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 2
    </div>
</CarouselItem>
<CarouselItem class="bg-warning text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 3
    </div>
</CarouselItem>
</Carousel>
```

## Controls

Adding in the previous and next controls. By default, controls are enabled. It can be controlled by
prop `controls-enabled`. If you don't want controls, set `controls-enabled` value to `false`.

<WCarousel :controls-enabled="false">
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
    </WCarouselItem>
</WCarousel>

```vue

<Carousel :controls-enabled="false">
<CarouselItem :active="true" class="bg-danger text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 1
    </div>
</CarouselItem>
<CarouselItem class="bg-info text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 2
    </div>
</CarouselItem>
<CarouselItem class="bg-warning text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 3
    </div>
</CarouselItem>
</Carousel>
```

## With indicators

You can also add the indicators to the carousel, alongside the controls, too.


<WCarousel :indicators-enabled="true">
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
    </WCarouselItem>
</WCarousel>

```vue

<Carousel :indicators-enabled="true">
<CarouselItem :active="true" class="bg-danger text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 1
    </div>
</CarouselItem>
<CarouselItem class="bg-info text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 2
    </div>
</CarouselItem>
<CarouselItem class="bg-warning text-white">
    <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
        This is Caption 3
    </div>
</CarouselItem>
</Carousel>
```

## With Carousel Captions

<WCarousel :indicators-enabled="true">
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
</WCarousel>

```vue

<Carousel :indicators-enabled="true">
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
```

## Crossfade

Set value `true`  for the prop `fade` to your carousel to animate slides with a fade transition instead of a slide

<WCarousel :indicators-enabled="true" :fade="true">
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
</WCarousel>

```vue

<Carousel :indicators-enabled="true" :fade="true">
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
```

## Sliding Interval

Set prop `intervals`'s value in seconds to automatically trigger slides navigation. Default is `0`.

Note: This feature has some minor issues when there are multiple 

## Dark Variant

Add prop `dark`'s value to `true` to the `<Carousel>` for darker controls, indicators, and captions. Controls have been
inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass
variables that customize the `color` and `background-color`.

<WCarousel :indicators-enabled="true" :dark="true">
    <WCarouselItem :active="true"  class="bg-danger text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 1
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-info text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 2
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
    <WCarouselItem class="bg-warning text-white">
        <div class="py-5 text-center text-white" style="min-height: 250px;color: white !important;">
            This is Caption 3
        </div>
        <WCarouselCaption class="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </WCarouselCaption>
    </WCarouselItem>
</WCarousel>

```vue

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
```