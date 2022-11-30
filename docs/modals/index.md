# Modal

Use Bootstrap’s Modal to add dialogs to your site for lightboxes, user notifications, or completely custom content.

## Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<WButton variant="primary" @click="modal1=!modal1">
Launch demo modal
</WButton>

<WModal v-model="modal1" header="Modal title">
  Modal Body
</WModal>

```html

<Button variant="primary" @click="modal1=!modal1">
    Launch demo modal
</Button>

<Modal v-model="modal1" header="Modal title">
    Modal Body
</Modal>
```

## Static backdrop

When `true` is set to `static` prop, the modal will not close when clicking outside it. Click the button below to try
it.

<WButton variant="primary" @click="modal2=!modal2">
Launch demo modal
</WButton>

<WModal static v-model="modal2" header="Modal title">
  Modal Body
</WModal>

```html

<Button variant="primary" @click="modal2=!modal2">
    Launch demo modal
</Button>

<Modal static v-model="modal2" header="Modal title">
    Modal Body
</Modal>
```

## Scrolling long content

When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo
below to see what we mean.

<WButton variant="primary" @click="modal3=!modal3">
Launch demo modal
</WButton>

<WModal v-model="modal3" header="Modal title">
  <div v-for="i in 50">Modal Body</div>
</WModal>

```html

<Button variant="primary" @click="modal3=!modal3">
    Launch demo modal
</Button>

<Modal v-model="modal3" header="Modal title">
    <div v-for="i in 50">Modal Body</div>
</Modal>
```

You can also create a `scrollable` modal that allows scroll the modal body by adding `scrollable` to `<Modal>`
component.

<WButton variant="primary" @click="modal4=!modal4">
Launch demo modal
</WButton>

<WModal scrollable v-model="modal4" header="Modal title">
  <div v-for="i in 50">Modal Body</div>
</WModal>

```html

<Button variant="primary" @click="modal4=!modal4">
    Launch demo modal
</Button>

<Modal scrollable v-model="modal4" header="Modal title">
    <div v-for="i in 50">Modal Body</div>
</Modal>
```

## Vertically centered

Add `centered` to `<Modal>` component to vertically center the modal.

<WButton variant="primary" @click="modal5=!modal5">
Launch demo modal
</WButton>

<WModal centered v-model="modal5" header="Modal title">
  Vertically Centered
</WModal>

```html

<Button variant="primary" @click="modal5=!modal5">
    Launch demo modal
</Button>

<Modal centered v-model="modal5" header="Modal title">
    Vertically Centered
</Modal>
```

<WButton variant="primary" @click="modal6=!modal6">
Launch demo modal
</WButton>

<WModal scrollable centered v-model="modal6" header="Modal title">
  <div v-for="i in 50">Vertically Centered & Scrollable</div>
</WModal>

```html

<Button variant="primary" @click="modal6=!modal6">
    Launch demo modal
</Button>

<Modal scrollable centered v-model="modal6" header="Modal title">
    <div v-for="i in 50">Vertically Centered & Scrollable</div>
</Modal>
```

## Using the grid

Utilize the Bootstrap grid system within a modal by nesting `<Container>` within the .modal-body. Then, use the normal
grid system classes as you would anywhere else.

<WButton variant="primary" @click="modal7=!modal7">
Launch demo modal
</WButton>

<WModal scrollable centered v-model="modal7" header="Modal title">
  <WContainer fluid>
        <WRow>
            <WCol :md="4">.col-md-4</WCol>
            <WCol :md="4" class="ms-auto">.col-md-4 .ms-auto</WCol>
        </WRow>
        <WRow class="row">
            <WCol :md="3" class="ms-auto">.col-md-3 .ms-auto</WCol>
            <WCol :md="2" class="ms-auto">.col-md-2 .ms-auto</WCol>
        </WRow>
        <WRow>
            <WCol :md="6" class="ms-auto">.col-md-6 .ms-auto</WCol>
        </WRow>
        <WRow>
            <WCol :sm="9">
                Level 1: .col-sm-9
                <WRow class="row">
                    <WCol :sm="8" :col="8">
                        Level 2: .col-8 .col-sm-6
                    </WCol>
                    <WCol :col="4" :sm="6">
                        Level 2: .col-4 .col-sm-6
                    </WCol>
                </WRow>
            </WCol>
        </WRow>
    </WContainer>
</WModal>

```html

<Button variant="primary" @click="modal7=!modal7">
    Launch demo modal
</Button>

<Modal v-model="modal7" header="Modal title">
    <Container fluid>
        <Row>
            <Col :md="4">
            .col-md-4</Col>
            <Col :md="4" class="ms-auto">
            .col-md-4 .ms-auto</Col>
        </Row>
        <Row class="row">
            <Col :md="3" class="ms-auto">
            .col-md-3 .ms-auto</Col>
            <div :md="2" class="ms-auto">.col-md-2 .ms-auto</div>
        </Row>
        <Row>
            <Col :md="6" class="ms-auto">
            .col-md-6 .ms-auto</Col>
        </Row>
        <Row class="row">
            <Col :sm="9">
            Level 1: .col-sm-9
            <Row class="row">
                <Col :sm="8" :col="8">
                Level 2: .col-8 .col-sm-6
                </Col>
                <Col :col="4" :sm="6">
                Level 2: .col-4 .col-sm-6
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
</Modal>
```

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at
certain breakpoints to avoid horizontal scrollbars on narrower viewports. This can be controlled by `size` prop.
Supported values are `'sm'`,`'lg'` and `'xl'`.

<template v-for="size in ['sm','lg','xl']">

<WButton variant="primary" @click="modalSizes[size]=true">
Launch {{size}} modal
</WButton>

<WModal v-model="modalSizes[size]" :size="size" header="Modal title">
  <div v-for="i in 10">Different Size Modal</div>
</WModal>

```html

<Button variant="primary" @click="modalSizes[size]=!modalSizes[size]">
    Launch {{size}} modal
</Button>

<Modal v-model="modalSizes[size]" :size="size" header="Modal title">
    <div v-for="i in 10">Different Size Modal</div>
</Modal>
```

</template>

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are
placed on a `.modal-dialog`.

<template v-for="size in ['always','sm-down','md-down','lg-down','xl-down','xxl-down']">

<WButton class="m-1" variant="primary" @click="modalFullScreen[size]=true">
Launch <strong>{{size}}</strong> fullscreen modal
</WButton>

<WModal :fullscreen="size==='always'?true:size" v-model="modalFullScreen[size]" :header="size+ ' fullscreen modal'">
  <div v-for="i in 10">Different Size Modal</div>
</WModal>
</template>

```html

<template v-for="size in ['always','sm-down','md-down','lg-down','xl-down','xxl-down']">
    <Button class="m-1" variant="primary" @click="modalFullScreen[size]=true">
        Launch <strong>{{size}}</strong> fullscreen modal
    </Button>

    <Modal :fullscreen="size==='always'?true:size" 
           v-model="modalFullScreen[size]" 
           :header="size+ ' fullscreen modal'">
        <div v-for="i in 10">Different Size Modal</div>
    </Modal>
</template>
```

<script setup>
import {ref} from "vue"; 

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
const modal5 = ref(false);
const modal6 = ref(false);
const modal7 = ref(false);
const modalSizes = ref({sm:false,lg:false,xl:false});
//true | false | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
const modalFullScreen = ref({
always:false,
'sm-down':false,
'md-down':false,
'lg-down':false,
'xl-down':false,
'xxl-down':false,
});
</script>