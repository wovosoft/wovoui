# ⚡️ wovoui

[![NPM Version](https://img.shields.io/npm/v/@wovosoft/wovoui?color=blue&style=flat-square)](https://www.npmjs.com/package/@wovosoft/wovoui)
[![License](https://img.shields.io/npm/l/@wovosoft/wovoui?color=green&style=flat-square)](https://github.com/wovosoft/wovoui/blob/master/LICENSE)
[![Vue Support](https://img.shields.io/badge/Vue-3.x-4fc08d?style=flat-square&logo=vue.js)](https://v3.vuejs.org/)
[![Bootstrap Support](https://img.shields.io/badge/Bootstrap-5.x-7952b3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

**wovoui** is a high-performance, type-safe Vue 3 component library built on top of **Bootstrap 5** styling and design
principles. It replaces Bootstrap's native jQuery/Vanilla JS plugins with fully reactive Vue 3 logic, while shipping
source Single File Components (SFCs) directly for optimal customization, build-time compilation, and tree-shaking.

---

## 🚀 Key Features

- **Direct SFC Shipping**: Raw Vue Single File Components (`.vue`) and TypeScript source files (`.ts`) are exported
  directly. Your bundler (like Vite) compiles them natively, enabling deep integration, optimal tree-shaking, and custom
  styling overrides.
- **Pure Vue 3 Logic**: Zero reliance on Bootstrap's native JavaScript files or jQuery. All interactive components (
  Modals, Dropdowns, Tooltips, Popovers, Collapses) are powered by Vue 3 reactivity.
- **TypeScript First**: End-to-end type safety with first-class TypeScript support and pre-generated declarations.
- **Granular Imports**: Import the entire library or individual modules (`@wovosoft/wovoui/components/Accordion`, etc.)
  to minimize bundle size.
- **Rich Forms & Layouts**: Includes advanced form controls (Datepicker, Multiselect, Calendar, TypeHead) and
  comprehensive layout elements (Flex, Grid, Stack).

---

## 📦 Installation

Install the package via your preferred package manager:

```bash
# Using npm
npm install @wovosoft/wovoui

# Using yarn
yarn add @wovosoft/wovoui

# Using pnpm
pnpm add @wovosoft/wovoui

# Using bun
bun add @wovosoft/wovoui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install bootstrap bootstrap-icons dayjs @popperjs/core vue
```

### Dev Dependencies (Recommended)

Since **wovoui** ships raw SFC files containing `<style lang="scss">`, you should install Sass in your project to
compile the components:

```bash
npm install -D sass
```

---

## 🛠 Setup & Usage

### 1. Import CSS

Import Bootstrap and the Wovoui utility styles in your entry file (e.g., `main.ts` or `app.ts`):

```typescript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@wovosoft/wovoui/style.css';
```

### 2. Basic Usage

Import components directly from the main entry point:

```vue

<template>
  <div class="container py-4">
    <Button variant="primary" @click="showModal = true">
      Open Modal
    </Button>

    <Modal v-model="showModal" title="Hello wovoui!">
      <p>This modal is fully powered by Vue 3 logic & Bootstrap 5 styles.</p>
      <template #footer>
        <Button variant="secondary" @click="showModal = false">Close</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import {Button, Modal} from '@wovosoft/wovoui';

  const showModal = ref(false);
</script>
```

### 3. Modular Imports (Optimal Tree-Shaking)

You can import components directly from their specific sub-paths:

```typescript
import {Accordion, AccordionItem} from '@wovosoft/wovoui/components/Accordion';
import {Datepicker} from '@wovosoft/wovoui/components/Form';
```

---

## 🗃 Components Directory

| Category                 | Components                                                                                                                                                                                                                                                                                             |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Form**                 | `Calendar`, `Checkbox`, `CheckboxGroup`, `Datepicker`, `Feedback`, `FeedbackMessages`, `FormControl`, `FormGroup`, `FormLabel`, `Input`, `InputGroup`, `InputGroupText`, `Multiselect`, `Radio`, `RadioGroup`, `Range`, `Rating`, `Select`, `SpinButton`, `Tags`, `Textarea`, `Timepicker`, `TypeHead` |
| **Layout**               | `Container`, `Row`, `Col`, `Column`, `Flex`, `FlexItem`, `Grid`, `GridCol`, `Stack`, `Layout`                                                                                                                                                                                                          |
| **Navigation**           | `Link`, `Menu`, `Nav`, `NavItem`, `NavItemDropdown`, `NavLink`, `Navbar`, `NavbarBrand`, `NavbarNav`, `NavbarToggler`, `PageItem`, `PageLink`, `Pagination`, `PanelMenu`                                                                                                                               |
| **Notification**         | `Popover`, `Toast`, `ToastBody`, `ToastContainer`, `Tooltip`                                                                                                                                                                                                                                           |
| **Accordion & Collapse** | `Accordion`, `AccordionBody`, `AccordionHeader`, `AccordionItem`, `Collapse`                                                                                                                                                                                                                           |
| **Indicators**           | `Progress`, `ProgressBar`, `Spinner`                                                                                                                                                                                                                                                                   |
| **Modal & Offcanvas**    | `Modal`, `ModalBody`, `ModalDialog`, `ModalFooter`, `ModalHeader`, `ModalTitle`, `Offcanvas`, `OffcanvasBody`, `OffcanvasHeader`, `OffcanvasTitle`                                                                                                                                                     |
| **UI elements**          | `Aspect`, `Badge`, `Chart`, `Figure`, `Placeholder`, `Vr`                                                                                                                                                                                                                                              |
| **Directives**           | `vOnClickOutside`, `vVr`, `vModal`                                                                                                                                                                                                                                                                     |

---

## 📝 Configuration (Vite)

To ensure smooth compilation of directly shipped Vue and TS source files in a Vite application, configure your alias or
resolution settings if needed. Standard Vite setups will recognize the exports automatically:

```typescript
// vite.config.ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    // sass and css are handled automatically once sass is installed
});
```

---

## 📖 Documentation & Examples

For full details, API references, props, events, and interactive examples, read the full *
*[Documentation here](http://wovoui.vercel.app)**.

---

## 🤝 Developed By

Developed with ❤️ by **[Narayan Adhikary](https://github.com/wovosoft)** at **[WovoSoft](https://wovosoft.com)**.
Contributions and bug reports are welcome on [GitHub](https://github.com/wovosoft/wovoui).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.