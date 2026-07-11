import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import globby from 'globby';
import { parse } from 'vue-docgen-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const packageJsonPath = path.resolve(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version || '1.0.0';
  const packageName = packageJson.name || '@wovosoft/wovoui';

  const componentsPattern = 'src/components/**/*.vue';
  const components = await globby(componentsPattern, { cwd: __dirname });

  console.log(`Found ${components.length} components. Parsing...`);

  const tags = [];

  for (const componentFile of components) {
    const absolutePath = path.resolve(__dirname, componentFile);
    const relativePath = './' + componentFile.replace(/\\/g, '/');
    const componentName = path.basename(componentFile, '.vue');

    try {
      const doc = await parse(absolutePath, {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        jsx: true,
      });

      const description = (doc.description || '').trim();
      const attributes = (doc.props || []).map(prop => ({
        name: prop.name,
        required: prop.required,
        description: prop.description,
        value: {
          kind: 'expression',
          type: prop.type ? prop.type.name : 'any'
        },
        default: prop.defaultValue ? prop.defaultValue.value : undefined,
      }));

      const events = (doc.events || []).map(event => ({
        name: event.name,
        description: event.description,
      }));

      const slots = (doc.slots || []).map(slot => ({
        name: slot.name,
        description: slot.description,
      }));

      tags.push({
        name: doc.displayName || componentName,
        description,
        attributes,
        events,
        slots,
        source: {
          module: relativePath,
          symbol: doc.exportName || 'default'
        }
      });
    } catch (e) {
      console.warn(`[Warning] Failed to parse ${componentFile}: ${e.message}. Using basic definition.`);
      tags.push({
        name: componentName,
        description: `Component: ${componentName}`,
        source: {
          module: relativePath,
          symbol: 'default'
        }
      });
    }
  }

  const webTypes = {
    framework: 'vue',
    name: packageName,
    version: version,
    contributions: {
      html: {
        'description-markup': 'markdown',
        'types-syntax': 'typescript',
        tags: tags.sort((a, b) => a.name.localeCompare(b.name)),
      }
    }
  };

  const outputPath = path.resolve(__dirname, 'web-types.json');
  fs.writeFileSync(outputPath, JSON.stringify(webTypes, null, 2));
  console.log(`Successfully generated web-types.json at ${outputPath}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
