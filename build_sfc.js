import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import globby from 'globby';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = resolve(__dirname);
const srcDir = resolve(projectRoot, 'src');
const distDir = resolve(projectRoot, 'dist');

async function build() {
    console.log("Cleaning dist directory...");
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    console.log("Copying files to dist/ and replacing aliases...");
    const files = await globby(['src/**/*']);
    
    let aliasCount = 0;
    
    for (const file of files) {
        const absoluteSrcFile = resolve(projectRoot, file);
        const relativeToSrc = relative(srcDir, absoluteSrcFile);
        const absoluteDistFile = resolve(distDir, relativeToSrc);
        const distFileDir = dirname(absoluteDistFile);
        
        // Ensure the directory exists
        mkdirSync(distFileDir, { recursive: true });
        
        if (file.endsWith('.ts') || file.endsWith('.vue')) {
            let content = readFileSync(absoluteSrcFile, 'utf8');
            const regex = /(['"])(@\/[^'"]+)(['"])/g;
            
            content = content.replace(regex, (match, quote1, importPath, quote2) => {
                const cleanPath = importPath.slice(2); // Remove '@/'
                const targetSrcFile = resolve(srcDir, cleanPath);
                
                // We calculate relative path from the current file's directory to the target file
                const currentFileDir = dirname(absoluteSrcFile);
                let relPath = relative(currentFileDir, targetSrcFile);
                
                if (!relPath.startsWith('.')) {
                    relPath = './' + relPath;
                }
                
                aliasCount++;
                return `${quote1}${relPath}${quote2}`;
            });
            
            writeFileSync(absoluteDistFile, content, 'utf8');
        } else {
            // Copy non-JS/TS/Vue files (like css, assets, etc.) as is
            const content = readFileSync(absoluteSrcFile);
            writeFileSync(absoluteDistFile, content);
        }
    }
    
    console.log(`Successfully copied files and replaced ${aliasCount} path aliases.`);
    
    console.log("Dynamically scanning for entry points...");
    // Find all index.ts files in src/
    const indexFiles = await globby(['src/**/index.ts']);
    
    console.log("Updating package.json exports and entry_points.ts...");
    let exportsContent = {
        "./dist/style.css": "./dist/style.css",
        "./dist/wovoui.css": "./dist/style.css",
        "./style.css": "./dist/style.css"
    };

    let entryPointsContent = "";

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
            "import": `./dist/${keyWithoutExtension}.ts`,
            "types": `./dist/${keyWithoutExtension}.ts`,
        };

        entryPointsContent += `\t"${keyWithoutExtension}": resolve(__dirname, "src/${relativeToSrc}"),\n`;
    });

    // Write dynamically generated entry_points.ts
    const entryPointsFileContent = `import {resolve} from "path";\n\nexport default {\n${entryPointsContent}}`;
    writeFileSync(resolve(projectRoot, 'entry_points.ts'), entryPointsFileContent, 'utf8');
    console.log("entry_points.ts updated successfully.");

    // Update package.json
    const packageJsonPath = resolve(projectRoot, 'package.json');
    let packageContent = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    
    packageContent['main'] = "./dist/index.ts";
    packageContent['module'] = "./dist/index.ts";
    packageContent['types'] = "./dist/index.ts";
    packageContent['files'] = ["dist"];
    packageContent['exports'] = exportsContent;

    writeFileSync(packageJsonPath, JSON.stringify(packageContent, null, 4), 'utf8');
    console.log("package.json updated successfully.");
}

build().catch(console.error);
