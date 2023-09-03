import fs from "fs"
import path from "path";

// Specify the directory where your generated .d.ts files are located
const declarationDir = path.dirname('dist/types');


const allDTSFilesWithDepth = getAllDTSFiles(declarationDir);

replaceAliasWithRelativePaths(allDTSFilesWithDepth);

console.log('Aliases replaced with relative paths.');


// Function to replace @/ with relative paths based on depth
function replaceAliasWithRelativePaths(fileList) {
    fileList.forEach((fileInfo) => {
        const { depth, path: filePath } = fileInfo;
        const relativePath = Array.from({ length: depth }, () => '..').join('/'); // Generate relative path based on depth
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const updatedContents = fileContents.replace(/import\s+\*\s+as\s+_sapper_\s+from\s+'@\/sapper\/server';/g, `import * as _sapper_ from '${relativePath}'`);
        fs.writeFileSync(filePath, updatedContents);
    });
}


function getAllDTSFiles(dirPath, prevFiles = [], depth = 0) {
    const files = fs.readdirSync(dirPath);

    let fileList = prevFiles || [];

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            fileList = getAllDTSFiles(filePath, fileList, depth + 1);
        } else if (stats.isFile() && filePath.endsWith(".d.ts")) {
            fileList.push({
                depth,
                filePath
            });
        }
    });

    return fileList;
}
