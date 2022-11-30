# Offcanvas / Sidebar

Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript
plugin.

## How it works

Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, or bottom edge of
the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and data
attributes are used to invoke our JavaScript.

- Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are
  separate plugins.
- Similarly, some source Sass variables for offcanvas’s styles and dimensions are inherited from the modal’s variables.
- When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.
- Similar to modals, only one offcanvas can be shown at a time.

## Examples

Below is an offcanvas example that is shown by default (via .show on .offcanvas). Offcanvas includes support for a
header with a close button and an optional body class for some initial padding. We suggest that you include offcanvas
headers with dismiss actions whenever possible, or provide an explicit dismiss action.

<WButton @click="one=!one">Toggle Offcanvas</WButton>

<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="one">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

```html

<Button @click="one=!one">Toggle Offcanvas</Button>
<OffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="one">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>
```

## Placement

Use values for the prop `placement` among the options given below:

- `start|left` places offcanvas on the left of the viewport (shown above)
- `end|right` places offcanvas on the right of the viewport
- `top` places offcanvas on the top of the viewport
- `bottom` places offcanvas on the bottom of the viewport

<WButton @click="top=!top">Top Offcanvas</WButton>
<WButton class="ms-2" @click="bottom=!bottom">Bottom Offcanvas</WButton>
<WButton class="ms-2" @click="left=!left">Left Offcanvas</WButton>
<WButton class="ms-2" @click="right=!right">Right Offcanvas</WButton>


<WOffCanvas aria-labelledby="offcanvasLabel" placement="top" header="Top Offcanvas" v-model="top">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

<WOffCanvas aria-labelledby="offcanvasLabel" placement="bottom" header="Bottom Offcanvas" v-model="bottom">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

<WOffCanvas aria-labelledby="offcanvasLabel" placement="left" header="Left Offcanvas" v-model="left">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

<WOffCanvas aria-labelledby="offcanvasLabel" placement="right" header="Right Offcanvas" v-model="right">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

```html

<Button @click="top=!top">Top Offcanvas</Button>
<Button class="ms-2" @click="bottom=!bottom">Bottom Offcanvas</Button>
<Button class="ms-2" @click="left=!left">Left Offcanvas</Button>
<Button class="ms-2" @click="right=!right">Right Offcanvas</Button>


<OffCanvas aria-labelledby="offcanvasLabel" placement="top" header="Top Offcanvas" v-model="top">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>

<OffCanvas aria-labelledby="offcanvasLabel" placement="bottom" header="Bottom Offcanvas" v-model="bottom">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>

<OffCanvas aria-labelledby="offcanvasLabel" placement="left" header="Left Offcanvas" v-model="left">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>

<OffCanvas aria-labelledby="offcanvasLabel" placement="right" header="Right Offcanvas" v-model="right">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>
```

## Backdrop

### Hide Backdrop

Set `backdrop = false` to hide backdrop when offcanvas is shown.

<WButton @click="backdrop=!backdrop">Toggle Offcanvas</WButton>

<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="backdrop" :backdrop="false">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

```html

<Button @click="backdrop=!backdrop">Toggle Offcanvas</Button>

<OffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="backdrop" :backdrop="false">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>
```

## Disable body scroll

<WButton @click="bodyScroll=!bodyScroll">Toggle Offcanvas</WButton>

<WOffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="bodyScroll" :enableBodyScroll="false">
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

```html

<Button @click="bodyScroll=!bodyScroll">Toggle Offcanvas</Button>

<OffCanvas aria-labelledby="offcanvasLabel" header="Offcanvas" v-model="bodyScroll" :enableBodyScroll="false">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>

```

## Variants

Use the props `bg-variant` and `text-variant` to control the theme color variant of the background and text, respectively.
Alternatively, you can apply styles or classes to specify the background and text colors.

<WButton @click="variant=!variant">Toggle Offcanvas</WButton>

<WOffCanvas bg-variant="dark" text-variant="light" header="Offcanvas" v-model="variant">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</WOffCanvas>

```html

<Button @click="variant=!variant">Toggle Offcanvas</Button>

<OffCanvas bg-variant="dark" text-variant="light" header="Offcanvas" v-model="variant">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</OffCanvas>

```

//Some other features are coming very soon...

<script setup>
import {ref} from "vue"; 

const one=ref(false);
const top=ref(false);
const left=ref(false);
const right=ref(false);
const bottom=ref(false);
const backdrop=ref(false);
const bodyScroll=ref(false);
const variant=ref(false);
</script>