# Toasts

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and
desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

<WToast show>
<template #header>
<strong class="me-auto">Bootstrap</strong>
<small>11 mins ago</small>
</template>
Hello, world! This is a toast message.
</WToast>

```html

<Toast show>
    <template #header>
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
    </template>
    Hello, world! This is a toast message.
</Toast>
```

## Live example

<WButton variant="primary" @click="one=!one">Toggle Toast</WButton>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <WToast v-model:show="one">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </WToast>
</div>

```html

<Button variant="primary" @click="one=!one">Toggle Toast</Button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <Toast v-model:show="one">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </Toast>
</div>
```

## `show`, `hide` and `toggle` helpers

<WButton variant="primary" @click="$refs.show.show()">Show Toast</WButton>
<WButton variant="primary" @click="$refs.show.hide()" class="mx-2">Hide Toast</WButton>
<WButton variant="primary" @click="$refs.show.toggle()">Toggle Toast</WButton>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <WToast ref="show">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </WToast>
</div>

```html

<Button variant="primary" @click="$refs.show.show()">Show Toast</Button>
<Button variant="primary" @click="$refs.show.hide()" class="mx-2">Hide Toast</Button>
<Button variant="primary" @click="$refs.show.toggle()">Toggle Toast</Button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <Toast ref="show">
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </template>
        Hello, world! This is a toast message.
    </Toast>
</div>
```

## Stacking

You can stack toasts by wrapping them in a `<ToastContainer>`, which will vertically add some spacing.

<WToastContainer>
<WToast show>
<template #header>
<strong class="me-auto">Bootstrap</strong>
<small class="text-muted">just now</small>
</template>
See? Just like this.
</WToast>
<WToast show>
    <template #header>
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
    </template>
    Heads up, toasts will stack automatically
</WToast>
</WToastContainer>

```html

<ToastContainer>
    <Toast show>
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">just now</small>
        </template>
        See? Just like this.
    </Toast>

    <Toast show>
        <template #header>
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">2 seconds ago</small>
        </template>
        Heads up, toasts will stack automatically
    </Toast>
</ToastContainer>
```

## Custom content

Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup. Here we’ve
created a simpler toast by removing the default .toast-header, adding a custom hide icon from Bootstrap Icons, and using
some flexbox utilities to adjust the layout.

<WToast class="align-items-center" no-body no-close-button show>
<div class="d-flex">
<WToastBody>
Hello, world! This is a toast message.
</WToastBody>
<WButtonClose class="me-2 m-auto"></WButtonClose>
</div>
</WToast>

```html

<Toast class="align-items-center" no-body no-close-buton show>
    <div class="d-flex">
        <ToastBody>
            Hello, world! This is a toast message.
        </ToastBody>
        <ButtonClose class="me-2 m-auto"/>
    </div>
</Toast>
```

Alternatively, you can also add additional controls and components to toasts.

<WToast show ref="additional_components">
Hello, world! This is a toast message.
<div class="mt-2 pt-2 border-top">
<WButton variant="primary" class="me-2" size="sm">Take action</WButton>
<WButton variant="secondary" size="sm" @click="$refs.additional_components.hide()">Close</WButton>
</div>
</WToast>

```html

<Toast show ref="additional_components">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
        <Button variant="primary" class="me-2" size="sm">Take action</Button>
        <Button variant="secondary" size="sm" @click="$refs.additional_components.hide()">Close</Button>
    </div>
</Toast>
```

## Color schemes

<WToast show no-body no-close-button variant="primary" class="align-items-center text-white border-0">
    <div class="d-flex">
        <WToastBody>
            Hello, world! This is a toast message.
        </WToastBody>
        <WButtonClose class="me-2 m-auto" white></WButtonClose>
    </div>
</WToast>

```html

<Toast show no-body no-close-button variant="primary" class="align-items-center text-white border-0">
    <div class="d-flex">
        <ToastBody>
            Hello, world! This is a toast message.
        </ToastBody>
        <ButtonClose class="me-2 m-auto" white/>
    </div>
</Toast>
```

## Placement

Use prop `placement` on a `<ToastContainer>`. Supported values
are `'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'`

### Placement for group of `<Toasts>`

- First create a `<ToastContainer>`.
- Then teleport it to any element. Most often it should be `body`

<WButton @click="showPlacementsGroup=true" class="me-2">First Show Toasts</WButton>
<WButton @click="showPlacementsGroup=false">Hide Toasts</WButton>
<WSelect :options="placements" v-model="placement"/>
<WToastContainer style="z-index: 99999;" container="body" class="position-fixed" :placement="placement">
<WToast v-model:show="showPlacementsGroup" v-for="i in 4" header="Bootstrap">
Heads up, toasts will stack automatically
</WToast>
</WToastContainer>

```vue

<template>
    <Button @click="showPlacementsGroup=true">First Show Toasts</Button>
    <Button @click="showPlacementsGroup=false">Hide Toasts</Button>
    <Select :options="placements" v-model="placement"/>
    <ToastContainer container="body" class="position-fixed" :placement="placement">
        <Toast v-model:show="showPlacementsGroup" v-for="i in 4" header="Bootstrap">
            Heads up, toasts will stack automatically
        </Toast>
    </ToastContainer>
</template>
<script setup>
import {ref} from "vue";

const placement = ref('top-left');
const placements = [
    'top-left', 'top-center', 'top-right', 'middle-left',
    'middle-center', 'middle-right', 'bottom-left',
    'bottom-center', 'bottom-right'
];
const showPlacementsGroup = ref(false);
</script>
```

## Teleporting Toasts

Toasts can be teleported to any elements by using `container` prop. It uses `<teleport>` component under the hood.

```vue
<ToastContainer id="top-right" placement="top-right"></ToastContainer>
<ToastContainer id="bottom-right" placement="bottom-right"></ToastContainer>
<Toast container="#top-right">Toast One</Toast>
<Toast container="#bottom-right">Toast Two</Toast>
```

<script setup>
import {ref} from "vue"; 

const one=ref(false);
const placement=ref('top-left');
const placements=['top-left','top-center','top-right','middle-left','middle-center','middle-right','bottom-left','bottom-center','bottom-right'];
const showPlacementsGroup = ref(false);
</script>