# Indicators Components

This directory contains Vue 3 components for displaying progress indicators and loading spinners with full TypeScript support and PhpStorm/WebStorm IDE integration.

## Components

### Progress
A container component for displaying progress bars with customizable styling and behavior.

**Features:**
- Customizable height and styling
- Support for multiple progress bars
- Accessible with proper ARIA attributes
- Bootstrap-compatible styling

**Usage:**
```vue
<template>
  <Progress :value="50" variant="primary" height="20px" />
  <Progress :value="75" variant="success" striped animated />
</template>
```

### ProgressBar
Individual progress bar component that can be used standalone or within a Progress component.

**Features:**
- Configurable min/max values
- Color variants support
- Striped and animated styling
- Accessible with proper ARIA attributes
- Optional value display

**Usage:**
```vue
<template>
  <ProgressBar :value="75" variant="success" striped animated />
  <ProgressBar :value="30" :min="0" :max="100" variant="warning" />
</template>
```

### Spinner
Loading indicator component with various styles and sizes.

**Features:**
- Two animation types: border (default) and grow
- Multiple size variants (sm, lg)
- Color variant support
- Accessible with proper role and screen reader text
- Customizable HTML tag

**Usage:**
```vue
<template>
  <Spinner variant="primary" size="sm" />
  <Spinner grow variant="secondary" />
  <Spinner tag="span" variant="info" size="lg" />
</template>
```

## TypeScript Support

All components are fully typed with TypeScript and provide:

- **Props interfaces** with detailed JSDoc documentation
- **Slot definitions** for custom content
- **Emit interfaces** for future event handling
- **Global component registration** for IDE support

## IDE Support

### PhpStorm/WebStorm
- Full autocomplete for component props
- Type checking and validation
- Slot and emit suggestions
- Documentation on hover

### VS Code
- Vetur support via `vetur-tags.json` and `vetur-attributes.json`
- Vue Language Features (Volar) support
- Full TypeScript integration

## Files Structure

```
Indicators/
├── Progress.vue          # Progress container component
├── ProgressBar.vue       # Individual progress bar component
├── Spinner.vue           # Loading spinner component
├── types.ts              # TypeScript type definitions
├── index.ts              # Component and type exports
├── global.d.ts           # Global component declarations
└── README.md             # This documentation
```

## Type Definitions

All type definitions are centralized in `types.ts` and include:

- `ProgressProps`, `ProgressSlots`, `ProgressEmits`
- `ProgressBarProps`, `ProgressBarSlots`, `ProgressBarEmits`
- `SpinnerProps`, `SpinnerSlots`, `SpinnerEmits`

## Build Integration

The components are designed to work with:
- `vue-tsc` for automatic type generation
- Vite for bundling
- TypeScript strict mode
- ESM and CommonJS exports