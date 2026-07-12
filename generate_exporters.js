import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from 'url';
import globby from 'globby';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = resolve(__dirname);
const srcDir = resolve(projectRoot, 'src');

async function run() {
    console.log("Dynamically scanning for entry points...");
    // Find all index.ts files in src/
    const indexFiles = await globby(['src/**/index.ts']);

    let entryPointsContent = "";
    let exportsContent = {
        "./dist/style.css": "./dist/wovoui.css",
        "./dist/wovoui.css": "./dist/wovoui.css",
        "./types": "./dist/index.d.ts"
    };

    indexFiles.forEach((file) => {
        const absolutePath = resolve(projectRoot, file);
        const relativeToSrc = relative(srcDir, absolutePath);
        const keyWithoutExtension = relativeToSrc.replace(/\.ts$/, ""); // e.g., 'components/Accordion/index'
        
        let first_key;
        if (relativeToSrc === 'index.ts') {
            first_key = ".";
        } else {
            first_key = "./" + relativeToSrc.replace(/\/index\.ts$/, "");
        }
        
        exportsContent[first_key] = {
            "import": `./dist/${keyWithoutExtension}.js`,
            "types": `./dist/${keyWithoutExtension}.d.ts`,
        };

        entryPointsContent += `\t"${keyWithoutExtension}": resolve(__dirname, "src/${relativeToSrc}"),\n`;
    });

    // Write entry_points.ts
    const entryPointsFileContent = `import {resolve} from "path";\n\nexport default {\n${entryPointsContent}}`;
    writeFileSync(resolve(projectRoot, 'entry_points.ts'), entryPointsFileContent, 'utf8');
    console.log("Entry Points written successfully at entry_points.ts");

    // Update package.json
    const packageJsonPath = resolve(projectRoot, 'package.json');
    let packageContent = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    
    // Set standard compiled entries
    packageContent['main'] = "./dist/index.js";
    packageContent['module'] = "./dist/index.js";
    packageContent['types'] = "./dist/index.d.ts";
    packageContent['files'] = ["dist"];
    packageContent['exports'] = exportsContent;

    writeFileSync(packageJsonPath, JSON.stringify(packageContent, null, 4), 'utf8');
    console.log("package.json updated successfully.");
}

run().catch(console.error);
