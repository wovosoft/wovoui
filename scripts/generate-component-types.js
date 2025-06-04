#!/usr/bin/env node

/**
 * Script to generate TypeScript type files for all Vue components
 * This helps maintain consistent TypeScript support across the entire library
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const EXCLUDE_DIRS = ['Internal', 'Util']; // Directories to skip

/**
 * Get all component directories
 */
function getComponentDirectories() {
  return fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !EXCLUDE_DIRS.includes(name));
}

/**
 * Get Vue components in a directory
 */
function getVueComponents(dirPath) {
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => file.endsWith('.vue'))
    .map(file => file.replace('.vue', ''));
}

/**
 * Generate types.ts template for a component directory
 */
function generateTypesTemplate(componentDir, components) {
  const imports = `import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';`;

  const interfaces = components.map(component => `
/**
 * Props interface for the ${component} component.
 */
export interface ${component}Props extends HasTag, HasColorVariant {
  // TODO: Add specific props for ${component}
}

/**
 * Slot definitions for ${component} component
 */
export interface ${component}Slots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ${component} component
 */
export interface ${component}Emits {
  // TODO: Add specific emits for ${component}
}`).join('\n');

  return `/**
 * Type definitions for ${componentDir} components
 */

${imports}
${interfaces}`;
}

/**
 * Generate index.ts template for a component directory
 */
function generateIndexTemplate(componentDir, components) {
  const componentExports = components.map(component => 
    `export {default as ${component}} from "./${component}.vue";`
  ).join('\n');

  const typeExports = components.map(component => `
export type {
  ${component}Props,
  ${component}Slots,
  ${component}Emits
} from "./types";`).join('');

  return `// Component exports
${componentExports}

// Type exports${typeExports}`;
}

/**
 * Update global.d.ts with all components
 */
function updateGlobalTypes(allComponents) {
  const imports = Object.entries(allComponents).map(([dir, components]) => 
    components.map(component => 
      `  ${component}Props,\n  ${component}Slots,\n  ${component}Emits`
    ).join(',\n')
  ).join(',\n');

  const declarations = Object.entries(allComponents).map(([dir, components]) => 
    `    // ${dir} Components\n` + 
    components.map(component => 
      `    ${component}: DefineComponent<${component}Props, ${component}Slots, ${component}Emits>;`
    ).join('\n')
  ).join('\n\n');

  return `/**
 * Global component type declarations for WovoUI
 * This file provides comprehensive type information for all components
 * enabling PhpStorm/WebStorm IDE support and global component registration
 */

import type { DefineComponent } from 'vue';

// Import all component types
import type {
${imports}
} from './components/types';

declare module 'vue' {
  export interface GlobalComponents {
${declarations}
  }
}

// Ensure this file is treated as a module
export {};`;
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Generating TypeScript types for all components...\n');

  const componentDirs = getComponentDirectories();
  const allComponents = {};

  // Process each component directory
  componentDirs.forEach(dir => {
    const dirPath = path.join(COMPONENTS_DIR, dir);
    const components = getVueComponents(dirPath);
    
    if (components.length === 0) {
      console.log(`⚠️  No Vue components found in ${dir}`);
      return;
    }

    allComponents[dir] = components;
    console.log(`📁 ${dir}: ${components.join(', ')}`);

    // Check if types.ts exists
    const typesPath = path.join(dirPath, 'types.ts');
    if (!fs.existsSync(typesPath)) {
      console.log(`   ✨ Creating types.ts for ${dir}`);
      const typesContent = generateTypesTemplate(dir, components);
      fs.writeFileSync(typesPath, typesContent);
    } else {
      console.log(`   ✅ types.ts already exists for ${dir}`);
    }

    // Update index.ts if needed
    const indexPath = path.join(dirPath, 'index.ts');
    if (fs.existsSync(indexPath)) {
      console.log(`   📝 Consider updating index.ts for ${dir} to use types.ts`);
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Directories processed: ${componentDirs.length}`);
  console.log(`   Total components: ${Object.values(allComponents).flat().length}`);
  
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review generated types.ts files`);
  console.log(`   2. Add specific props for each component`);
  console.log(`   3. Update index.ts files to export from types.ts`);
  console.log(`   4. Update global.d.ts with all component types`);
}

// Run if this is the main module
main();