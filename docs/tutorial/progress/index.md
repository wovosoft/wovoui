# Progress

<WProgress class="mb-2" :value="50"/>
<WProgress class="mb-2" :value="25"/>
<WProgress class="mb-2" :value="75"/>
<WProgress class="mb-2" :value="60"/>
<WProgress class="mb-2" :value="90"/>

```html

<Progress class="mb-2" :value="50"/>
<Progress class="mb-2" :value="25"/>
<Progress class="mb-2" :value="75"/>
<Progress class="mb-2" :value="60"/>
<Progress class="mb-2" :value="90"/>
```

## Show Values

To show the current value use prop `show-value`

## Height

We only set a `height` value on the `<Progress>`, so if you change that value the inner `<ProgressBar>` will
automatically resize accordingly.

<WProgress class="mb-2" height="10px" :value="50"/>

```html

<Progress class="mb-2" height="10px" :value="50"/>
```

## Background Variants

Use bootstrap's color variants.

<WProgress class="mb-2" variant="primary" :value="50"/>
<WProgress class="mb-2" variant="secondary" :value="25"/>
<WProgress class="mb-2" variant="primary" :value="75"/>
<WProgress class="mb-2" variant="danger" :value="60"/>
<WProgress class="mb-2" variant="success" :value="90"/>

```html

<Progress class="mb-2" variant="primary" :value="50"/>
<Progress class="mb-2" variant="secondary" :value="25"/>
<Progress class="mb-2" variant="primary" :value="75"/>
<Progress class="mb-2" variant="danger" :value="60"/>
<Progress class="mb-2" variant="success" :value="90"/>
```

## Multiple bars

<WProgress>
    <WProgressBar :value="15" :min="0"/>
    <WProgressBar variant="success" :value="30"/>
    <WProgressBar variant="info" :value="20"/>
</WProgress>

```html

<Progress>
    <ProgressBar :value="15" :min="0" :max="100"/>
    <ProgressBar variant="success" :value="30" :min="0" :max="100"/>
    <ProgressBar variant="info" :value="20" :min="0" max="100"/>
</Progress>
```

## Striped

Use boolean prop `striped` to make `<ProgressBar>` striped.

<WProgress striped class="mb-2" variant="primary" :value="50"/>
<WProgress striped class="mb-2" variant="secondary" :value="25"/>
<WProgress striped class="mb-2" variant="primary" :value="75"/>
<WProgress striped class="mb-2" variant="danger" :value="60"/>
<WProgress striped class="mb-2" variant="success" :value="90"/>

```html

<Progress striped class="mb-2" variant="primary" :value="50"/>
<Progress striped class="mb-2" variant="secondary" :value="25"/>
<Progress striped class="mb-2" variant="primary" :value="75"/>
<Progress striped class="mb-2" variant="danger" :value="60"/>
<Progress striped class="mb-2" variant="success" :value="90"/>
```

## Animated stripes

The striped gradient can also be animated. Use boolean prop `animated` along with `striped` to make bars animated.

<WProgress animated striped class="mb-2" variant="primary" :value="50"/>
<WProgress animated striped class="mb-2" variant="secondary" :value="25"/>
<WProgress animated striped class="mb-2" variant="primary" :value="75"/>
<WProgress animated striped class="mb-2" variant="danger" :value="60"/>
<WProgress animated striped class="mb-2" variant="success" :value="90"/>

```html

<Progress animated striped class="mb-2" variant="primary" :value="50"/>
<Progress animated striped class="mb-2" variant="secondary" :value="25"/>
<Progress animated striped class="mb-2" variant="primary" :value="75"/>
<Progress animated striped class="mb-2" variant="danger" :value="60"/>
<Progress animated striped class="mb-2" variant="success" :value="90"/>
```