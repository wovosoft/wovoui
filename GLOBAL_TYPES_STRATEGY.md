# Global Types Strategy for WovoUI

## 🎯 Purpose of `global.d.ts`

The `global.d.ts` file serves several critical purposes for your component library:

### 1. **Global Component Registration**
Enables IDE autocomplete for all components without explicit imports:
```vue
<template>
  <!-- All these work without imports -->
  <Progress :value="50" />
  <Button variant="primary">Click</Button>
  <Modal :show="true">Content</Modal>
  <Alert variant="success">Success!</Alert>
</template>
```

### 2. **PhpStorm/WebStorm IDE Support**
- **Component name autocomplete** when typing `<Prog...`
- **Prop suggestions** with types and descriptions
- **Slot autocomplete** with documentation
- **Type validation** in real-time
- **Documentation on hover**

### 3. **Library Consumer Experience**
- Consistent typing across all components
- Better developer experience
- Reduced need for manual type imports
- Enterprise-level IDE support

## 📁 Current Structure vs Recommended

### ❌ Current (Fragmented)
```
src/components/
├── Indicators/global.d.ts    # Only 3 components
├── Button/                   # No global types
├── Modal/                    # No global types
└── ...                       # 20+ other directories
```

### ✅ Recommended (Centralized)
```
src/
├── global.d.ts              # ALL components registered
├── components/
│   ├── Indicators/
│   │   ├── types.ts         # Component-specific types
│   │   └── index.ts         # Exports
│   ├── Button/
│   │   ├── types.ts         # Component-specific types
│   │   └── index.ts         # Exports
│   └── ...
```

## 🚀 Implementation Strategy

### Phase 1: Centralize Global Types ✅ DONE
- Created `/src/global.d.ts` with all component placeholders
- Removed individual `global.d.ts` files
- Set up structure for all component directories

### Phase 2: Generate Component Types (NEXT)
Use the provided script to generate `types.ts` for all directories:

```bash
node scripts/generate-component-types.js
```

This will:
- Scan all component directories
- Generate `types.ts` templates for each
- Provide TODO comments for specific props
- Create consistent structure

### Phase 3: Populate Component Types
For each component directory, update the generated `types.ts`:

```typescript
// Example: Button/types.ts
export interface ButtonProps extends HasTag, HasColorVariant {
  size?: ButtonSizes;           // 'sm' | 'lg'
  outline?: boolean;            // Outline style
  disabled?: boolean;           // Disabled state
  type?: 'button' | 'submit' | 'reset';
  // ... other specific props
}
```

### Phase 4: Update Index Files
Ensure each `index.ts` exports from `types.ts`:

```typescript
// Component exports
export {default as Button} from "./Button.vue";
export {default as ButtonGroup} from "./ButtonGroup.vue";

// Type exports
export type {
  ButtonProps,
  ButtonSlots,
  ButtonEmits,
  ButtonGroupProps,
  ButtonGroupSlots,
  ButtonGroupEmits
} from "./types";
```

### Phase 5: Complete Global Registration
Update `/src/global.d.ts` to import and register all component types.

## 🛠️ Tools Provided

### 1. **Generation Script**
`scripts/generate-component-types.js` - Automatically creates type templates

### 2. **Centralized Global Types**
`src/global.d.ts` - Single file for all global component registration

### 3. **Example Implementation**
`src/components/Indicators/` - Complete example of the new pattern

## 📊 Benefits

### For Developers Using Your Library:
- ✅ **Instant autocomplete** for all components
- ✅ **Type safety** preventing runtime errors
- ✅ **Rich documentation** on hover
- ✅ **Consistent experience** across all components

### For Library Maintainers:
- ✅ **Single source of truth** for types
- ✅ **Automated generation** reduces manual work
- ✅ **Consistent patterns** across all components
- ✅ **Better maintainability**

### For PhpStorm/WebStorm Users:
- ✅ **Full IDE integration** with web-types.json
- ✅ **Component discovery** without imports
- ✅ **Prop validation** in real-time
- ✅ **Documentation integration**

## 🔄 Migration Path

### Current State
- ✅ Indicators components fully typed
- ⏳ 20+ other component directories need types
- ⏳ Global registration incomplete

### Target State
- ✅ All components have `types.ts`
- ✅ All components globally registered
- ✅ Complete PhpStorm/WebStorm support
- ✅ Consistent developer experience

## 📝 Next Actions

1. **Run the generation script**:
   ```bash
   node scripts/generate-component-types.js
   ```

2. **Review generated files** and add specific props for each component

3. **Update index.ts files** to export from types.ts

4. **Complete global.d.ts** with all component imports

5. **Test IDE support** in PhpStorm/WebStorm

6. **Update documentation** with new typing approach

## 🎯 Expected Outcome

After full implementation, developers will have:
- **Enterprise-level IDE support** for all 50+ components
- **Type-safe development** with real-time validation
- **Rich autocomplete** and documentation
- **Consistent experience** across the entire library

This approach scales to any number of components and provides the best possible developer experience for your library users.